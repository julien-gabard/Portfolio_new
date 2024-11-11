import { createContext } from 'react'

export interface LayoutContextObject {
    isDarkTheme: boolean
    toggleTheme: () => void
}

const layoutContextDefaultValue: LayoutContextObject = {
    isDarkTheme: false,
    toggleTheme: () => {
        // Changes the state of isDarkTheme
    },
}

const LayoutContext = createContext(layoutContextDefaultValue)

export default LayoutContext
