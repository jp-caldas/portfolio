'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type Locale = 'pt' | 'en'

interface LocaleContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (strings: Record<Locale, string>) => string
  localeKey: number
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  const [localeKey, setLocaleKey] = useState(0)

  const handleSetLocale = useCallback((l: Locale) => {
    setLocale(l)
    setLocaleKey(k => k + 1)
  }, [])

  const t = useCallback(
    (strings: Record<Locale, string>): string => strings[locale],
    [locale]
  )

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale, t, localeKey }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}