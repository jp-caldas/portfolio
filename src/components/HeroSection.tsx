'use client'

import { useLocale } from '@/context/LocaleContext'

export default function HeroSection() {
  const { t } = useLocale()

  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container mx-auto px-4 sm:px-7">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div className="flex items-center justify-center md:justify-start -mb-2 md:hidden">
              <img
                alt="profile"
                src="/portfolio/images/perfil_foto.png"
                className="rounded-full object-cover w-48 h-48 border-4 border-softGray"
              />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <h1>{t({ pt: "Sou Pedro", en: "I'm Pedro" })}</h1>
                <span className="wave text-5xl">👋</span>
              </div>
              <h1>{t({
                pt: "Analista de Dados | Analytics Engineer | Especialista em IA",
                en: "Data Analyst | Analytics Engineer | AI Specialist"
              })}</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              {t({
                pt: "Especialista em Dados e IA com foco em Analytics Engineering e Automação de Workflows. Histórico comprovado de entrega de ROI tangível e eliminação de processos manuais por meio de engenharia de software orientada a dados.",
                en: "Data and AI specialist focused on Analytics Engineering and Workflow Automation. Proven track record of delivering tangible ROI and eliminating manual processes through data-driven software engineering."
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute right-0 top-0 bottom-0 w-1/2 items-center justify-center">
        <img
          alt="profile"
          src="/portfolio/images/perfil_foto.png"
          className="object-contain max-w-full max-h-full p-8"
        />
      </div>
    </section>
  )
}