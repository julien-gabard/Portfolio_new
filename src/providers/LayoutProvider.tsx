import { FC, ReactNode, useCallback, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from 'config/theme'
import getIsDarkTheme from 'helpers/getIsDarkTheme'
import GlobalStyles from 'styles/GlobalStyles'
import LayoutContext from 'contexts/LayoutContext'

export interface LayoutProviderProps {
    children?: ReactNode
}

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
            <ThemeProvider theme={defaultTheme(isDarkTheme)}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </LayoutContext.Provider>
    )
}

export default LayoutProvider
