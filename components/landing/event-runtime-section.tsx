'use client'

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function EventRuntimeSection() {
  const { t } = useI18n()

  const events = [
    { time: "12:45:01.123", event: "payment.created", status: "info" },
    { time: "12:45:01.456", event: "payment.processing", status: "pending" },
    { time: "12:45:02.789", event: "payment.succeeded", status: "success" },
    { time: "12:45:02.812", event: "credits.updated", status: "success" },
    { time: "12:45:02.834", event: "tool.unlocked", status: "success" },
    { time: "12:45:03.001", event: "subscription.renewed", status: "info" },
  ]

  const eventItems = [
    { code: "payment.succeeded", descKey: "eventRuntime.eventPaySucceededDesc" },
    { code: "credits.updated", descKey: "eventRuntime.eventCreditsUpdatedDesc" },
    { code: "tool.unlocked", descKey: "eventRuntime.eventToolUnlockedDesc" },
    { code: "subscription.renewed", descKey: "eventRuntime.eventSubscriptionRenewedDesc" },
  ]

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-glow opacity-15" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 mb-4">
              <span className="text-xs font-semibold text-white/80">{t("eventRuntime.badge")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t("eventRuntime.title")}</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              {t("eventRuntime.subtitle")}
            </p>

            <div className="space-y-3">
              {eventItems.map((item) => (
                <div key={item.code} className="flex items-center gap-2 sm:gap-3 glass rounded-lg px-3 sm:px-4 py-3 overflow-hidden">
                  <code className="text-xs sm:text-sm font-mono text-white/70 whitespace-nowrap">{item.code}</code>
                  <span className="text-xs text-muted-foreground hidden sm:inline">—</span>
                  <span className="text-xs sm:text-sm text-muted-foreground truncate">{t(item.descKey)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Event stream */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-white/70" />
                <span className="text-sm font-medium">event-stream</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <span className="text-[10px] text-white font-semibold">{t("eventRuntime.realtimeLabel")}</span>
              </div>
            </div>
            <div className="p-3 sm:p-4 space-y-2 font-mono text-[10px] sm:text-xs overflow-x-auto">
              {events.map((evt, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    evt.status === "success" ? "bg-white" : 
                    evt.status === "pending" ? "bg-white/40 animate-pulse" : 
                    "bg-white/60"
                  }`} />
                  <span className="text-muted-foreground">{evt.time}</span>
                  <span className={
                    evt.status === "success" ? "text-white/80" : 
                    evt.status === "pending" ? "text-white/50" : 
                    "text-white/60"
                  }>{evt.event}</span>
                </div>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-border/50">
              <span className="text-xs font-mono text-white/60">{t("eventRuntime.webhookLatency")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
