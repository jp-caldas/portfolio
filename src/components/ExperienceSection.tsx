'use client'

import { useLocale } from '@/context/LocaleContext'
import { experience } from '@/data/experience'

export default function ExperienceSection() {
  const { locale } = useLocale()

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4 sm:px-7">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>{locale === 'pt' ? 'Experiência' : 'Experience'}</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>
          <div className="space-y-7 md:space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                <div>
                  <h3 className="font-bold mb-2 text-black">{exp.period[locale]}</h3>
                  <h4 className="text-lg font-normal">{exp.role[locale]}</h4>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-3 w-px h-40 bg-softGray"></div>
                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div className="no-print w-3.5 h-3.5 rounded-full border bg-white flex items-center justify-center border-black">
                      {i === 1 && <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>}
                    </div>
                  </div>
                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">{exp.company}</span>
                    </div>
                    <p className="text-base font-normal">{exp.type[locale]}</p>
                  </div>
                </div>
                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">{exp.description[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}