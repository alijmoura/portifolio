import { useI18n } from '../i18n/useI18n'
import { Reveal } from './Reveal'

export function About() {
  const { t } = useI18n()

  return (
    <section className="section" id="about">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <h2 className="section-title">{t.about.title}</h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <p className="about-lead">{t.about.lead}</p>
          </Reveal>

          <Reveal delay={90}>
            <div className="about-body">
              {t.about.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
