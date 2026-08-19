import { pt } from './pt'
import { en } from './en'
import type { Dictionary, Locale } from './types'

export const dictionaries: Record<Locale, Dictionary> = { pt, en }

export const LOCALES: Locale[] = ['pt', 'en']

export function resolveInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'pt'

  const stored = window.localStorage.getItem('locale')
  if (stored === 'pt' || stored === 'en') return stored

  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export type { Dictionary, Locale }
