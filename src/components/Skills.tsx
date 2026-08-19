import { useI18n } from '../i18n/useI18n'
import { Reveal } from './Reveal'

export function Skills() {
  const { t } = useI18n()

  return (
    <section className="section" id="skills">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <h2 className="section-title">{t.skills.title}</h2>
            <p className="section-sub">{t.skills.subtitle}</p>
          </div>
        </Reveal>

        <div className="skill-grid">
          {t.skills.groups.map((group, index) => (
            <Reveal key={group.label} delay={index * 50}>
              <div className="skill-card">
                <h3 className="skill-label">{group.label}</h3>
                <div className="skill-items">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
