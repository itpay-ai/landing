'use client'

import { motion } from "framer-motion"
import { CheckCircle, Clock, ArrowRight, Globe } from "lucide-react"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

const channelKeys = [
  { nameKey: "paymentRails.channelAlipay", countryKey: "paymentRails.channelAlipayCountry", logo: "/images/channels/alipay.png", status: "live", descKey: "paymentRails.channelAlipayDesc" },
  { nameKey: "paymentRails.channelWechat", countryKey: "paymentRails.channelWechatCountry", logo: "/images/channels/wechat-pay.png", status: "live", descKey: "paymentRails.channelWechatDesc" },
  { nameKey: "paymentRails.channelAlipayHK", countryKey: "paymentRails.channelAlipayHKCountry", logo: "/images/channels/alipay-hk.png", status: "live", descKey: "paymentRails.channelAlipayHKDesc" },
  { nameKey: "paymentRails.channelWechatHK", countryKey: "paymentRails.channelWechatHKCountry", logo: "/images/channels/wechat-hk.png", status: "live", descKey: "paymentRails.channelWechatHKDesc" },
  { nameKey: "paymentRails.channelFPS", countryKey: "paymentRails.channelFPSCountry", logo: "/images/channels/fps.png", status: "live", descKey: "paymentRails.channelFPSDesc" },
  { nameKey: "paymentRails.channelPromptPay", countryKey: "paymentRails.channelPromptPayCountry", logo: "/images/channels/promptpay.png", status: "live", descKey: "paymentRails.channelPromptPayDesc" },
  { nameKey: "paymentRails.channelPayNow", countryKey: "paymentRails.channelPayNowCountry", logo: "/images/channels/paynow.png", status: "live", descKey: "paymentRails.channelPayNowDesc" },
  { nameKey: "paymentRails.channelDuitNow", countryKey: "paymentRails.channelDuitNowCountry", logo: "/images/channels/duitnow.png", status: "coming", descKey: "paymentRails.channelDuitNowDesc" },
  { nameKey: "paymentRails.channelQRIS", countryKey: "paymentRails.channelQRISCountry", logo: "/images/channels/qris.png", status: "coming", descKey: "paymentRails.channelQRISDesc" },
  { nameKey: "paymentRails.channelVietQR", countryKey: "paymentRails.channelVietQRCountry", logo: "/images/channels/vietqr.png", status: "coming", descKey: "paymentRails.channelVietQRDesc" },
  { nameKey: "paymentRails.channelGCash", countryKey: "paymentRails.channelGCashCountry", logo: "/images/channels/gcash.png", status: "coming", descKey: "paymentRails.channelGCashDesc" },
  { nameKey: "paymentRails.channelUSDC", countryKey: "paymentRails.channelUSDCCountry", logo: "/images/channels/usdc.png", status: "coming", descKey: "paymentRails.channelUSDCDesc" },
]

export function PaymentRailsSection() {
  const { t } = useI18n()

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
            <span className="text-xs font-semibold text-white/80">{t("paymentRails.badge")}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {t("paymentRails.title")}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("paymentRails.subtitle")}
          </p>
        </motion.div>

        {/* Channel grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {channelKeys.map((channel, index) => (
            <motion.div
              key={channel.nameKey}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass rounded-xl p-4 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <Image
                  src={channel.logo}
                  alt={t(channel.nameKey)}
                  width={32}
                  height={32}
                  className="rounded-md"
                />
                {channel.status === "live" ? (
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-[#4ade80] bg-[#22c55e]/10 px-2 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    {t("paymentRails.statusLive")}
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] text-[#fbbf24] bg-[#fbbf24]/10 px-2 py-0.5 rounded-full">
                    <Clock className="w-3 h-3" />
                    {t("paymentRails.statusComing")}
                  </span>
                )}
              </div>
              <div className="font-semibold text-sm mb-0.5">{t(channel.nameKey)}</div>
              <div className="text-xs text-muted-foreground">{t(channel.descKey)}</div>
            </motion.div>
          ))}
        </div>

        {/* Flow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-4 sm:p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="flex flex-col items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.06] border border-white/10">
              <Globe className="w-6 h-6 text-white/80" />
              <span className="text-sm font-semibold">{t("paymentRails.flowYourAgent")}</span>
              <span className="text-[10px] text-muted-foreground">{t("paymentRails.flowOneSdk")}</span>
            </div>
            
            <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
            
            <div className="flex flex-col items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 glow-blue">
              <Image
                src="/images/channels/itpay-logo.png"
                alt="itpay"
                width={24}
                height={24}
                className="rounded-md"
              />
              <span className="text-sm font-bold text-gradient">{t("paymentRails.flowAipay")}</span>
              <span className="text-[10px] text-muted-foreground">{t("paymentRails.flowRouting")}</span>
            </div>
            
            <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90 md:rotate-0" />
            
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {["alipay.png", "wechat-pay.png", "promptpay.png", "qris.png", "usdc.png"].map((logo) => (
                <div key={logo} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-secondary text-xs font-medium">
                  <Image src={`/images/channels/${logo}`} alt="" width={16} height={16} className="rounded-sm" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <span className="text-xs text-muted-foreground">
              {t("paymentRails.flowBottomNote")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
