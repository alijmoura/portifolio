import { useI18n } from '../i18n/useI18n'
import { Reveal } from './Reveal'
import { GithubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons'

export function Contact() {
  const { t } = useI18n()
  const c = t.contact

  const links = [
    {
      key: 'email',
      label: 'E-mail',
      value: c.email,
      href: `mailto:${c.email}`,
      icon: <MailIcon />,
    },
    {
      key: 'phone',
      label: 'WhatsApp',
      value: c.phone,
      href: 'https://wa.me/5541998290795',
      icon: <PhoneIcon />,
    },
    {
      key: 'linkedin',
      label: 'LinkedIn',
      value: c.linkedin,
      href: 'https://www.linkedin.com/in/alisson-moura95/',
      icon: <LinkedInIcon />,
    },
    {
      key: 'github',
      label: 'GitHub',
      value: c.github,
      href: 'https://github.com/alijmoura',
      icon: <GithubIcon />,
    },
  ]

  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <Reveal>
          <div className="contact-card">
            <h2 className="contact-title">{c.title}</h2>
            <p className="contact-lead">{c.lead}</p>

            <div className="contact-links">
              {links.map((link) => (
                <a
                  key={link.key}
                  className="contact-link"
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer noopener"
                >
                  {link.icon}
                  <span className="contact-link-meta">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <p className="availability">
              <span className="pulse" />
              {c.availability}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
