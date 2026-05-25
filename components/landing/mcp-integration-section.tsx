'use client'

import { motion } from "framer-motion"
import { Code2, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function MCPIntegrationSection() {
  const { t } = useI18n()

  return (
    <section id="integrations" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text + Code */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 mb-4">
              <span className="text-xs font-semibold text-white/80">{t("mcpIntegration.badge")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              {t("mcpIntegration.title")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("mcpIntegration.subtitle")}
            </p>

            {/* Three layers */}
            <div className="space-y-3 mb-8">
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">MCP</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">{t("mcpIntegration.mcpLayerTitle")}</div>
                  <div className="text-xs text-muted-foreground">{t("mcpIntegration.mcpLayerDesc")}</div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">x402</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">{t("mcpIntegration.x402LayerTitle")}</div>
                  <div className="text-xs text-muted-foreground">{t("mcpIntegration.x402LayerDesc")}</div>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">$$</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">{t("mcpIntegration.financeLayerTitle")}</div>
                  <div className="text-xs text-muted-foreground">{t("mcpIntegration.financeLayerDesc")}</div>
                </div>
              </div>
            </div>

            {/* Code example */}
            <div className="glass rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/15" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <span className="text-xs text-muted-foreground ml-2 font-mono">mcp-tool.ts</span>
              </div>
              <div className="p-4 text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-white/70">import</span> <span className="text-foreground">{'{ itpay }'}</span> <span className="text-white/70">from</span> <span className="text-white/50">{`'@itpay/mcp'`}</span><br />
                  <br />
                  <span className="text-muted-foreground">{t("mcpIntegration.codeComment1")}</span><br />
                  <span className="text-white/70">export const</span> <span className="text-white">paidTool</span> <span className="text-foreground">=</span> <span className="text-white">itpay</span>.<span className="text-white">tool</span>({'{'})<br />
                  &nbsp;&nbsp;name: <span className="text-white/50">{`'deep-research'`}</span>,<br />
                  &nbsp;&nbsp;price: {'{'} amount: <span className="text-white">990</span>, currency: <span className="text-white/50">{`'CNY'`}</span> {'}'},<br />
                  &nbsp;&nbsp;channels: [<span className="text-white/50">{`'alipay'`}</span>, <span className="text-white/50">{`'wechat'`}</span>, <span className="text-white/50">{`'promptpay'`}</span>],<br />
                  &nbsp;&nbsp;<span className="text-white/70">async</span> <span className="text-white">execute</span>(input) {'{'}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-muted-foreground">{t("mcpIntegration.codeComment2")}</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-white/70">return await</span> <span className="text-white">runResearch</span>(input)<br />
                  &nbsp;&nbsp;{'}'}<br />
                  {'}'})
                </code>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t("mcpIntegration.sdkSupport")}
            </p>
          </motion.div>

          {/* Right - Integration logos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4"
          >
            {[
              { name: "OpenAI", abbr: "O" },
              { name: "Claude", abbr: "C" },
              { name: "Cursor", abbr: "Cu" },
              { name: "MCP", abbr: "M" },
              { name: "LangGraph", abbr: "L" },
              { name: "Vercel AI", abbr: "V" },
            ].map((item) => (
              <div
                key={item.name}
                className="glass rounded-xl p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-200"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg bg-white/[0.06] text-white/80 transition-transform duration-200">
                  {item.abbr}
                </div>
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
