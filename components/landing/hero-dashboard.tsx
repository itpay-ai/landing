'use client'

import { motion } from "framer-motion"
import { QrCode, CheckCircle, Wallet, Zap, MessageSquare, CreditCard } from "lucide-react"
import { useI18n } from "@/lib/i18n"

// Deterministic QR pattern to avoid hydration mismatch
const qrPattern = [
  1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1,
  1, 0, 1, 0, 1, 0, 1,
  1, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1,
]

export function HeroDashboard() {
  const { t } = useI18n()

  return (
    <div className="relative max-w-full overflow-hidden">
      {/* Glow effect behind dashboard - monochrome */}
      <div className="absolute -inset-4 bg-gradient-to-br from-white/10 via-transparent to-white/10 rounded-3xl blur-2xl" />
      
      {/* Main dashboard container */}
      <div className="relative glass rounded-2xl p-5 shadow-2xl border border-white/10">
        {/* Terminal header */}
        <div className="flex items-center gap-2 pb-4 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-white/30" />
            <div className="h-3 w-3 rounded-full bg-white/20" />
            <div className="h-3 w-3 rounded-full bg-white/10" />
          </div>
          <span className="text-xs text-muted-foreground font-mono ml-2">itpay.ai runtime</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs text-white">{t("dashboard.online")}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          {/* AI Conversation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-2 bg-secondary/50 rounded-xl p-4 border border-white/10"
          >
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground mb-1">{t("dashboard.userRequest")}</p>
                <p className="text-sm text-foreground font-medium">{t("dashboard.userRequestContent")}</p>
              </div>
            </div>
          </motion.div>

          {/* QR Code Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-secondary/50 rounded-xl p-4 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-3">
              <QrCode className="h-4 w-4 text-white" />
              <span className="text-xs text-muted-foreground">{t("dashboard.qrLabel")}</span>
            </div>
            <div className="aspect-square bg-white rounded-lg flex items-center justify-center p-3">
              <div className="grid grid-cols-7 gap-0.5 w-full h-full">
                {qrPattern.map((filled, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${filled ? "bg-[#0a0a0f]" : "bg-transparent"}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-3">{t("dashboard.scanToPay")} <span className="text-white font-mono font-medium">¥9.90</span></p>
          </motion.div>

          {/* Payment Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-secondary/50 rounded-xl p-4 flex flex-col border border-white/10"
          >
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-4 w-4 text-white" />
              <span className="text-xs text-white font-medium">{t("dashboard.paymentSuccess")}</span>
            </div>
            <div className="space-y-2.5 flex-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{t("dashboard.amount")}</span>
                <span className="text-foreground font-mono font-medium">¥9.90</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{t("dashboard.method")}</span>
                <span className="text-white">{t("hero.wechatPay")}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{t("dashboard.fee")}</span>
                <span className="text-foreground font-mono">¥0.04</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{t("dashboard.status")}</span>
                <span className="text-white">{t("dashboard.confirmed")}</span>
              </div>
            </div>
          </motion.div>

          {/* Event Stream */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="col-span-2 bg-secondary/50 rounded-xl p-4 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-white/80" />
              <span className="text-xs text-muted-foreground">{t("dashboard.eventStream")}</span>
            </div>
            <div className="space-y-2 font-mono text-xs">
              <EventLine event="payment.succeeded" time="0.2s" channel="wechat" />
              <EventLine event="credits.updated" time="0.3s" status="pending" />
              <EventLine event="tool.unlocked" time="0.4s" status="pending" />
            </div>
          </motion.div>

          {/* Wallet Balance */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-secondary/50 rounded-xl p-4 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="h-4 w-4 text-white" />
              <span className="text-xs text-muted-foreground">{t("dashboard.merchantWallet")}</span>
            </div>
            <p className="text-xl font-bold text-foreground font-mono">¥12,805</p>
            <p className="text-xs text-white mt-1">+¥9.86 {t("dashboard.feeDeducted")}</p>
          </motion.div>

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-secondary/50 rounded-xl p-4 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="h-4 w-4 text-white/70" />
              <span className="text-xs text-muted-foreground">{t("dashboard.userCredits")}</span>
            </div>
            <p className="text-xl font-bold text-foreground font-mono">2,450</p>
            <p className="text-xs text-muted-foreground mt-1">+100 {t("dashboard.creditsUnlocked")}</p>
          </motion.div>
        </div>
      </div>

      {/* Floating protocol layers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute -right-4 -bottom-4 glass rounded-xl p-4 text-xs shadow-lg border border-white/10"
      >
        <div className="space-y-1.5">
          <div className="text-muted-foreground">{t("dashboard.runtimeLabel")}</div>
          <div className="text-white/60">↓</div>
          <div className="text-gradient font-bold">itpay.ai</div>
          <div className="text-white/60">↓</div>
          <div className="text-white/80">{t("dashboard.protocolLabel")}</div>
        </div>
      </motion.div>
    </div>
  )
}

function EventLine({ event, time, status = "complete", channel }: { event: string; time: string; status?: "complete" | "pending"; channel?: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-1.5 w-1.5 rounded-full ${status === "complete" ? "bg-white" : "bg-white/40 animate-pulse"}`} />
      <span className="text-white/80">{event}</span>
      {channel && <span className="text-white/50 text-[10px]">[{channel}]</span>}
      <span className="text-muted-foreground ml-auto">{time}</span>
    </div>
  )
}
