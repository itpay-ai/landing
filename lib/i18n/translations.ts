export const translations = {
  zh: {
    // Header
    header: {
      infrastructure: "基础设施",
      integrations: "集成能力",
      protocol: "开放协议",
      docs: "开发文档",
      login: "登录",
      getApiKey: "获取 API Key",
    },
    // Hero Section
    hero: {
      badge: "AI 原生支付基础设施",
      title: "让 AI Agent 自由收款",
      subtitle: "一套 API，聚合支付宝、微信支付、银联等主流渠道。为你的 MCP Tool、AI Agent、SaaS 产品提供钱包、积分、订阅、按量计费全套能力。",
      cta: "获取 API Key",
      ctaSecondary: "阅读文档",
      stats: {
        channels: "支付渠道",
        uptime: "可用性",
        latency: "平均延迟",
      },
    },
    // Hero Dashboard
    dashboard: {
      title: "支付仪表盘",
      paymentFlow: "支付流程",
      realTimePayment: "实时支付",
      qrScanned: "扫码成功",
      processing: "处理中...",
      paymentSuccess: "支付成功",
      amount: "金额",
      scanToPay: "扫码支付",
      alipay: "支付宝",
      wechatPay: "微信支付",
      eventStream: "事件流",
      eventCreated: "事件创建",
      eventCompleted: "事件完成",
      eventWebhook: "Webhook 发送",
    },
    // Infrastructure Section
    infrastructure: {
      badge: "核心能力",
      title: "AI 原生支付基础设施",
      subtitle: "不只是支付网关，而是为 AI 时代设计的完整商业化基础设施",
      features: {
        mcp: {
          title: "MCP 原生支持",
          description: "一行代码，让你的 AI Tool 获得收款能力。与 OpenAI、Claude、Cursor 等主流平台无缝集成。",
        },
        channels: {
          title: "多渠道聚合",
          description: "支付宝、微信支付、银联、Stripe 统一接入，一个 API 覆盖全部主流支付方式。",
        },
        wallet: {
          title: "钱包 & 积分系统",
          description: "内置用户钱包和积分体系，支持充值、消费、转账、提现全流程。",
        },
        subscription: {
          title: "订阅 & 计量计费",
          description: "灵活的定价模型：按次、按量、包月、阶梯定价，满足各种商业场景。",
        },
        events: {
          title: "事件驱动架构",
          description: "实时 Webhook 推送，支持重试和幂等性，确保每笔交易状态准确同步。",
        },
        security: {
          title: "企业级安全",
          description: "PCI-DSS 合规，端到端加密，细粒度权限控制，满足金融级安全要求。",
        },
      },
    },
    // MCP Integration Section
    mcp: {
      badge: "MCP 集成",
      title: "为 AI Agent 而生的支付协议",
      subtitle: "遵循 Model Context Protocol 规范，让支付能力成为 AI 的原生技能",
      platforms: "支持平台",
      codeComment: "// 一行代码，为你的 AI Tool 获得支付能力",
      codeComment2: "// 支付成功后自动解锁",
    },
    // Payment Rails Section
    paymentRails: {
      badge: "支付通道",
      title: "一个协议，连接所有支付方式",
      subtitle: "统一的 API 接口，覆盖中国主流支付渠道和国际支付网络",
      domestic: "国内支付",
      international: "国际支付",
      channels: {
        alipay: {
          name: "支付宝",
          description: "扫码支付、APP支付、H5支付、小程序支付",
        },
        wechat: {
          name: "微信支付",
          description: "扫码支付、JSAPI支付、小程序支付、APP支付",
        },
        unionpay: {
          name: "银联",
          description: "云闪付、银联在线、银行卡快捷支付",
        },
        stripe: {
          name: "Stripe",
          description: "信用卡、Apple Pay、Google Pay、SEPA",
        },
      },
      unifiedApi: "统一 API 接口",
      autoRouting: "智能路由，自动选择最优通道",
    },
    // Wallet & Credits Section
    wallet: {
      badge: "钱包 & 积分",
      title: "内置商业化基础设施",
      subtitle: "完整的用户资产管理体系，支持充值、消费、转账、提现全流程",
      balance: "余额",
      credits: "积分",
      recharge: "充值",
      features: {
        multiCurrency: {
          title: "多币种钱包",
          description: "支持 CNY、USD 等多币种，自动汇率转换",
        },
        credits: {
          title: "积分系统",
          description: "灵活的积分发放、消耗、过期规则配置",
        },
        withdraw: {
          title: "提现到账",
          description: "支持提现到支付宝、微信、银行卡",
        },
      },
    },
    // Conversational Commerce Section
    conversational: {
      badge: "对话式商务",
      title: "支付，在对话中自然发生",
      subtitle: "AI 理解用户意图，智能推荐商品，无缝完成支付，全程无需跳转",
      tryDemo: "试试对话支付",
      chat: {
        user1: "我想升级到 Pro 版本",
        assistant1: "好的！Pro 版本包含无限 API 调用、优先支持和高级分析功能。月费 ¥99 或年费 ¥999（省 ¥189）。您想选择哪个方案？",
        user2: "年费吧，划算",
        assistant2: "明智的选择！我已为您生成支付链接。请确认支付 ¥999 升级到 Pro 年度版：",
        payButton: "确认支付 ¥999",
        success: "支付成功！您的账户已升级到 Pro 版本，有效期至明年此时。",
      },
    },
    // Event Runtime Section
    events: {
      badge: "事件系统",
      title: "实时事件驱动架构",
      subtitle: "每笔交易状态变更即时推送，支持自定义 Webhook 和重试策略",
      liveEvents: "实时事件",
      webhookConfig: "Webhook 配置",
      endpoint: "端点",
      retryPolicy: "重试策略",
      signing: "签名验证",
      eventTypes: {
        created: "支付创建",
        processing: "处理中",
        succeeded: "支付成功",
        webhookSent: "Webhook 已发送",
      },
    },
    // Protocol Section
    protocol: {
      badge: "开放协议",
      title: "开放协议，闭源结算",
      subtitle: "API 接口完全开放透明，资金流转由持牌机构处理，合规安全",
      openApi: {
        title: "开放 API",
        description: "RESTful API + WebSocket 实时推送，完整的 SDK 支持",
        features: ["TypeScript / Python / Go SDK", "OpenAPI 3.0 规范", "Postman 集合"],
      },
      settlement: {
        title: "持牌结算",
        description: "资金由持牌支付机构托管，T+1 自动结算到企业账户",
        features: ["央行支付牌照", "银行级资金托管", "实时对账系统"],
      },
    },
    // Future Commerce Section
    future: {
      badge: "未来愿景",
      title: "Agent to Agent 支付",
      subtitle: "当 AI Agent 可以自主决策和支付，商业世界将迎来全新范式",
      scenarios: {
        research: {
          title: "自主采购数据",
          description: "Research Agent 自动购买所需数据集和 API 调用",
        },
        negotiate: {
          title: "智能议价",
          description: "采购 Agent 与供应商 Agent 自动协商最优价格",
        },
        settle: {
          title: "即时结算",
          description: "交易完成即结算，无需人工介入对账",
        },
      },
      cta: "加入早期测试",
    },
    // Trust Section
    trust: {
      badge: "安全合规",
      title: "企业级安全保障",
      subtitle: "通过国际权威认证，满足金融级合规要求",
      certifications: {
        pci: {
          title: "PCI-DSS",
          description: "支付卡行业数据安全标准",
        },
        iso: {
          title: "ISO 27001",
          description: "信息安全管理体系认证",
        },
        gdpr: {
          title: "GDPR",
          description: "欧盟通用数据保护条例",
        },
        mlps: {
          title: "等保三级",
          description: "国家信息安全等级保护",
        },
      },
      features: {
        encryption: "端到端加密",
        audit: "全链路审计",
        permission: "细粒度权限",
      },
    },
    // CTA Section
    cta: {
      title: "准备好让你的 AI 产品开始收款了吗？",
      subtitle: "5 分钟集成，立即开始接收支付",
      button: "免费开始",
      note: "无需信用卡 · 免费额度 · 随时取消",
    },
    // Footer
    footer: {
      description: "为 AI Agent 和 MCP Tool 提供聚合支付基础设施",
      product: {
        title: "产品",
        links: ["API 文档", "SDK 下载", "定价", "更新日志"],
      },
      developers: {
        title: "开发者",
        links: ["快速开始", "API 参考", "示例代码", "状态页"],
      },
      company: {
        title: "公司",
        links: ["关于我们", "博客", "招聘", "联系我们"],
      },
      legal: {
        title: "法律",
        links: ["服务条款", "隐私政策", "合规证书"],
      },
      copyright: "© 2024 itpay.ai. 保留所有权利。",
    },
  },
  en: {
    // Header
    header: {
      infrastructure: "Infrastructure",
      integrations: "Integrations",
      protocol: "Protocol",
      docs: "Docs",
      login: "Login",
      getApiKey: "Get API Key",
    },
    // Hero Section
    hero: {
      badge: "AI-Native Payment Infrastructure",
      title: "Let AI Agents Accept Payments",
      subtitle: "One API to aggregate Alipay, WeChat Pay, UnionPay and more. Provide wallets, credits, subscriptions, and usage-based billing for your MCP Tools, AI Agents, and SaaS products.",
      cta: "Get API Key",
      ctaSecondary: "Read Docs",
      stats: {
        channels: "Payment Channels",
        uptime: "Uptime",
        latency: "Avg Latency",
      },
    },
    // Hero Dashboard
    dashboard: {
      title: "Payment Dashboard",
      paymentFlow: "Payment Flow",
      realTimePayment: "Real-time Payment",
      qrScanned: "QR Scanned",
      processing: "Processing...",
      paymentSuccess: "Payment Success",
      amount: "Amount",
      scanToPay: "Scan to Pay",
      alipay: "Alipay",
      wechatPay: "WeChat Pay",
      eventStream: "Event Stream",
      eventCreated: "Event Created",
      eventCompleted: "Event Completed",
      eventWebhook: "Webhook Sent",
    },
    // Infrastructure Section
    infrastructure: {
      badge: "Core Features",
      title: "AI-Native Payment Infrastructure",
      subtitle: "More than a payment gateway — a complete commercialization infrastructure designed for the AI era",
      features: {
        mcp: {
          title: "MCP Native Support",
          description: "One line of code to enable payments for your AI Tool. Seamlessly integrates with OpenAI, Claude, Cursor and more.",
        },
        channels: {
          title: "Multi-Channel Aggregation",
          description: "Alipay, WeChat Pay, UnionPay, Stripe unified access — one API covers all major payment methods.",
        },
        wallet: {
          title: "Wallet & Credits System",
          description: "Built-in user wallet and credits system, supporting deposits, spending, transfers, and withdrawals.",
        },
        subscription: {
          title: "Subscription & Metered Billing",
          description: "Flexible pricing models: per-use, metered, monthly, tiered pricing for any business scenario.",
        },
        events: {
          title: "Event-Driven Architecture",
          description: "Real-time webhook delivery with retry and idempotency, ensuring accurate transaction status sync.",
        },
        security: {
          title: "Enterprise Security",
          description: "PCI-DSS compliant, end-to-end encryption, fine-grained access control for financial-grade security.",
        },
      },
    },
    // MCP Integration Section
    mcp: {
      badge: "MCP Integration",
      title: "Payment Protocol Built for AI Agents",
      subtitle: "Following Model Context Protocol spec, making payments a native skill for AI",
      platforms: "Supported Platforms",
      codeComment: "// One line of code to enable payments for your AI Tool",
      codeComment2: "// Unlocks after successful payment",
    },
    // Payment Rails Section
    paymentRails: {
      badge: "Payment Rails",
      title: "One Protocol, All Payment Methods",
      subtitle: "Unified API interface covering China's major payment channels and international payment networks",
      domestic: "Domestic",
      international: "International",
      channels: {
        alipay: {
          name: "Alipay",
          description: "QR code, APP, H5, Mini Program payments",
        },
        wechat: {
          name: "WeChat Pay",
          description: "QR code, JSAPI, Mini Program, APP payments",
        },
        unionpay: {
          name: "UnionPay",
          description: "QuickPass, Online, Quick Pay",
        },
        stripe: {
          name: "Stripe",
          description: "Credit cards, Apple Pay, Google Pay, SEPA",
        },
      },
      unifiedApi: "Unified API",
      autoRouting: "Smart routing, auto-selects optimal channel",
    },
    // Wallet & Credits Section
    wallet: {
      badge: "Wallet & Credits",
      title: "Built-in Commerce Infrastructure",
      subtitle: "Complete user asset management system supporting deposits, spending, transfers, and withdrawals",
      balance: "Balance",
      credits: "Credits",
      recharge: "Recharge",
      features: {
        multiCurrency: {
          title: "Multi-Currency Wallet",
          description: "Supports CNY, USD and more with auto exchange rates",
        },
        credits: {
          title: "Credits System",
          description: "Flexible credits issuance, consumption, and expiry rules",
        },
        withdraw: {
          title: "Withdrawals",
          description: "Withdraw to Alipay, WeChat, or bank accounts",
        },
      },
    },
    // Conversational Commerce Section
    conversational: {
      badge: "Conversational Commerce",
      title: "Payments, Naturally in Conversation",
      subtitle: "AI understands intent, recommends products, completes payment — all without leaving the chat",
      tryDemo: "Try Conversational Pay",
      chat: {
        user1: "I want to upgrade to Pro",
        assistant1: "Great choice! Pro includes unlimited API calls, priority support, and advanced analytics. $12/month or $99/year (save $45). Which plan would you like?",
        assistant2: "Smart choice! I've generated a payment link for you. Please confirm to pay $99 for Pro annual:",
        user2: "Annual, better value",
        payButton: "Confirm Payment $99",
        success: "Payment successful! Your account has been upgraded to Pro, valid until next year.",
      },
    },
    // Event Runtime Section
    events: {
      badge: "Event System",
      title: "Real-time Event-Driven Architecture",
      subtitle: "Instant push for every transaction status change, with custom webhooks and retry policies",
      liveEvents: "Live Events",
      webhookConfig: "Webhook Config",
      endpoint: "Endpoint",
      retryPolicy: "Retry Policy",
      signing: "Signature Verification",
      eventTypes: {
        created: "Payment Created",
        processing: "Processing",
        succeeded: "Payment Succeeded",
        webhookSent: "Webhook Sent",
      },
    },
    // Protocol Section
    protocol: {
      badge: "Open Protocol",
      title: "Open Protocol, Licensed Settlement",
      subtitle: "API interface fully open and transparent, funds handled by licensed institutions for compliance and security",
      openApi: {
        title: "Open API",
        description: "RESTful API + WebSocket real-time push, complete SDK support",
        features: ["TypeScript / Python / Go SDK", "OpenAPI 3.0 Spec", "Postman Collection"],
      },
      settlement: {
        title: "Licensed Settlement",
        description: "Funds custodied by licensed payment institutions, T+1 auto-settlement to business accounts",
        features: ["Payment License", "Bank-grade Custody", "Real-time Reconciliation"],
      },
    },
    // Future Commerce Section
    future: {
      badge: "Future Vision",
      title: "Agent to Agent Payments",
      subtitle: "When AI Agents can autonomously decide and pay, commerce enters a new paradigm",
      scenarios: {
        research: {
          title: "Autonomous Data Purchase",
          description: "Research Agent auto-purchases required datasets and API calls",
        },
        negotiate: {
          title: "Smart Negotiation",
          description: "Procurement Agent auto-negotiates best prices with supplier Agents",
        },
        settle: {
          title: "Instant Settlement",
          description: "Settle on completion, no manual reconciliation needed",
        },
      },
      cta: "Join Early Access",
    },
    // Trust Section
    trust: {
      badge: "Security & Compliance",
      title: "Enterprise-Grade Security",
      subtitle: "Certified by international authorities, meeting financial-grade compliance requirements",
      certifications: {
        pci: {
          title: "PCI-DSS",
          description: "Payment Card Industry Data Security Standard",
        },
        iso: {
          title: "ISO 27001",
          description: "Information Security Management System",
        },
        gdpr: {
          title: "GDPR",
          description: "EU General Data Protection Regulation",
        },
        mlps: {
          title: "MLPS Level 3",
          description: "China Information Security Protection",
        },
      },
      features: {
        encryption: "End-to-end Encryption",
        audit: "Full-chain Audit",
        permission: "Fine-grained Permissions",
      },
    },
    // CTA Section
    cta: {
      title: "Ready to monetize your AI product?",
      subtitle: "5-minute integration, start accepting payments immediately",
      button: "Start Free",
      note: "No credit card required · Free tier · Cancel anytime",
    },
    // Footer
    footer: {
      description: "Aggregated payment infrastructure for AI Agents and MCP Tools",
      product: {
        title: "Product",
        links: ["API Docs", "SDK Downloads", "Pricing", "Changelog"],
      },
      developers: {
        title: "Developers",
        links: ["Quick Start", "API Reference", "Examples", "Status"],
      },
      company: {
        title: "Company",
        links: ["About Us", "Blog", "Careers", "Contact"],
      },
      legal: {
        title: "Legal",
        links: ["Terms of Service", "Privacy Policy", "Compliance"],
      },
      copyright: "© 2024 itpay.ai. All rights reserved.",
    },
  },
} as const

export type Language = keyof typeof translations
export type Translations = typeof translations.zh
