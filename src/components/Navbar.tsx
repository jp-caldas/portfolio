'use client'

import { useLocale } from '@/context/LocaleContext'

export default function Navbar() {
  const { locale, setLocale } = useLocale()

  const toggleLocale = () => setLocale(locale === 'pt' ? 'en' : 'pt')

  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container mx-auto px-4 sm:px-7">
        <nav className="py-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-8">
              <span className="text-2xl font-bold text-primary">PC</span>
              <a
                href={`/portfolio/pdfs/Pedro_Caldas_Data_Analyst-${locale}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
              >
                <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                  {locale === 'pt' ? 'Baixar Currículo PDF' : 'Download PDF Resume'}
                </span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/jp-caldas" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/jose-pedro-caldas-da-silva/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <button
                onClick={toggleLocale}
                className="ml-2 px-3 py-1 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors"
              >
                {locale === 'pt' ? 'EN' : 'PT'}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}