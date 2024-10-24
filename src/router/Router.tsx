import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import ErrorPage from 'pages/ErrorPage'
import MainLayout from 'layout/MainLayout'

/**
 * Router configuration for the application.
 *
 * This variable sets up the routing structure using `createBrowserRouter` from the router library.
 * It defines the main layout, error handling component, and the child routes.
 *
 * - The main layout component is specified by the `element` property.
 * - The `errorElement` property defines the component to be displayed in case of routing errors.
 * - The `children` array holds the route configurations, including their components.
 */
const Router = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: lazy(() => import('../pages/HomePage')),
            },
        ],
    },
])

export default Router
