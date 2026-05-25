'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Locale = 'zh' | 'en'

interface I18nContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType>({
  locale: 'zh',
  setLocale: () => {},
  t: (key: string) => key,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dicts: Record<Locale, any> = { zh: {}, en: {} }

// Flat key lookup: "hero.title" → dicts[locale]["hero.title"]
// Arrays are preserved at their parent key: "fourParty.comparisonItems" → string[]
function flatten(obj: Record<string, unknown>, prefix = ''): Record<string, unknown> {
  let result: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (Array.isArray(v)) {
      // Store arrays directly at the key
      result[key] = v
    } else if (typeof v === 'object' && v !== null) {
      result = { ...result, ...flatten(v as Record<string, unknown>, key) }
    } else {
      result[key] = v as string
    }
  }
  return result
}

// Import dictionaries statically
import zhDict from './dictionaries/zh'
import enDict from './dictionaries/en'

dicts.zh = flatten(zhDict)
dicts.en = flatten(enDict)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('zh')

  useEffect(() => {
    const lang = navigator.language.toLowerCase()
    if (lang.startsWith('zh')) {
      setLocale('zh')
    } else {
      setLocale('en')
    }
  }, [])

  const t = (key: string): string => {
    const val = dicts[locale]?.[key]
    if (Array.isArray(val)) return val as unknown as string
    return val ?? key
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
