'use client'

import { motion } from "framer-motion"
import { Search, Download, CreditCard, Repeat, BarChart3, RotateCcw, XCircle, UserCheck } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const capabilityKeys = [
  { icon: Search, nameKey: "protocol.capabilityDiscoveryName", descKey: "protocol.capabilityDiscoveryDesc", api: "POST /v1/services" },
  { icon: Download, nameKey: "protocol.capabilityInstallName", descKey: "protocol.capabilityInstallDesc", api: "POST /v1/installs" },
  { icon: CreditCard, nameKey: "protocol.capabilityOneTimeName", descKey: "protocol.capabilityOneTimeDesc", api: "POST /v1/payments/one-time" },
  { icon: BarChart3, nameKey: "protocol.capabilityCumulativeName", descKey: "protocol.capabilityCumulativeDesc", api: "POST /v1/cumulative/record" },
  { icon: Repeat, nameKey: "protocol.capabilitySubscribeName", descKey: "protocol.capabilitySubscribeDesc", api: "POST /v1/subscriptions" },
  { icon: RotateCcw, nameKey: "protocol.capabilityRefundName", descKey: "protocol.capabilityRefundDesc", api: "POST /v1/refunds" },
  { icon: XCircle, nameKey: "protocol.capabilityVoidName", descKey: "protocol.capabilityVoidDesc", api: "POST /v1/voids" },
  { icon: UserCheck, nameKey: "protocol.capabilityKycName", descKey: "protocol.capabilityKycDesc", api: "POST /v1/kyc/verify" },
  { icon: CreditCard, nameKey: "protocol.capabilityRequestPayName", descKey: "protocol.capabilityRequestPayDesc", api: "POST /v1/payment-intents" },
]

export function ProtocolSection() {
  const { t } = useI18n()

  return (
    <section id="protocol" className="relative py-24 lg:py-32">
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
            <span className="text-xs font-semibold text-white">{t("protocol.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {t("protocol.title")}<span className="text-gradient">{t("protocol.titleHighlight")}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("protocol.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilityKeys.map((cap, index) => (
            <motion.div
              key={cap.nameKey}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group glass rounded-xl p-5 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/[0.06]">
                  <cap.icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm">{t(cap.nameKey)}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{t(cap.descKey)}</p>
              <div className="px-2.5 py-1.5 rounded-md bg-secondary/50 text-[11px] font-mono text-muted-foreground overflow-x-auto whitespace-nowrap">
                {cap.api}
              </div>
            </motion.div>
          ))}
        </div>

        {/* HTTP 402 example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 glass rounded-xl overflow-hidden max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <div className="w-3 h-3 rounded-full bg-white/15" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
            <span className="text-xs text-muted-foreground ml-2 font-mono">x402-payment-example.http</span>
          </div>
          <div className="p-4 text-sm font-mono leading-relaxed overflow-x-auto">
            <code>
              <span className="text-white">HTTP/1.1 402</span> <span className="text-white/70">Payment Required</span><br />
              <span className="text-white/80">X-Payment-Intent:</span> <span className="text-foreground">pi_01HXYZ...</span><br />
              <span className="text-white/80">X-Payment-Channel:</span> <span className="text-foreground">promptpay</span><br />
              <span className="text-white/80">X-Payment-Amount:</span> <span className="text-foreground">THB 500</span><br />
              <span className="text-white/80">X-Payment-QR:</span> <span className="text-white/60">https://api.itpay.ai/qr/pi_01HXYZ.png</span>
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
