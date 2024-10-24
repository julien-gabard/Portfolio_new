import isWindowUndefined from 'helpers/isWindowUndefined'

/**
 * Evaluates a given CSS media query and returns whether it matches the current window state.
 *
 * @param {string} mediaQuery - The CSS media query string to evaluate.
 * @returns {boolean} - Returns `true` if the media query matches the current window state, otherwise `false`. If the `window` object is undefined, it returns `false`.
 */
const getMediaQueryMatches = (mediaQuery: string): boolean => {
    if (isWindowUndefined()) {
        return false
    }

    return window.matchMedia(mediaQuery).matches
}

export default getMediaQueryMatches
