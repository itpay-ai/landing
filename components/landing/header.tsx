'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/lib/i18n"

export function Header() {
  const { locale, setLocale, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: "#infrastructure", label: t("header.navInfrastructure") },
    { href: "#protocol", label: t("header.navProtocol") },
    { href: "#integrations", label: t("header.navIntegrations") },
    { href: "#pricing", label: t("header.navPricing") },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const toggleLocale = () => {
    setLocale(locale === 'zh' ? 'en' : 'zh')
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass-strong py-3" : "py-5"
    }`}>
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo-white-bg.png"
            alt="itpay.ai"
            width={28}
            height={28}
            className="sm:w-8 sm:h-8"
          />
          <span className="text-base sm:text-lg font-bold">itpay<span className="text-gradient">.ai</span></span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5"
          >
            <Globe className="w-3.5 h-3.5" />
            {locale === 'zh' ? 'EN' : '中文'}
          </button>
          <button className="text-sm text-muted-foreground hover:text-foreground px-4 py-2 transition-colors">
            {t("header.login")}
          </button>
          <button className="text-sm font-semibold px-5 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-all">
            {t("header.getApiKey")}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <button
                  onClick={toggleLocale}
                  className="w-full text-sm text-muted-foreground hover:text-foreground py-2 flex items-center justify-center gap-1.5"
                >
                  <Globe className="w-3.5 h-3.5" />
                  {locale === 'zh' ? 'EN' : '中文'}
                </button>
                <button className="w-full text-sm text-muted-foreground hover:text-foreground py-2">
                  {t("header.login")}
                </button>
                <button className="w-full text-sm font-semibold py-2.5 rounded-lg bg-white text-black">
                  {t("header.getApiKey")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
