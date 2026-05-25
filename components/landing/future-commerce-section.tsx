'use client'

import { Bot, Cpu, Store, ArrowLeftRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function FutureCommerceSection() {
  const { t } = useI18n()

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-glow opacity-15" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 mb-4">
            <span className="text-xs font-semibold text-white/80">{t("futureCommerce.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {t("futureCommerce.title")}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("futureCommerce.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-white/[0.08] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white/80" />
                </div>
                <ArrowLeftRight className="w-4 h-4 text-muted-foreground" />
                <div className="w-10 h-10 rounded-lg bg-white/[0.08] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white/80" />
                </div>
              </div>
            </div>
            <h3 className="font-semibold mb-2">{t("futureCommerce.agentPayment")}</h3>
            <p className="text-sm text-muted-foreground">{t("futureCommerce.agentPaymentDesc")}</p>
          </div>

          <div className="glass rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-white/[0.08] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white/80" />
                </div>
                <ArrowLeftRight className="w-4 h-4 text-muted-foreground" />
                <div className="w-10 h-10 rounded-lg bg-white/[0.08] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white/80" />
                </div>
              </div>
            </div>
            <h3 className="font-semibold mb-2">{t("futureCommerce.machineEconomy")}</h3>
            <p className="text-sm text-muted-foreground">{t("futureCommerce.machineEconomyDesc")}</p>
          </div>

          <div className="glass rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/[0.08] flex items-center justify-center">
                <Store className="w-5 h-5 text-white/80" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">{t("futureCommerce.aiMarketplace")}</h3>
            <p className="text-sm text-muted-foreground">{t("futureCommerce.aiMarketplaceDesc")}</p>
          </div>
        </div>

        {/* Vision flow */}
        <div className="glass rounded-2xl p-4 sm:p-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-sm font-medium">
              🤖 Agent 1
            </div>
            <ArrowLeftRight className="w-5 h-5 text-muted-foreground" />
            <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 glow-blue text-sm font-bold text-gradient">
              AIPay
            </div>
            <ArrowLeftRight className="w-5 h-5 text-muted-foreground" />
            <div className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-sm font-medium">
              🤖 Agent 2
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-muted-foreground">
            {t("futureCommerce.visionNote")}
          </div>
        </div>
      </div>
    </section>
  )
}
