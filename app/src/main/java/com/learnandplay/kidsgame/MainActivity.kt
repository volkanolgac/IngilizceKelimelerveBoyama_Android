package com.learnandplay.kidsgame

import android.annotation.SuppressLint
import android.os.Bundle
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity
import androidx.webkit.WebViewAssetLoader
import java.io.InputStream

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private lateinit var ttsInterface: AndroidTTSInterface

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)
        webView.setBackgroundColor(android.graphics.Color.parseColor("#F0FDF4"))
        ttsInterface = AndroidTTSInterface(this)

        val settings: WebSettings = webView.settings
        settings.javaScriptEnabled = true
        settings.domStorageEnabled = true
        settings.databaseEnabled = true
        settings.mediaPlaybackRequiresUserGesture = false
        settings.allowFileAccess = true
        settings.allowContentAccess = true
        settings.useWideViewPort = true
        settings.loadWithOverviewMode = true
        settings.setSupportZoom(false)
        settings.builtInZoomControls = false
        settings.displayZoomControls = false
        settings.cacheMode = WebSettings.LOAD_NO_CACHE
        settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW

        webView.isVerticalScrollBarEnabled = false
        webView.isHorizontalScrollBarEnabled = false
        webView.overScrollMode = android.view.View.OVER_SCROLL_NEVER

        val assetLoader = WebViewAssetLoader.Builder()
            .setDomain("appassets.androidplatform.net")
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .addPathHandler("/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        webView.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView,
                request: WebResourceRequest
            ): WebResourceResponse? {
                val url = request.url
                if (url.host == "appassets.androidplatform.net") {
                    val path = url.path ?: ""
                    val cleanPath = path.trimStart('/')

                    val candidates = mutableListOf<String>()
                    if (cleanPath.startsWith("assets/assets/")) {
                        candidates.add(cleanPath.removePrefix("assets/"))
                    }
                    if (cleanPath.startsWith("assets/")) {
                        candidates.add(cleanPath.removePrefix("assets/"))
                        candidates.add(cleanPath)
                    } else {
                        candidates.add(cleanPath)
                        candidates.add("assets/$cleanPath")
                    }

                    for (candidate in candidates) {
                        try {
                            val stream: InputStream = assets.open(candidate)
                            val mimeType = getMimeType(candidate)
                            val charset = if (mimeType.startsWith("text/") || mimeType == "application/json" || mimeType == "text/javascript") "UTF-8" else null
                            val headers = mapOf(
                                "Access-Control-Allow-Origin" to "*",
                                "Access-Control-Allow-Methods" to "GET, OPTIONS",
                                "Cache-Control" to "no-cache"
                            )
                            return WebResourceResponse(mimeType, charset, 200, "OK", headers, stream)
                        } catch (_: Exception) {
                            // Continue checking next candidate
                        }
                    }

                    try {
                        val resp = assetLoader.shouldInterceptRequest(url)
                        if (resp != null) {
                            return resp
                        }
                    } catch (e: Exception) {
                        android.util.Log.e("LearnAndPlay", "Asset loader exception for $url", e)
                    }
                }
                return null
            }

            override fun onReceivedError(
                view: WebView?,
                request: WebResourceRequest?,
                error: android.webkit.WebResourceError?
            ) {
                super.onReceivedError(view, request, error)
                android.util.Log.e("LearnAndPlay", "WebView error: ${error?.description} for ${request?.url}")
            }

            override fun onReceivedHttpError(
                view: WebView?,
                request: WebResourceRequest?,
                errorResponse: WebResourceResponse?
            ) {
                super.onReceivedHttpError(view, request, errorResponse)
                android.util.Log.e("LearnAndPlay", "WebView HTTP error ${errorResponse?.statusCode} for ${request?.url}")
            }
        }

        webView.webChromeClient = object : android.webkit.WebChromeClient() {
            override fun onConsoleMessage(consoleMessage: android.webkit.ConsoleMessage?): Boolean {
                android.util.Log.d("LearnAndPlay", "[JS] ${consoleMessage?.message()} (${consoleMessage?.lineNumber()})")
                return true
            }
        }

        webView.addJavascriptInterface(ttsInterface, "AndroidTTS")

        // Intelligent back button handling: check web navigation first
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                webView.evaluateJavascript("window.handleAndroidBack ? window.handleAndroidBack() : false") { result ->
                    val handled = result != null && (result.trim() == "true" || result.trim() == "\"true\"")
                    if (!handled) {
                        isEnabled = false
                        onBackPressedDispatcher.onBackPressed()
                        isEnabled = true
                    }
                }
            }
        })

        webView.loadUrl("https://appassets.androidplatform.net/assets/index.html")
    }

    private fun getMimeType(path: String): String {
        val lower = path.lowercase()
        return when {
            lower.endsWith(".html") || lower.endsWith(".htm") -> "text/html"
            lower.endsWith(".js") || lower.endsWith(".mjs") -> "text/javascript"
            lower.endsWith(".css") -> "text/css"
            lower.endsWith(".json") -> "application/json"
            lower.endsWith(".svg") -> "image/svg+xml"
            lower.endsWith(".png") -> "image/png"
            lower.endsWith(".jpg") || lower.endsWith(".jpeg") -> "image/jpeg"
            lower.endsWith(".webp") -> "image/webp"
            lower.endsWith(".gif") -> "image/gif"
            lower.endsWith(".ico") -> "image/x-icon"
            lower.endsWith(".woff2") -> "font/woff2"
            lower.endsWith(".woff") -> "font/woff"
            lower.endsWith(".ttf") -> "font/ttf"
            lower.endsWith(".mp3") -> "audio/mpeg"
            lower.endsWith(".wav") -> "audio/wav"
            lower.endsWith(".ogg") -> "audio/ogg"
            else -> "application/octet-stream"
        }
    }

    override fun onResume() {
        super.onResume()
        webView.onResume()
    }

    override fun onPause() {
        super.onPause()
        webView.onPause()
        ttsInterface.stop()
    }

    override fun onDestroy() {
        ttsInterface.shutdown()
        webView.destroy()
        super.onDestroy()
    }
}
