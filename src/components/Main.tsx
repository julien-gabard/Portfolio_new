import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

import { StyledMain } from 'styles/components/Main'

const Main = () => (
    <StyledMain>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </StyledMain>
)

export default Main
