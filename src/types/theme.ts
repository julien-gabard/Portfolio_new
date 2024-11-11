import { CSSObject } from 'styled-components'

export type Device = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface BreakpointValuesObject {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
}

export interface BreakpointObject {
    values: BreakpointValuesObject
    unit: string
    up: (device: Device | number) => string
    down: (device: Device | number) => string
    between: (start: Device | number, end: Device | number) => string
}

export interface TypographyObject {
    htmlFontSize: string
    h1: CSSObject
    h2: CSSObject
    h3: CSSObject
    h4: CSSObject
    h5: CSSObject
    h6: CSSObject
    p: CSSObject
    span: CSSObject
}

export interface ColorsObject {
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
