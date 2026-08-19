import { useI18n } from '../i18n/useI18n'
import { ArrowRightIcon, DownloadIcon, MapPinIcon } from './Icons'

export function Hero() {
  const { t, locale } = useI18n()

  const cvHref = locale === 'pt' ? '/curriculo-pt.pdf' : '/curriculo-en.pdf'

  return (
    <section className="hero" id="top">
      <div className="shell hero-inner">
        <p className="eyebrow">{t.hero.eyebrow}</p>

        <h1 className="hero-name">{t.hero.name}</h1>
        <p className="hero-headline">{t.hero.headline}</p>
        <p className="hero-summary">{t.hero.summary}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            {t.hero.ctaProjects}
            <ArrowRightIcon />
          </a>
          <a
            href={cvHref}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-ghost"
          >
            <DownloadIcon />
            {t.hero.ctaCv}
          </a>
          <a href="#contact" className="btn btn-ghost">
            {t.hero.ctaContact}
          </a>
        </div>

        <p className="hero-location">
          <MapPinIcon />
          {t.hero.location}
        </p>

        <dl className="stats">
          {t.stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <dt className="stat-value">{stat.value}</dt>
              <dd className="stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
