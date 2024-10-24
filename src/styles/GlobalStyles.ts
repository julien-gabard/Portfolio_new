import { createGlobalStyle } from 'styled-components'

/**
 * GlobalStyles is a styled-component that applies global styles to the application.
 * It is created using the `createGlobalStyle` function from styled-components.
 *
 * The styles set various properties on the :root selector, including:
 * - color-scheme: Sets the color scheme based on the theme's mode.
 * - background-color and color: Define the background and text colors based on the theme.
 * - font-family: Specifies the primary and fallback fonts.
 * - font-synthesis, text-rendering, -webkit-font-smoothing, -moz-osx-font-smoothing:
 *   Improve font rendering across different platforms.
 *
 * Global styles target the following specific elements:
 * - * (all elements): Sets box-sizing to border-box and removes default margin and padding.
 * - html: Adjusts the base font size based on the theme's typography settings.
 * - body: Sets the width and height to dynamic viewport dimensions (dvw and dvh).
 * - body:has(#carousel): Prevents scrolling when the body contains an element with the ID "carousel".
 */
const GlobalStyles = createGlobalStyle`
    :root {
        color-scheme: ${({ theme }) => theme.mode};
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: ${({ theme }) => theme.typography.htmlFontSize};
    }

    body {
        /* dvw = dynamical viewport width */
        width: 100dvw;
        /* dvh = dynamical viewport height */
        height: 100dvh;
    }
    
    //body:has(#carousel) {
    //    overflow: hidden;
    //}
    
    #root {
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }
`

export default GlobalStyles
