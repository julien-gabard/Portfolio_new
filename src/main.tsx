import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import LayoutProvider from 'contexts/LayoutContext'
import Router from 'router/Router'

import 'config/i18n'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <LayoutProvider>
                <RouterProvider router={Router} />
            </LayoutProvider>
        </Suspense>
    </StrictMode>,
)
