'use client'

import { motion } from "framer-motion"
import { User, Bot, QrCode, CheckCircle, Unlock } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function ConversationalCommerceSection() {
  const { t } = useI18n()

  const messages = [
    {
      role: "user" as const,
      avatar: <User className="w-4 h-4 text-[#60a5fa]" />,
      content: t("conversational.msgUser"),
      sublabel: null,
      color: "bg-[#1e3a5f]/60 border-[#60a5fa]/40",
    },
    {
      role: "bot" as const,
      avatar: <Bot className="w-4 h-4 text-white" />,
      content: t("conversational.msgBotPrice"),
      sublabel: null,
      color: "border-white/20 bg-white/[0.03]",
    },
    {
      role: "bot" as const,
      avatar: <QrCode className="w-4 h-4 text-[#a78bfa]" />,
      content: t("conversational.msgBotQR"),
      sublabel: t("conversational.msgBotQRSub"),
      color: "border-[#8b5cf6]/30 bg-[#8b5cf6]/10",
    },
    {
      role: "bot" as const,
      avatar: <CheckCircle className="w-4 h-4 text-[#4ade80]" />,
      content: t("conversational.msgBotSuccess"),
      sublabel: t("conversational.msgBotSuccessSub"),
      color: "border-[#22c55e]/30 bg-[#22c55e]/10",
    },
    {
      role: "bot" as const,
      avatar: <Unlock className="w-4 h-4 text-[#fbbf24]" />,
      content: t("conversational.msgBotUnlock"),
      sublabel: null,
      color: "border-[#f59e0b]/30 bg-[#f59e0b]/10",
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
            <span className="text-xs font-semibold text-white/80">{t("conversational.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {t("conversational.title")}<span className="text-gradient">{t("conversational.titleHighlight")}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("conversational.subtitle")}
          </p>
        </motion.div>

        {/* Chat UI */}
        <div className="max-w-lg mx-auto">
          <div className="glass rounded-2xl p-4 sm:p-6 space-y-4">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.role === "user" ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className={`flex gap-3 ${msg.role === "bot" ? "justify-end" : ""}`}
              >
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    {msg.avatar}
                  </div>
                )}
                <div className={`max-w-[75%] sm:max-w-[80%] rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 border ${msg.color || "bg-secondary border-secondary"} ${!msg.color && "bg-secondary"} break-words`}>
                  <div className="text-sm">{msg.content}</div>
                  {msg.sublabel && (
                    <div className="text-[11px] text-muted-foreground mt-1">{msg.sublabel}</div>
                  )}
                </div>
                {msg.role === "bot" && (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white/[0.08]">
                    {msg.avatar}
                  </div>
                )}
              </motion.div>
            ))}
            
            <div className="pt-2 text-center">
              <span className="text-xs font-mono text-white/60">{t("conversational.transactionNote")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
