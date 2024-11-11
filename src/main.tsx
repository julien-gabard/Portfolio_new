import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import LayoutProvider from 'providers/LayoutProvider'
import Loading from 'components/Loading'
import Router from 'router/Router'

import 'config/i18n'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LayoutProvider>
            <Suspense fallback={<Loading />}>
                <RouterProvider
                    router={Router}
                    future={{ v7_startTransition: true }}
                />
            </Suspense>
        </LayoutProvider>
    </StrictMode>,
)
