'use client'

import { motion } from "framer-motion"
import { Eye, Languages, ArrowLeftRight, FileText } from "lucide-react"
import { useI18n } from "@/lib/i18n"

/** Renders translated example text with optional colored keyword highlighting */
function HighlightedExample({ text }: { text: string }) {
  const parts = text.split(/(→|฿\d[\d,.]*|\$\d[\d,.]*|\b(?:THB|SGD|IDR|USD)\b|✅|[🇹🇭🇸🇬🇺🇸🇮🇩])/g)
  return (
    <pre className="whitespace-pre-wrap text-muted-foreground break-words">
      {parts.map((part, i) => {
        if (part === "→") return <span key={i} className="text-[#22d3ee]">→</span>
        if (/^฿/.test(part)) return <span key={i} className="text-[#4ade80]">{part}</span>
        if (/^\$/.test(part)) return <span key={i} className="text-[#4ade80]">{part}</span>
        if (/^(THB|SGD|IDR|USD)$/.test(part)) return <span key={i} className="text-[#fbbf24]">{part}</span>
        if (part === "✅") return <span key={i} className="text-[#4ade80]">✅</span>
        if (/^[🇹🇭🇸🇬🇺🇸🇮🇩]$/.test(part)) return <span key={i} className="text-[#60a5fa]">{part}</span>
        return part
      })}
    </pre>
  )
}

export function AINativeSection() {
  const { t } = useI18n()

  const innovations = [
    {
      icon: Eye,
      titleKey: "aiNative.qrTitle",
      subtitle: "QR Scanner AI",
      descKey: "aiNative.qrDesc",
      exampleKey: "aiNative.qrExample",
    },
    {
      icon: Languages,
      titleKey: "aiNative.nlpTitle",
      subtitle: "NLP Payment",
      descKey: "aiNative.nlpDesc",
      exampleKey: "aiNative.nlpExample",
    },
    {
      icon: ArrowLeftRight,
      titleKey: "aiNative.fxTitle",
      subtitle: "FX Routing Engine",
      descKey: "aiNative.fxDesc",
      exampleKey: "aiNative.fxExample",
    },
  ]

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-glow opacity-15" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 mb-4">
            <span className="text-xs font-semibold text-white/80">{t("aiNative.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {t("aiNative.title")}<span className="text-gradient">{t("aiNative.titleHighlight")}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("aiNative.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {innovations.map((item, index) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="grid lg:grid-cols-2 gap-6 items-stretch"
            >
              <div className="glass rounded-2xl p-5 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/[0.08]" style={{ boxShadow: '0 0 20px rgba(255,255,255,0.08)' }}>
                    <item.icon className="w-6 h-6 text-white/80" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{t(item.titleKey)}</div>
                    <div className="text-xs text-muted-foreground font-mono">{item.subtitle}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
              </div>
              
              <div className="glass rounded-2xl p-4 sm:p-6 font-mono text-xs leading-relaxed overflow-x-auto max-w-full">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <span className="text-muted-foreground">{t("aiNative.exampleLabel")}</span>
                </div>
                <HighlightedExample text={t(item.exampleKey)} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
