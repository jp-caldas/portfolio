'use client'

import { useLocale } from '@/context/LocaleContext'
import { education, certifications, skillTags } from '@/data/education'

export default function EducationSkillsSection() {
  const { locale } = useLocale()

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container mx-auto px-4 sm:px-7 relative z-10">
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>{locale === 'pt' ? 'Formação & Habilidades' : 'Education & Skills'}</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-20">
              <div className="w-full lg:max-w-md flex flex-col gap-8">
                {education.map((edu, i) => (
                  <div key={i}>
                    <p className="text-lg text-black font-medium">{edu.degree[locale]}</p>
                    <p className="text-base text-primary">{edu.institution}</p>
                    <p className="text-sm text-secondary">{edu.period[locale]}</p>
                  </div>
                ))}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">{locale === 'pt' ? 'Certificações' : 'Certifications'}</h4>
                  {certifications.map((cert, i) => (
                    <div key={i} className="mb-4">
                      <p className="text-lg font-medium text-black">{cert.title[locale]}</p>
                      <p className="text-base text-secondary">{cert.items[locale]}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-4">{locale === 'pt' ? 'Habilidades Técnicas' : 'Technical Skills'}</h4>
                <div className="flex flex-wrap gap-3">
                  {skillTags.map((skill) => (
                    <span key={skill} className="bg-white border border-softGray rounded-full px-4 py-2 text-sm font-medium text-black hover:border-primary hover:text-primary transition-colors">
                      {skill}
                    </span>
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