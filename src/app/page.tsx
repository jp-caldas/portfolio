'use client'

import { useLocale } from '@/context/LocaleContext'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import EducationSkillsSection from '@/components/EducationSkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  const { localeKey } = useLocale()

  return (
    <div key={localeKey}>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}