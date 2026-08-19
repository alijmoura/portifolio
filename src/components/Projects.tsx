import { useI18n } from '../i18n/useI18n'
import { Reveal } from './Reveal'
import { ExternalIcon } from './Icons'
import type { Project } from '../i18n/types'

function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n()
  const copy = t.projects

  return (
    <article className="project">
      <div className="project-top">
        <h3 className="project-name">{project.name}</h3>
        <span className="badge" data-tone={project.statusTone}>
          {project.statusTone === 'live' && <span className="pulse" />}
          {project.status}
        </span>
      </div>

      <p className="project-tagline">{project.tagline}</p>

      <div className="project-narrative">
        <div>
          <p className="narrative-label">{copy.problemLabel}</p>
          <p className="narrative-text">{project.problem}</p>
        </div>
        <div>
          <p className="narrative-label">{copy.solutionLabel}</p>
          <p className="narrative-text">{project.solution}</p>
        </div>
      </div>

      <ul className="highlights">
        {project.highlights.map((item) => (
          <li className="highlight" key={item.slice(0, 40)}>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="stack" aria-label={copy.stackLabel}>
        {project.stack.map((tech) => (
          <span className="chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className="project-footer">
        {project.links.map((link) => (
          <a
            key={link.href}
            className="link-btn"
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {link.label}
            <ExternalIcon />
          </a>
        ))}
        {project.note && <p className="project-note">{project.note}</p>}
      </div>

      {project.credentials && (
        <div className="creds">
          <p className="creds-label">
            {copy.credsLabel} · {project.credentials.label}
          </p>
          <div className="creds-row">
            <span>
              login: <strong>{project.credentials.user}</strong>
            </span>
            <span>
              senha: <strong>{project.credentials.pass}</strong>
            </span>
          </div>
        </div>
      )}
    </article>
  )
}

export function Projects() {
  const { t } = useI18n()

  return (
    <section className="section" id="projects">
      <div className="shell">
        <Reveal>
          <div className="section-head">
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="section-sub">{t.projects.subtitle}</p>
          </div>
        </Reveal>

        <div className="projects">
          {t.projects.items.map((project, index) => (
            <Reveal key={project.id} delay={index === 0 ? 0 : 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
