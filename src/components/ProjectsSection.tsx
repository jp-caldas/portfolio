'use client'

import { useState } from 'react'
import { useLocale } from '@/context/LocaleContext'
import { projects, Project } from '@/data/projects'

function ProjectCard({ project }: { project: Project }) {
  const { locale } = useLocale()
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg border border-softGray overflow-hidden hover:border-primary transition-colors">
      <div className="p-5 xl:p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h4 className="text-xl font-semibold text-black mb-1">{project.title[locale]}</h4>
            <p className="text-sm text-primary font-medium">{project.company}</p>
          </div>
        </div>
        <p className="text-base text-secondary mb-4">{project.description[locale]}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-primary/15 text-primary text-xs px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-primary font-medium hover:underline"
        >
          {expanded
            ? (locale === 'pt' ? '▲ Menos detalhes' : '▲ Less details')
            : (locale === 'pt' ? '▼ Mais detalhes' : '▼ More details')
          }
        </button>
        {expanded && (
          <div className="mt-4 pt-4 border-t border-softGray">
            {project.details && (
              <div className="mb-4">
                <h5 className="font-semibold text-black mb-2">{locale === 'pt' ? 'Atribuições' : 'Details'}</h5>
                <ul className="list-disc list-inside space-y-1">
                  {project.details[locale].map((detail, i) => (
                    <li key={i} className="text-sm text-secondary">{detail}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.results && (
              <div>
                <h5 className="font-semibold text-black mb-2">{locale === 'pt' ? 'Resultados' : 'Results'}</h5>
                <ul className="list-disc list-inside space-y-1">
                  {project.results[locale].map((result, i) => (
                    <li key={i} className="text-sm text-secondary">{result}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const { locale } = useLocale()

  return (
    <section>
      <div className="bg-softGray">
        <div className="container mx-auto px-4 sm:px-7">
          <div className="py-16 xl:py-32">
<div className="flex items-center gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>{locale === 'pt' ? 'Trabalhos Recentes' : 'Latest Works'}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}