import java.io.File
import java.security.KeyStore

plugins {
    id("com.android.application")
}

android {
    namespace = "com.learnandplay.kidsgame"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.learnandplay.kidsgame.paquzr"
        minSdk = 24
        targetSdk = 36
        versionCode = 2
        versionName = "2.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    signingConfigs {
        create("debugConfig") {
            storeFile = file("${rootDir}/debug.keystore")
            storePassword = "android"
            keyAlias = "androiddebugkey"
            keyPassword = "android"
        }

        // Platform-provided release keystore resolution
        fun getEnvOrProp(vararg keys: String): String? {
            for (k in keys) {
                val envVal = System.getenv(k)
                if (!envVal.isNullOrBlank()) return envVal.trim()
                val propVal = project.findProperty(k)?.toString()
                if (!propVal.isNullOrBlank()) return propVal.trim()
                val sysVal = System.getProperty(k)
                if (!sysVal.isNullOrBlank()) return sysVal.trim()
            }
            return null
        }

        val ksEnvPath = getEnvOrProp(
            "KEYSTORE_PATH",
            "STORE_FILE",
            "RELEASE_STORE_FILE",
            "ANDROID_KEYSTORE_PATH",
            "SIGNING_KEYSTORE_PATH",
            "SIGNING_KEYSTORE_FILE",
            "PLAY_KEYSTORE_PATH",
            "KEYSTORE",
            "RELEASE_KEYSTORE",
            "android.injected.signing.store.file"
        )

        val ksCandidate: File? = if (!ksEnvPath.isNullOrBlank()) {
            file(ksEnvPath)
        } else {
            val searchDirs = listOf(file("/tmp"), rootDir, file("${rootDir}/app"))
            var foundFile: File? = null
            for (dir in searchDirs) {
                try {
                    if (dir.exists() && dir.isDirectory) {
                        val candidates = dir.listFiles { f ->
                            f.isFile &&
                            (f.name.contains("keystore", ignoreCase = true) || f.name.endsWith(".jks") || f.name.endsWith(".keystore") || f.name.endsWith(".p12")) &&
                            !f.name.contains("debug", ignoreCase = true)
                        }?.toList() ?: emptyList()
                        if (candidates.isNotEmpty()) {
                            foundFile = candidates.maxByOrNull { it.lastModified() }
                            break
                        }
                    }
                } catch (_: Throwable) {}
            }
            foundFile
        }

        if (ksCandidate != null && ksCandidate.exists()) {
            val envStorePass = getEnvOrProp(
                "KEYSTORE_PASSWORD",
                "STORE_PASSWORD",
                "RELEASE_STORE_PASSWORD",
                "KEY_STORE_PASSWORD",
                "KEYSTORE_PASS",
                "STORE_PASS",
                "SIGNING_KEYSTORE_PASSWORD",
                "android.injected.signing.store.password"
            )

            val envKeyPass = getEnvOrProp(
                "KEY_PASSWORD",
                "RELEASE_KEY_PASSWORD",
                "KEY_PASS",
                "SIGNING_KEY_PASSWORD",
                "android.injected.signing.key.password"
            )

            val envAlias = getEnvOrProp(
                "KEY_ALIAS",
                "RELEASE_KEY_ALIAS",
                "KEYSTORE_ALIAS",
                "ALIAS",
                "SIGNING_KEY_ALIAS",
                "android.injected.signing.key.alias"
            )?.takeIf { it.isNotBlank() && !it.equals("androiddebugkey", ignoreCase = true) }

            var resolvedStorePass = envStorePass
            var resolvedKeyPass = envKeyPass
            var resolvedAlias = envAlias

            val passwordAttempts = listOfNotNull(
                envStorePass?.takeIf { it.isNotEmpty() },
                "android",
                "",
                "password"
            ).distinct()

            val types = listOf("PKCS12", "JKS", KeyStore.getDefaultType()).distinct()
            var discoveredKeyStore: KeyStore? = null
            var workingPass = ""

            keystoreOpenLoop@ for (type in types) {
                for (pass in passwordAttempts) {
                    try {
                        val ks = KeyStore.getInstance(type)
                        ksCandidate.inputStream().use { fis ->
                            ks.load(fis, pass.toCharArray())
                        }
                        discoveredKeyStore = ks
                        workingPass = pass
                        println("[RELEASE SIGNING] Successfully opened KeyStore with format $type using candidate password")
                        break@keystoreOpenLoop
                    } catch (_: Throwable) {}
                }
            }

            if (discoveredKeyStore != null) {
                if (resolvedStorePass.isNullOrEmpty()) {
                    resolvedStorePass = workingPass
                }

                if (resolvedAlias == null) {
                    try {
                        val aliases = discoveredKeyStore.aliases().toList()
                        val nonDebugKey = aliases.firstOrNull { a ->
                            try {
                                discoveredKeyStore.isKeyEntry(a) && !a.equals("androiddebugkey", ignoreCase = true)
                            } catch (_: Throwable) { false }
                        }
                        val anyNonDebug = aliases.firstOrNull { a -> !a.equals("androiddebugkey", ignoreCase = true) }
                        val candidateAlias = nonDebugKey ?: anyNonDebug ?: aliases.firstOrNull()

                        if (candidateAlias != null && !candidateAlias.equals("androiddebugkey", ignoreCase = true)) {
                            resolvedAlias = candidateAlias
                            println("[RELEASE SIGNING] Discovered key alias: '$resolvedAlias'")
                        }
                    } catch (e: Throwable) {
                        println("[RELEASE SIGNING] Could not list aliases: ${e.message}")
                    }
                }

                if (resolvedKeyPass.isNullOrEmpty() && resolvedAlias != null) {
                    val keyPassAttempts = listOfNotNull(
                        envKeyPass?.takeIf { it.isNotEmpty() },
                        workingPass,
                        "android",
                        ""
                    ).distinct()

                    for (kp in keyPassAttempts) {
                        try {
                            val key = discoveredKeyStore.getKey(resolvedAlias, kp.toCharArray())
                            if (key != null) {
                                resolvedKeyPass = kp
                                break
                            }
                        } catch (_: Throwable) {}
                    }
                }
            }

            val finalStorePass = resolvedStorePass ?: envStorePass ?: "android"
            val finalKeyPass = resolvedKeyPass ?: envKeyPass ?: finalStorePass
            val finalAlias = resolvedAlias ?: "upload"

            println("[RELEASE SIGNING] Configuring release signingConfig with storeFile: ${ksCandidate.absolutePath}, alias: $finalAlias")

            create("release") {
                storeFile = ksCandidate
                storePassword = finalStorePass
                keyAlias = finalAlias
                keyPassword = finalKeyPass
            }
        } else {
            println("[RELEASE SIGNING] No platform release keystore present at configuration time. Release builds will await publish-time keystore injection.")
        }
    }

    buildTypes {
        debug {
            signingConfig = signingConfigs.getByName("debugConfig")
        }
        release {
            val releaseSigning = signingConfigs.findByName("release")
            if (releaseSigning != null) {
                signingConfig = releaseSigning
            }
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_21
        targetCompatibility = JavaVersion.VERSION_21
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("com.google.android.material:material:1.12.0")
    implementation("androidx.webkit:webkit:1.12.1")
    implementation("androidx.activity:activity-ktx:1.10.1")
}

tasks.register<Exec>("npmBuild") {
    workingDir = rootDir
    val isWindows = System.getProperty("os.name").lowercase().contains("windows")
    val npmExecutable = if (isWindows) "npm.cmd" else "npm"
    val hasNpm = try {
        val pathEnv = System.getenv("PATH") ?: ""
        pathEnv.split(File.pathSeparator).any { dir ->
            File(dir, npmExecutable).canExecute()
        }
    } catch (_: Throwable) {
        false
    }

    if (hasNpm) {
        commandLine = listOf(npmExecutable, "run", "build")
    } else {
        if (isWindows) {
            commandLine = listOf("cmd", "/c", "echo", "Using pre-built web assets")
        } else {
            commandLine = listOf("echo", "Using pre-built web assets")
        }
    }
    isIgnoreExitValue = true
}

tasks.register<Copy>("copyDistToAssets") {
    dependsOn("npmBuild")
    val distDir = file("${rootDir}/dist")
    if (distDir.exists() && distDir.isDirectory) {
        from(distDir)
        into(file("${projectDir}/src/main/assets"))
    }
}

tasks.named("preBuild") {
    dependsOn("copyDistToAssets")
}
