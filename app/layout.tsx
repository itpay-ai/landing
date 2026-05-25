import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'itpay.ai — AI Agent 的全球收款协议',
  description: '开源协议让任何 Agent 一键获得支付能力，PaaS 聚合微信、支付宝、东南亚 13 国 QR 渠道。四方支付，不碰钱。对话中扫码即付。',
  keywords: ['AI payments', 'MCP', 'x402', 'AI agents', 'QR payment', 'Alipay', 'WeChat Pay', 'PromptPay', 'QRIS', 'AI commerce', '聚合支付'],
  authors: [{ name: 'itpay.ai' }],
  openGraph: {
    title: 'itpay.ai — AI Agent 的全球收款协议',
    description: '开源协议 + PaaS 渠道聚合。四方支付不碰钱，对话中扫码即付。',
    type: 'website',
    locale: 'zh_CN',
    siteName: 'itpay.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'itpay.ai — AI Agent 的全球收款协议',
    description: '开源协议让任何 Agent 一键获得全球收款能力。',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
