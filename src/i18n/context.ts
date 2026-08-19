import { createContext } from 'react'
import type { Dictionary, Locale } from './types'

export interface I18nValue {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

export const I18nContext = createContext<I18nValue | null>(null)
