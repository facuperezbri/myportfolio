import type { Locale } from './config'
import { en } from './dictionaries/en'
import { es } from './dictionaries/es'

const dictionaries = { en, es }

export type Dictionary = typeof en

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en
}
