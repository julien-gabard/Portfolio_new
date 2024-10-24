/**
 * Checks if the global 'window' object or 'window.matchMedia' is undefined.
 *
 * This function determines if the code is executing in an environment where
 * the 'window' object is not available (typically non-browser environments like Node.js)
 * or 'window.matchMedia' is not supported.
 *
 * @returns {boolean} - Returns true if 'window' or 'window.matchMedia' is undefined, otherwise false.
 */
const isWindowUndefined = (): boolean =>
    typeof window === 'undefined' || typeof window.matchMedia === 'undefined'

export default isWindowUndefined
