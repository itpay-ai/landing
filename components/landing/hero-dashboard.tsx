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
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-amber-500" />
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
          </div>
          <span className="text-xs text-cyan-400 font-mono ml-2 font-bold tracking-wider">itpay.ai runtime</span>
          <div className="ml-auto flex items-center gap-1.5 bg-emerald-500/10 px-2 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-emerald-400 font-semibold">{t("dashboard.online")}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          {/* AI Conversation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-2 bg-gradient-to-br from-blue-950/60 to-indigo-950/30 rounded-xl p-4 border border-blue-500/20"
          >
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-blue-300 mb-1 font-semibold">{t("dashboard.userRequest")}</p>
                <p className="text-sm text-blue-100 font-medium">「{t("dashboard.userRequestContent")}」</p>
              </div>
            </div>
          </motion.div>

          {/* QR Code Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-purple-950/50 to-violet-950/30 rounded-xl p-4 border border-purple-500/20"
          >
            <div className="flex items-center gap-2 mb-3">
              <QrCode className="h-4 w-4 text-violet-400" />
              <span className="text-xs text-violet-300 font-semibold">{t("dashboard.qrLabel")}</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-white to-purple-50 rounded-lg flex items-center justify-center p-3 shadow-inner">
              <div className="grid grid-cols-7 gap-0.5 w-full h-full">
                {qrPattern.map((filled, i) => (
                  <div
                    key={i}
                    className={`rounded-sm ${filled ? "bg-[#1a1a2e]" : "bg-transparent"}`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-center text-violet-300/80 mt-3">{t("dashboard.scanToPay")} <span className="text-amber-400 font-mono font-bold">¥9.90</span></p>
          </motion.div>

          {/* Payment Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-emerald-950/50 to-green-950/30 rounded-xl p-4 flex flex-col border border-emerald-500/20"
          >
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span className="text-xs text-emerald-400 font-semibold">{t("dashboard.paymentSuccess")}</span>
              <span className="ml-auto text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">LIVE</span>
            </div>
            <div className="space-y-2.5 flex-1">
              <div className="flex justify-between text-xs">
                <span className="text-emerald-300/70">{t("dashboard.amount")}</span>
                <span className="text-emerald-400 font-mono font-bold">¥9.90</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-emerald-300/70">{t("dashboard.method")}</span>
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent font-semibold">{t("hero.wechatPay")}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-emerald-300/70">{t("dashboard.fee")}</span>
                <span className="text-amber-400 font-mono">¥0.04</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-emerald-300/70">{t("dashboard.status")}</span>
                <span className="text-emerald-400 font-semibold">{t("dashboard.confirmed")}</span>
              </div>
            </div>
          </motion.div>

          {/* Event Stream */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="col-span-2 bg-gradient-to-br from-amber-950/50 to-orange-950/20 rounded-xl p-4 border border-amber-500/20"
          >
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-amber-400" />
              <span className="text-xs text-amber-300 font-semibold">{t("dashboard.eventStream")}</span>
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
            className="bg-gradient-to-br from-amber-950/50 to-yellow-950/20 rounded-xl p-4 border border-amber-500/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <Wallet className="h-4 w-4 text-amber-400" />
              <span className="text-xs text-amber-300 font-semibold">{t("dashboard.merchantWallet")}</span>
            </div>
            <p className="text-xl font-bold text-amber-300 font-mono">¥12,805</p>
            <p className="text-xs text-emerald-400 mt-1 font-medium">+¥9.86 {t("dashboard.feeDeducted")}</p>
          </motion.div>

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-br from-purple-950/50 to-fuchsia-950/20 rounded-xl p-4 border border-purple-500/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="h-4 w-4 text-purple-400" />
              <span className="text-xs text-purple-300 font-semibold">{t("dashboard.userCredits")}</span>
            </div>
            <p className="text-xl font-bold text-purple-300 font-mono">2,450</p>
            <p className="text-xs text-amber-400 mt-1 font-medium">+100 {t("dashboard.creditsUnlocked")}</p>
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
          <div className="text-cyan-300/80 font-semibold">{t("dashboard.runtimeLabel")}</div>
          <div className="text-cyan-400/60 text-center">↓</div>
          <div className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold text-sm tracking-wide">itpay.ai</div>
          <div className="text-cyan-400/60 text-center">↓</div>
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-[10px] font-medium">支付宝</span>
            <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-medium">PromptPay</span>
            <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] font-medium">USDC</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function EventLine({ event, time, status = "complete", channel }: { event: string; time: string; status?: "complete" | "pending"; channel?: string }) {
  const eventColors: Record<string, string> = {
    "payment.succeeded": "text-emerald-300 font-semibold",
    "credits.updated": "text-amber-300",
    "tool.unlocked": "text-violet-300",
  }
  const eventDots: Record<string, string> = {
    "payment.succeeded": "bg-emerald-500",
    "credits.updated": "bg-amber-500",
    "tool.unlocked": "bg-violet-500",
  }
  return (
    <div className="flex items-center gap-2 py-1 px-2 rounded bg-white/5 hover:bg-white/10 transition-colors">
      <span className={`h-2 w-2 rounded-full ${status === "complete" ? (eventDots[event] || "bg-emerald-500") + " shadow-sm" : "bg-amber-400/60 animate-pulse"}`} />
      <span className={`${eventColors[event] || "text-white/80"}`}>{event}</span>
      {channel && <span className="bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded text-[10px] font-semibold">[{channel}]</span>}
      <span className="text-white/40 ml-auto">{time}</span>
    </div>
  )
}
