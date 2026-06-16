'use client'

import { useLocale } from '@/context/LocaleContext'
import { stats, languages } from '@/data/profile'

export default function AboutSection() {
  const { locale, t } = useLocale()

  const statItems = [
    { value: stats.years, label: t({ pt: "Anos de experiência", en: "Years of experience" }) },
    { value: stats.companies, label: t({ pt: "Empresas atendidas", en: "Companies served" }) },
    { value: stats.projects, label: t({ pt: "Projetos entregues", en: "Projects delivered" }) },
  ]

  return (
    <section>
      <div className="bg-softGray py-10 md:py-32">
        <div className="container mx-auto px-4 sm:px-7">
          <div className="flex items-center gap-2 border-b border-black pb-7">
            <h2>{t({ pt: "Sobre Mim", en: "About Me" })}</h2>
          </div>
          <div className="pt-10 xl:pt-16">
            <div className="w-full max-w-4xl">
              <p>
                {t({
                  pt: "Especialista em Dados e IA com sólida experiência em migração para infraestruturas modernas na nuvem (Dataform/GCP) e desenvolvimento de Agentes de IA (n8n/RAG) que conectam LLMs aos processos de negócio. Histórico marcado pela entrega de ROI mensurável e eliminação de processos manuais por meio de engenharia de software orientada a dados.",
                  en: "Data and AI specialist with strong experience in migrating to modern cloud infrastructures (Dataform/GCP) and developing AI Agents (n8n/RAG) that connect LLMs to business processes. History marked by delivering measurable ROI and eliminating manual processes through data-oriented software engineering."
                })}
              </p>
              <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                {statItems.map((item, i) => (
                  <div key={i}>
                    <h3>{item.value}</h3>
                    <p className="text-base md:text-lg text-black">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="pt-8 xl:pt-14 flex flex-col items-start gap-3">
                <p className="text-base text-black font-medium">{t({ pt: "Idiomas", en: "Languages" })}:</p>
                <div className="flex flex-col items-start gap-2">
                  {languages.map((lang) => (
                    <p key={lang.name.en} className="bg-white py-1.5 px-3 w-fit rounded-full text-sm">
                      {lang.name[locale]} — {lang.level[locale]}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}