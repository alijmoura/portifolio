import { useI18n } from '../i18n/useI18n'
import { Reveal } from './Reveal'

export function Experience() {
  const { t } = useI18n()

  return (
    <section className="section" id="experience">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <h2 className="section-title">{t.experience.title}</h2>
            <p className="section-sub">{t.experience.subtitle}</p>
          </div>
        </Reveal>

        <div className="timeline">
          {t.experience.items.map((job, index) => (
            <Reveal key={job.company} delay={index * 70}>
              <article className="job">
                <p className="job-period">{job.period}</p>
                <h3 className="job-role">{job.role}</h3>
                <p className="job-company">{job.company}</p>
                <ul className="job-bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)}>{bullet}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="education">
            <h3 className="education-title">{t.experience.educationTitle}</h3>
            {t.experience.education.map((edu) => (
              <div className="edu-item" key={edu.course}>
                <span className="edu-course">{edu.course}</span>
                <span className="edu-school">{edu.school}</span>
                <span className="edu-period">{edu.period}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
