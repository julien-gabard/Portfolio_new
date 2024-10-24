import { DefaultTheme } from 'styled-components'

import { Device } from 'types/styled'

/**
 * The `globalValues` object stores configuration settings related to the UI design breakpoints, typography, and some common CSS properties.
 *
 * @property {object} breakpoint - Contains responsive design breakpoint values and associated utility functions.
 * @property {object} typography - Defines the typography settings including font families, font sizes, and font weights for various text elements.
 * @property {string} maxWidth - Maximum width value for container elements.
 * @property {string} blur - Blur effect value for styling elements.
 * @property {string} borderRadius - Border radius value for rounded corners on elements.
 */
export const globalValues = {
    blur: '10px',
    borderRadius: '2px',
    breakpoint: {
        values: {
            xs: 0,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1440,
        },
        unit: 'px',
        up: function (device: Device | number) {
            return `only screen and (min-width: ${typeof device === 'number' ? device : this.values[device]}${this.unit})`
        },
        down: function (device: Device | number) {
            return `only screen and (max-width: ${typeof device === 'number' ? device : this.values[device]}${this.unit})`
        },
        between: function (start: Device | number, end: Device | number) {
            return `only screen and (min-width: ${typeof start === 'number' ? start : this.values[start]}${this.unit}) and (max-width: ${typeof end === 'number' ? end : this.values[end]}${this.unit})`
        },
    },
    maxWidth: '1440px',
    spacing: (...values: [number, number?, number?, number?]) =>
        values
            .slice(0, 4)
            .map(value => `${8 * (value ?? 0)}px`)
            .join(' '),
    typography: {
        htmlFontSize: '16px',
        h1: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '6rem',
            fontWeight: 300,
            '@media (max-width: 1024px)': {
                fontSize: '5.4rem',
            },
            '@media (max-width: 768px)': {
                fontSize: '4.7rem',
            },
            '@media (max-width: 425px)': {
                fontSize: '3.5rem',
            },
        },
        h2: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '3.75rem',
            fontWeight: 300,
            '@media (max-width: 1024px)': {
                fontSize: '3.3rem',
            },
            '@media (max-width: 768px)': {
                fontSize: '3.125rem',
            },
            '@media (max-width: 425px)': {
                fontSize: '2.4rem',
            },
        },
        h3: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '3rem',
            fontWeight: 400,
            '@media (max-width: 1024px)': {
                fontSize: '2.8rem',
            },
            '@media (max-width: 768px)': {
                fontSize: '2.6rem',
            },
            '@media (max-width: 425px)': {
                fontSize: '2rem',
            },
        },
        h4: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '2rem',
            fontWeight: 400,
            '@media (max-width: 768px)': {
                fontSize: '1.8rem',
            },
            '@media (max-width: 425px)': {
                fontSize: '1.6rem',
            },
        },
        h5: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '1.5rem',
            fontWeight: 400,
            '@media (max-width: 768px)': {
                fontSize: '1.3rem',
            },
            '@media (max-width: 425px)': {
                fontSize: '1.25rem',
            },
        },
        h6: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '1.25rem',
            fontWeight: 500,
            '@media (max-width: 425px)': {
                fontSize: '1.125rem',
            },
        },
        p: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '1rem',
            fontWeight: 400,
        },
        span: {
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '1rem',
            fontWeight: 400,
        },
    },
}

/**
 * An object representing the configuration for a light theme.
 *
 * @type {DefaultTheme}
 * @property {string} mode - The theme mode, set to 'light'.
 * @property {Object} colors - The color palette used in the light theme.
 * @property {string} colors.main - The main color used in the theme.
 * @property {string} colors.secondary - The secondary color used in the theme.
 * @property {string} colors.text - The primary text color.
 * @property {string} colors.textSecondary - The secondary text color.
 * @property {string} colors.background - The primary background color.
 * @property {string} colors.backgroundSecondary - The secondary background color.
 * @property {string} colors.border - The border color.
 * @property {string} colors.error - The color used to indicate errors.
 * @property {string} colors.success - The color used to indicate success.
 * @property {string} colors.info - The color used to present informational messages.
 * @property {Object} globalValues - Other global theme configuration values.
 */
export const lightTheme: DefaultTheme = Object.freeze({
    mode: 'light',
    colors: {
        main: '#8e1cde',
        secondary: '#a3e66c',
        text: '#000000',
        textSecondary: '#ffffff',
        background: '#ffffff',
        backgroundSecondary: '#dcdcdc',
        border: '#aaaaaa',
        error: '#ff3b3b',
        success: '#4acc4a',
        info: '#b5b5ff',
    },
    ...globalValues,
})

/**
 * An object representing the configuration for a dark theme.
 *
 * @type {DefaultTheme}
 * @property {string} mode - The theme mode, set to 'dark'.
 * @property {Object} colors - The color palette used in the dark theme.
 * @property {string} colors.main - The main color used in the theme.
 * @property {string} colors.secondary - The secondary color used in the theme.
 * @property {string} colors.text - The primary text color.
 * @property {string} colors.textSecondary - The secondary text color.
 * @property {string} colors.background - The primary background color.
 * @property {string} colors.backgroundSecondary - The secondary background color.
 * @property {string} colors.border - The border color.
 * @property {string} colors.error - The color used to indicate errors.
 * @property {string} colors.success - The color used to indicate success.
 * @property {string} colors.info - The color used to present informational messages.
 * @property {Object} globalValues - Other global theme configuration values.
 */
export const darkTheme: DefaultTheme = Object.freeze({
    mode: 'dark',
    colors: {
        main: '#8e1cde',
        secondary: '#a3e66c',
        text: '#ffffff',
        textSecondary: '#000000',
        background: '#282828',
        backgroundSecondary: '#464646',
        border: '#646464',
        error: '#ff6464',
        success: '#64be64',
        info: '#b5b5ff',
    },
    ...globalValues,
})
