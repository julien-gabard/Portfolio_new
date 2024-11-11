import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

import Loading from 'components/Loading'
import { StyledMain } from 'styles/components/Main'

const Main = () => (
    <StyledMain>
        <Suspense fallback={<Loading />}>
            <Outlet />
        </Suspense>
    </StyledMain>
)

export default Main
