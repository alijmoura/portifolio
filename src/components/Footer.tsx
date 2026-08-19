import { useI18n } from '../i18n/useI18n'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <span>
          © {new Date().getFullYear()} {t.footer.rights}
        </span>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  )
}
