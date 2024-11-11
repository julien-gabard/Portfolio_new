import 'styled-components'

import { BreakpointObject, ColorsObject, TypographyObject } from 'types/theme'

declare module 'styled-components' {
    export interface DefaultTheme {
        mode: 'light' | 'dark'
        colors: ColorsObject
        spacing: (...values: [number, number?, number?, number?]) => string
        typography: TypographyObject
        blur: string
        borderRadius: string
        maxWidth: string
        breakpoint: BreakpointObject
    }
}
