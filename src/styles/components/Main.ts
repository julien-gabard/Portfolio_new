import styled from 'styled-components'

export const StyledMain = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(2)};
`
