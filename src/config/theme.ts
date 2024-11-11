import { DefaultTheme } from 'styled-components'

import { Device } from 'types/theme'

export const commonValues = {
    blur: '10px',
    borderRadius: '2px',
    maxWidth: '1440px',
    breakpoint: {
        values: { xs: 0, sm: 425, md: 768, lg: 1024, xl: 1440 },
        unit: 'px',
        up(device: Device | number) {
            return `only screen and (min-width: ${typeof device === 'number' ? device : this.values[device]}${this.unit})`
        },
        down(device: Device | number) {
            return `only screen and (max-width: ${typeof device === 'number' ? device : this.values[device]}${this.unit})`
        },
        between(start: Device | number, end: Device | number) {
            return `only screen and (min-width: ${typeof start === 'number' ? start : this.values[start]}${this.unit}) and (max-width: ${typeof end === 'number' ? end : this.values[end]}${this.unit})`
        },
    },
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

const lightTheme: DefaultTheme = {
    mode: 'light',
    colors: {
        main: '#587498',
        secondary: '#d2bea0',
        text: '#000000',
        textSecondary: '#ffffff',
        background: '#ffffff',
        backgroundSecondary: '#dcdcdc',
        border: '#aaaaaa',
        error: '#ff3b3b',
        success: '#4acc4a',
        info: '#b5b5ff',
    },
    ...commonValues,
}

const darkTheme: DefaultTheme = {
    mode: 'dark',
    colors: {
        main: '#587498',
        secondary: '#d2bea0',
        text: '#ffffff',
        textSecondary: '#000000',
        background: '#282828',
        backgroundSecondary: '#464646',
        border: '#646464',
        error: '#ff6464',
        success: '#64be64',
        info: '#b5b5ff',
    },
    ...commonValues,
}

export const defaultTheme = (isDarkTheme: boolean): DefaultTheme => {
    if (isDarkTheme) {
        return darkTheme
    }

    return lightTheme
}
