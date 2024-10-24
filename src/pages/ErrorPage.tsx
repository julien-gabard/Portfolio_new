import { ReactNode } from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError() as Record<string, ReactNode>

    console.error(error)

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error?.status}</p>
            <p>
                <i>{error?.statusText ?? error?.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage
