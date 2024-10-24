import {
    createContext,
    FC,
    ReactNode,
    useCallback,
    useMemo,
    useState,
} from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from 'config/theme'
import getIsDarkTheme from 'helpers/getIsDarkTheme'
import GlobalStyles from 'styles/GlobalStyles'

export interface LayoutProviderProps {
    children?: ReactNode
}

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

export const LayoutContext = createContext(layoutContextDefaultValue)

const LayoutProvider: FC<LayoutProviderProps> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getIsDarkTheme())

    const toggleTheme = useCallback(() => {
        setIsDarkTheme(prevState => {
            localStorage.setItem('isDarkTheme', JSON.stringify(!prevState))

            return !prevState
        })
    }, [])

    const value = useMemo(
        () => ({
            isDarkTheme,
            toggleTheme,
        }),
        [isDarkTheme, toggleTheme],
    )

    return (
        <LayoutContext.Provider value={value}>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </LayoutContext.Provider>
    )
}

export default LayoutProvider
