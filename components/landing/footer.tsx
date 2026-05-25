'use client'

import Image from "next/image"
import { Github, Twitter } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const footerColumns = [
  { key: "columnProduct", linksKey: "columnProductLinks" },
  { key: "columnDeveloper", linksKey: "columnDeveloperLinks" },
  { key: "columnCompany", linksKey: "columnCompanyLinks" },
  { key: "columnLegal", linksKey: "columnLegalLinks" },
] as const

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-[#08080c] border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo-white-bg.png"
                alt="itpay.ai"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold">itpay<span className="text-gradient">.ai</span></span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-xs text-muted-foreground">{t("footer.supportLabel")}</span>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map(({ key, linksKey }) => (
            <div key={key}>
              <h4 className="font-semibold text-sm mb-4">{t(`footer.${key}`)}</h4>
              <ul className="space-y-2.5">
                {(t(`footer.${linksKey}`) as unknown as string[]).map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="text-xs text-muted-foreground">{t("footer.fourPartyNote")}</span>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
