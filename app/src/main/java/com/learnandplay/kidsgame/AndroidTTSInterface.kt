package com.learnandplay.kidsgame

import android.app.Activity
import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.speech.tts.UtteranceProgressListener
import android.webkit.JavascriptInterface
import android.webkit.WebView
import java.util.Locale

class AndroidTTSInterface(private val activity: Activity) {
    private var tts: TextToSpeech? = null
    private var isInitialized = false
    private val pendingQueue = mutableListOf<Runnable>()

    init {
        try {
            tts = TextToSpeech(activity.applicationContext) { status ->
                try {
                    if (status == TextToSpeech.SUCCESS) {
                        val engine = tts
                        if (engine != null) {
                            val langResult = engine.setLanguage(Locale.US)
                            if (langResult != TextToSpeech.LANG_MISSING_DATA && langResult != TextToSpeech.LANG_NOT_SUPPORTED) {
                                isInitialized = true
                                configureFemaleVoice(engine, Locale.US)
                            } else {
                                isInitialized = true // Still allow attempting with default
                            }

                            engine.setOnUtteranceProgressListener(object : UtteranceProgressListener() {
                                override fun onStart(utteranceId: String?) {}

                                override fun onDone(utteranceId: String?) {
                                    // If this is the first part of a word pair, wait for the second part (pair_tr) to finish
                                    if (utteranceId != null && utteranceId.startsWith("pair_en")) {
                                        return
                                    }
                                    notifyEnd()
                                }

                                @Deprecated("Deprecated in Java")
                                override fun onError(utteranceId: String?) {
                                    notifyEnd()
                                }
                            })

                            synchronized(pendingQueue) {
                                for (action in pendingQueue) {
                                    action.run()
                                }
                                pendingQueue.clear()
                            }
                        }
                    } else {
                        isInitialized = false
                    }
                } catch (e: Exception) {
                    android.util.Log.e("AndroidTTS", "Error during TTS status listener", e)
                }
            }
        } catch (e: Exception) {
            android.util.Log.e("AndroidTTS", "Could not initialize TextToSpeech", e)
            tts = null
        }
    }

    private fun configureFemaleVoice(engine: TextToSpeech, locale: Locale) {
        try {
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
                val voices = engine.voices
                if (voices != null) {
                    val femaleVoice = voices.find { v ->
                        v.locale.language.equals(locale.language, ignoreCase = true) &&
                        (v.name.contains("female", ignoreCase = true) ||
                         v.name.contains("woman", ignoreCase = true) ||
                         v.name.contains("sfg", ignoreCase = true) ||
                         v.name.contains("network", ignoreCase = true))
                    }
                    if (femaleVoice != null) {
                        engine.voice = femaleVoice
                    }
                }
            }
        } catch (_: Exception) {}
    }

    private fun notifyEnd() {
        activity.runOnUiThread {
            val webView = activity.findViewById<WebView>(R.id.webView)
            webView?.evaluateJavascript("if (window.__onAndroidTTSEnd) { window.__onAndroidTTSEnd(); }", null)
        }
    }

    @JavascriptInterface
    fun isAvailable(): Boolean = isInitialized

    @JavascriptInterface
    fun isReady(): Boolean = isInitialized

    @JavascriptInterface
    fun invalidateScreen() {
        activity.runOnUiThread {
            val webView = activity.findViewById<WebView>(R.id.webView)
            webView?.postInvalidate()
            val root = activity.findViewById<android.view.View>(R.id.rootContainer)
            root?.postInvalidate()
        }
    }

    @JavascriptInterface
    fun stop() {
        tts?.stop()
    }

    @JavascriptInterface
    fun speak(text: String, lang: String, rate: Float, pitch: Float) {
        val action = Runnable {
            tts?.let { engine ->
                val locale = if (lang.startsWith("tr", ignoreCase = true)) {
                    Locale("tr", "TR")
                } else {
                    Locale.US
                }
                engine.language = locale
                engine.setSpeechRate(rate)
                engine.setPitch(pitch)
                val params = Bundle()
                engine.speak(text, TextToSpeech.QUEUE_FLUSH, params, "tts_${System.currentTimeMillis()}")
            }
        }

        if (isInitialized) {
            action.run()
        } else {
            synchronized(pendingQueue) {
                pendingQueue.add(action)
            }
        }
    }

    @JavascriptInterface
    fun speakWordPair(english: String, turkish: String, rate: Float, pitch: Float) {
        val action = Runnable {
            tts?.let { engine ->
                // 1. English word
                engine.language = Locale.US
                engine.setSpeechRate(rate)
                engine.setPitch(pitch)
                engine.speak(english, TextToSpeech.QUEUE_FLUSH, null, "pair_en_${System.currentTimeMillis()}")

                // 2. Small silence (200ms)
                engine.playSilentUtterance(200, TextToSpeech.QUEUE_ADD, null)

                // 3. Turkish meaning
                engine.language = Locale("tr", "TR")
                engine.setSpeechRate(0.85f)
                engine.setPitch(1.05f)
                engine.speak(turkish, TextToSpeech.QUEUE_ADD, null, "pair_tr_${System.currentTimeMillis()}")
            }
        }

        if (isInitialized) {
            action.run()
        } else {
            synchronized(pendingQueue) {
                pendingQueue.add(action)
            }
        }
    }

    fun shutdown() {
        try {
            tts?.stop()
            tts?.shutdown()
        } catch (_: Exception) {}
    }
}
