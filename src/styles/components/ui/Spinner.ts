import styled, { keyframes } from 'styled-components'

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const StyledSpinner = styled.span`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid ${({ theme }) => theme.colors.text};
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
`
