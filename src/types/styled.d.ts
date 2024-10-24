import 'styled-components'

export type Device = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

declare module 'styled-components' {
    export interface DefaultTheme {
        mode: 'dark' | 'light'
        blur: string
        borderRadius: string
        breakpoint: {
            values: {
                xs: number
                sm: number
                md: number
                lg: number
                xl: number
            }
            unit: string
            up: (device: Device | number) => string
            down: (device: Device | number) => string
            between: (start: Device | number, end: Device | number) => string
        }
        colors: {
            main: string
            secondary: string
            text: string
            textSecondary: string
            background: string
            backgroundSecondary: string
            border: string
            error: string
            success: string
            info: string
        }
        maxWidth: string
        /**
         * Generates a spacing string for CSS margin or padding properties.
         *
         * @param values - Up to four numerical values representing the spacing multipliers.
         *                               Each value is multiplied by 8 to determine the corresponding spacing in pixels.
         * @returns A string with up to four spacing values in the format of "Xpx Ypx Zpx Wpx".
         */
        spacing: (...values: [number, number?, number?, number?]) => string
        typography: {
            htmlFontSize: string
            h1: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            h2: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            h3: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            h4: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            h5: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            h6: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            p: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
            span: {
                fontFamily: string
                fontSize: string
                fontWeight: string | number
            }
        }
    }
}
