'use client'

import { motion } from "framer-motion"
import { ArrowRight, Play, Shield, Zap, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { HeroDashboard } from "./hero-dashboard"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Gradient orbs - monochrome */}
      <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-50px] w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-[100px]" />
      <div className="absolute top-[10%] right-[20%] w-[300px] h-[300px] rounded-full bg-white/[0.03] blur-[80px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <div className="glass inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                {t("hero.badge")}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6">
              <span className="block">{t("hero.titleLine1")}</span>
              <span className="block text-gradient">{t("hero.titleLine2")}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-2 sm:mb-3">
              {t("hero.subtitle")}
            </p>
            <p className="text-base sm:text-lg font-semibold text-foreground mb-6 sm:mb-8">
              {t("hero.subtitleBold")}
            </p>

            {/* Channel logos */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8 flex-wrap">
              <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">{t("hero.channelLabel")}</span>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.06] border border-white/10">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-white" />
                  <span className="text-[10px] sm:text-xs font-medium text-white">{t("hero.alipay")}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.06] border border-white/10">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-white/80" />
                  <span className="text-[10px] sm:text-xs font-medium text-white/80">{t("hero.wechatPay")}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.06] border border-white/10">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-white/60" />
                  <span className="text-[10px] sm:text-xs font-medium text-white/60">PromptPay</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.06] border border-white/10">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-white/40" />
                  <span className="text-[10px] sm:text-xs font-medium text-white/40">QRIS</span>
                </div>
                <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">{t("hero.moreChannels")}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-white text-black font-semibold text-sm sm:text-base glow-blue hover:bg-white/90 transition-all">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                {t("hero.ctaPrimary")}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl border border-white/20 text-foreground font-medium text-sm sm:text-base hover:bg-secondary transition-all">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                {t("hero.ctaSecondary")}
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                <span className="text-muted-foreground">{t("hero.statFourParty")}</span>
                <span className="font-semibold text-white">{t("hero.statNoTouch")}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
                <span className="text-muted-foreground">{t("hero.statChannels")}</span>
                <span className="font-semibold text-white/80">{t("hero.statCoverage")}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/60" />
                <span className="font-mono font-semibold text-white/60">{t("hero.statRate")}</span>
                <span className="text-muted-foreground">{t("hero.statRateLabel")}</span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
