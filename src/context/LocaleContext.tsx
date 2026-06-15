'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Locale = 'pt' | 'en'

interface LocaleContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (strings: Record<Locale, string>) => string
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  const t = (strings: Record<Locale, string>): string => strings[locale]

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}