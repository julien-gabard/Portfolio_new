import { DARK_THEME_KEY } from 'config/constants'
import getDefaultDarkThemePreference from 'helpers/getDefaultDarkThemePreference'

/**
 * Retrieves the dark theme preference for the user.
 *
 * @returns {boolean} - A boolean indicating whether dark theme is enabled.
 *
 * The function first checks if a value is stored in localStorage under the key `DARK_THEME_KEY`.
 * If no value is found (i.e., localStorage returns null), it defaults to the user's system or browser-level
 * preference using the `getDefaultDarkThemePreference` function.
 *
 * If the key is present in localStorage, it returns `true` or `false` based on the stored value.
 */
const getIsDarkThemePreference = (): boolean => {
    const storedPreference = localStorage.getItem(DARK_THEME_KEY)

    return storedPreference === null
        ? getDefaultDarkThemePreference()
        : storedPreference === 'true'
}

export default getIsDarkThemePreference
