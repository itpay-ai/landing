'use client'

import { motion } from "framer-motion"
import { MessageSquare, QrCode, CreditCard, Wallet, BarChart3, Zap } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const iconGlows: Record<string, { glow: string }> = {
  MessageSquare: { glow: "rgba(59,130,246,0.35)" },
  QrCode: { glow: "rgba(168,85,247,0.35)" },
  CreditCard: { glow: "rgba(20,184,166,0.35)" },
  Wallet: { glow: "rgba(245,158,11,0.35)" },
  BarChart3: { glow: "rgba(34,197,94,0.35)" },
  Zap: { glow: "rgba(34,211,238,0.35)" },
}

const featureKeys = [
  { icon: MessageSquare, titleKey: "infrastructure.featureNaturalPayment", descKey: "infrastructure.featureNaturalPaymentDesc" },
  { icon: QrCode, titleKey: "infrastructure.featureMultiQR", descKey: "infrastructure.featureMultiQRDesc" },
  { icon: CreditCard, titleKey: "infrastructure.feature9Primitives", descKey: "infrastructure.feature9PrimitivesDesc" },
  { icon: Wallet, titleKey: "infrastructure.featureFourParty", descKey: "infrastructure.featureFourPartyDesc" },
  { icon: BarChart3, titleKey: "infrastructure.featureSmartRouting", descKey: "infrastructure.featureSmartRoutingDesc" },
  { icon: Zap, titleKey: "infrastructure.featureMcpX402", descKey: "infrastructure.featureMcpX402Desc" },
]

export function InfrastructureSection() {
  const { t } = useI18n()

  return (
    <section id="infrastructure" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 mb-4">
            <span className="text-xs font-semibold text-white">{t("infrastructure.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {t("infrastructure.title")}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("infrastructure.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureKeys.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white/[0.06]"
                style={{ boxShadow: `0 0 20px ${iconGlows[feature.icon.name]?.glow || "rgba(255,255,255,0.08)"}` }}
              >
                <feature.icon className="w-6 h-6 text-white/90" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{t(feature.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
