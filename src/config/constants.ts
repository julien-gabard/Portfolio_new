/**
 * A constant object representing supported languages.
 *
 * The `SUPPORTED_LANGUES` variable is an immutable object that maps language
 * codes ('en', 'fr') to their respective language names in English and French.
 *
 * - `"en"`: `"English"`
 * - `"fr"`: `"Français"`
 *
 * This ensures that the supported languages and their names remain consistent
 * throughout the application.
 *
 * @type {Record<'en' | 'fr', string>}
 */
export const SUPPORTED_LANGUES: Record<'en' | 'fr', string> = Object.freeze({
    en: 'English',
    fr: 'Français',
})

/**
 * A constant representing the key used to store and retrieve the
 * boolean value indicating whether the dark theme is enabled.
 *
 * This key is typically used in local storage or similar persistence
 * mechanisms to maintain user preferences across sessions.
 *
 * @constant {string}
 */
export const DARK_THEME_KEY = 'isDarkTheme'
