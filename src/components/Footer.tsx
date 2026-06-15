'use client'

import { useLocale } from '@/context/LocaleContext'

export default function Footer() {
  const { locale } = useLocale()

  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center border-t border-softGray">
      <div className="container mx-auto px-4 sm:px-7">
        <div className="flex flex-col gap-3 items-center">
          <span className="text-2xl font-bold text-primary">PC</span>
          <p className="text-secondary text-sm text-center">
            {locale === 'pt'
              ? 'Desenhado por getnextjstemplates • Adaptado por Pedro Caldas'
              : 'Designed by getnextjstemplates • Adapted by Pedro Caldas'
            }
          </p>
        </div>
      </div>
    </footer>
  )
}