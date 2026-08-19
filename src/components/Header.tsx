import { useEffect, useState } from 'react'
import { useI18n } from '../i18n/useI18n'
import { useActiveSection } from '../hooks/useActiveSection'
import { MoonIcon, SunIcon } from './Icons'
import type { Theme } from '../hooks/useTheme'

const SECTION_IDS = ['about', 'projects', 'skills', 'experience', 'contact']

interface HeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const { t, locale, toggleLocale } = useI18n()
  const active = useActiveSection(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const labels: Record<string, string> = {
    about: t.nav.about,
    projects: t.nav.projects,
    skills: t.nav.skills,
    experience: t.nav.experience,
    contact: t.nav.contact,
  }

  return (
    <header className="header" data-scrolled={scrolled}>
      <div className="shell header-inner">
        <a href="#top" className="brand">
          Alisson Moura<span className="brand-dot">.</span>
        </a>

        <nav className="nav" aria-label={t.a11y.menu}>
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link"
              aria-current={active === id ? 'true' : undefined}
            >
              {labels[id]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn lang-btn"
            onClick={toggleLocale}
            aria-label={t.a11y.toggleLang}
          >
            {locale === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={t.a11y.toggleTheme}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
