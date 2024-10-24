/**
 * Retrieves the user's default dark theme preference based on system/browser settings.
 *
 * @returns {boolean} - A boolean indicating whether the user prefers a dark theme by default.
 */
const getDefaultDarkThemePreference = (): boolean =>
    window.matchMedia('(prefers-color-scheme: dark)').matches

export default getDefaultDarkThemePreference
