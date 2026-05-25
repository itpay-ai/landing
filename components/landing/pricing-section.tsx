'use client'

import { motion } from "framer-motion"
import { Zap, CheckCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function PricingSection() {
  const { t } = useI18n()

  const plans = [
    {
      nameKey: "pricing.planProtocolName",
      price: t("pricing.planProtocolPrice"),
      priceNoteKey: "pricing.planProtocolPriceNote",
      featuresKey: "pricing.planProtocolFeatures",
      ctaKey: "pricing.planProtocolCta",
      popular: false,
    },
    {
      nameKey: "pricing.planStarterName",
      price: t("pricing.planStarterPrice"),
      priceNoteKey: "pricing.planStarterPriceNote",
      featuresKey: "pricing.planStarterFeatures",
      ctaKey: "pricing.planStarterCta",
      popular: false,
    },
    {
      nameKey: "pricing.planProName",
      price: t("pricing.planProPrice"),
      priceNoteKey: "pricing.planProPriceNote",
      featuresKey: "pricing.planProFeatures",
      ctaKey: "pricing.planProCta",
      popular: true,
    },
    {
      nameKey: "pricing.planEnterpriseName",
      price: t("pricing.planEnterprisePrice"),
      priceNoteKey: "pricing.planEnterprisePriceNote",
      featuresKey: "pricing.planEnterpriseFeatures",
      ctaKey: "pricing.planEnterpriseCta",
      popular: false,
    },
  ]

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
            <span className="text-xs font-semibold text-white/80">{t("pricing.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {t("pricing.title")}<span className="text-gradient">{t("pricing.titleHighlight")}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass rounded-2xl p-6 flex flex-col relative ${
                plan.popular ? "border-white/30 glow-blue" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-black text-xs font-semibold">
                  {t("pricing.planProPopular")}
                </div>
              )}
              
              <div className="mb-4">
                <div className="font-semibold text-lg mb-1">{t(plan.nameKey)}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{t(plan.priceNoteKey)}</span>
                </div>
              </div>

              <div className="flex-1 space-y-2.5 mb-6">
                {(t(plan.featuresKey) as unknown as string[]).map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/60" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {t(plan.ctaKey)}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Revenue note */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <span>{t("pricing.revenueNote")}</span>
          <span className="font-mono text-white/80">{t("pricing.revenueDomestic")}</span>·
          <span className="font-mono text-white/60">{t("pricing.revenueCrossBorder")}</span>·
          <span className="font-mono text-white/50">{t("pricing.revenueCrypto")}</span>
        </div>
      </div>
    </section>
  )
}
