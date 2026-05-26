'use client'

import { motion } from "framer-motion"
import { Shield, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function FourPartySection() {
  const { t } = useI18n()

  const comparisonItems = t("fourParty.comparisonItems") as unknown as string[]
  const itpayComparisonItems = t("fourParty.itpayComparisonItems") as unknown as string[]

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 mb-4">
            <Shield className="w-3 h-3 text-white" />
            <span className="text-xs font-semibold text-white">{t("fourParty.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {t("fourParty.title")}<span className="text-gradient">{t("fourParty.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("fourParty.subtitle")}
          </p>
        </motion.div>

        {/* Four-party diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
            <div className="glass rounded-2xl p-4 sm:p-8 max-w-full overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {/* Human */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/[0.08] flex items-center justify-center">
                  <span className="text-xl">👤</span>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{t("fourParty.humanLabel")}</div>
                  <div className="text-xs text-muted-foreground">{t("fourParty.humanDesc")}</div>
                </div>
              </div>
              
              {/* Agent/Merchant */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/[0.08] flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{t("fourParty.merchantLabel")}</div>
                  <div className="text-xs text-muted-foreground">{t("fourParty.merchantDesc")}</div>
                </div>
              </div>
              
              {/* Channel */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/[0.04] border border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/[0.08] flex items-center justify-center">
                  <span className="text-xl">🏦</span>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{t("fourParty.channelLabel")}</div>
                  <div className="text-xs text-muted-foreground">{t("fourParty.channelDesc")}</div>
                </div>
              </div>
              
              {/* ItPay */}
              <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.03] border border-white/15">
                <div className="w-12 h-12 rounded-full bg-white/[0.1] flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{t("fourParty.itpayLabel")}</div>
                  <div className="text-xs text-white font-semibold">{t("fourParty.itpayDesc")}</div>
                </div>
              </div>
            </div>

            {/* Flow */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs text-muted-foreground py-4 border-t border-white/10 flex-wrap">
              <span>{t("fourParty.flowScan")}</span>
              <ArrowRight className="w-3 h-3 flex-shrink-0" />
              <span>{t("fourParty.flowSettle")}</span>
              <ArrowRight className="w-3 h-3 flex-shrink-0" />
              <span>{t("fourParty.flowReceive")}</span>
              <span className="mx-1 sm:mx-2">|</span>
              <span className="text-white">{t("fourParty.flowItpay")}</span>
            </div>
          </div>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="glass rounded-xl p-6">
            <h3 className="font-semibold mb-4 text-muted-foreground">{t("fourParty.comparisonTitle")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {comparisonItems.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-xl p-6 border-white/10">
            <h3 className="font-semibold mb-4 text-gradient">{t("fourParty.itpayComparisonTitle")}</h3>
            <ul className="space-y-2 text-sm">
              {itpayComparisonItems.map((item, i) => (
                <li key={i} className="text-white">✓ {item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
