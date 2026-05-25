'use client'

import { motion } from "framer-motion"
import { FileCheck, Webhook, Shield, Database, Scale, Lock } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function TrustSection() {
  const { t } = useI18n()

  const features = [
    { icon: FileCheck, titleKey: "trust.featureAuditLog", descKey: "trust.featureAuditLogDesc" },
    { icon: Webhook, titleKey: "trust.featureWebhookReliability", descKey: "trust.featureWebhookReliabilityDesc" },
    { icon: Shield, titleKey: "trust.featureHmacSignature", descKey: "trust.featureHmacSignatureDesc" },
    { icon: Database, titleKey: "trust.featureQRSecurity", descKey: "trust.featureQRSecurityDesc" },
    { icon: Scale, titleKey: "trust.featureCompliance", descKey: "trust.featureComplianceDesc" },
    { icon: Lock, titleKey: "trust.featureFundIsolation", descKey: "trust.featureFundIsolationDesc" },
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
            <span className="text-xs font-semibold text-white/80">{t("trust.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{t("trust.title")}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("trust.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4 glass rounded-xl p-5"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/[0.08]">
                <feature.icon className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <div className="font-semibold text-sm mb-1">{t(feature.titleKey)}</div>
                <div className="text-xs text-muted-foreground">{t(feature.descKey)}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-5 sm:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white">99.99%</div>
              <div className="text-xs text-muted-foreground">{t("trust.statAvailability")}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-mono">&lt;50ms</div>
              <div className="text-xs text-muted-foreground">{t("trust.statLatency")}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white/80">0</div>
              <div className="text-xs text-muted-foreground">{t("trust.statFundRisk")}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white/70">7×24</div>
              <div className="text-xs text-muted-foreground">{t("trust.statSupport")}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
