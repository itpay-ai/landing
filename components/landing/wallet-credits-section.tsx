'use client'

import { motion } from "framer-motion"
import { Zap, CheckCircle, CreditCard, Wallet, BarChart3, TrendingUp } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function WalletCreditsSection() {
  const { t } = useI18n()

  const metrics = [
    { icon: CreditCard, labelKey: "walletCredits.metricPrepaidCredits", value: "10,000", subKey: "walletCredits.metricPrepaidCreditsUnit" },
    { icon: BarChart3, labelKey: "walletCredits.metricPayPerUse", value: "按次", subKey: "walletCredits.metricPayPerUseUnit" },
    { icon: Wallet, labelKey: "walletCredits.metricMultiCurrency", value: "7+", subKey: "walletCredits.metricMultiCurrencyUnit" },
    { icon: TrendingUp, labelKey: "walletCredits.metricSettlement", value: "T+1", subKey: "walletCredits.metricSettlementUnit" },
    { icon: Zap, labelKey: "walletCredits.metricQRGen", value: "<200ms", subKey: "walletCredits.metricQRGenUnit" },
    { icon: CheckCircle, labelKey: "walletCredits.metricWebhook", value: "99.99%", subKey: "walletCredits.metricWebhookUnit" },
  ]

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-glow opacity-15" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Metric cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.labelKey}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <metric.icon className="w-4 h-4 text-white/70" />
                  <span className="text-xs text-muted-foreground">{t(metric.labelKey)}</span>
                </div>
                <div className="text-xl font-bold font-mono text-white">{metric.value}</div>
                <div className="text-[10px] text-muted-foreground">{t(metric.subKey)}</div>
              </motion.div>
            ))}
          </div>

          {/* Right - Text + Code */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 mb-4">
              <span className="text-xs font-semibold text-white/80">{t("walletCredits.badge")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t("walletCredits.title")}</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              {t("walletCredits.subtitle")}
            </p>

            <div className="glass rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/15" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <span className="text-xs text-muted-foreground ml-2 font-mono">wallet.ts</span>
              </div>
              <div className="p-3 sm:p-4 text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-white">wallet</span> = <span className="text-purple-400">await</span> <span className="text-cyan-400">itpay.wallets</span>.<span className="text-cyan-400">create</span>({'{'})<br />
                  &nbsp;&nbsp;agentId: <span className="text-emerald-400/80">{`'agent_abc123'`}</span>,<br />
                  &nbsp;&nbsp;currency: <span className="text-emerald-400/80">{`'USDC'`}</span>,<br />
                  {'}'})<br />
                  <br />
                  <span className="text-purple-400">await</span> <span className="text-cyan-400">itpay.cumulative</span>.<span className="text-cyan-400">record</span>({'{'})<br />
                  &nbsp;&nbsp;usage: {'{'} unit: <span className="text-emerald-400/80">{`'tokens'`}</span>, qty: <span className="text-amber-400">1500</span> {'}'},<br />
                  &nbsp;&nbsp;rate: {'{'} per_unit: <span className="text-amber-400">0.002</span> {'}'},<br />
                  {'}'})
                </code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
