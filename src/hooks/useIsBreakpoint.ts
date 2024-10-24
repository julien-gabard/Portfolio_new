import { useCallback, useEffect, useMemo, useState } from 'react'

import { Device } from 'types/styled'
import getBreakpointMediaQuery from 'helpers/getBreakpointMediaQuery'
import getMediaQueryMatches from 'helpers/getMediaQueryMatches'
import isWindowUndefined from 'helpers/isWindowUndefined'

/**
 * Registers a change listener on a MediaQueryList object.
 *
 * @param {MediaQueryList} mediaQueryList - The MediaQueryList object to attach the listener to.
 * @param {function} listener - The callback function to execute when the media query state changes, receives a MediaQueryListEvent object.
 */
const addMediaQueryListener = (
    mediaQueryList: MediaQueryList,
    listener: (event: MediaQueryListEvent) => void,
) => {
    mediaQueryList.addEventListener('change', listener)
}

/**
 * Removes a previously added media query change listener from the specified MediaQueryList.
 *
 * @param {MediaQueryList} mediaQueryList - The MediaQueryList object to remove the listener from.
 * @param {(event: MediaQueryListEvent) => void} listener - The callback function that was previously added as a listener for changes in the MediaQueryList.
 */
const removeMediaQueryListener = (
    mediaQueryList: MediaQueryList,
    listener: (event: MediaQueryListEvent) => void,
) => {
    mediaQueryList.removeEventListener('change', listener)
}

/**
 * Custom hook to determine if the current screen size matches the specified device breakpoint.
 *
 * @param {Device} device - The device breakpoint to be matched.
 *
 * @returns {boolean} - A boolean value indicating whether the current screen size matches the given device breakpoint.
 */
const useIsBreakpoint = (device: Device): boolean => {
    const mediaQuery = useMemo(() => getBreakpointMediaQuery(device), [device])

    const [isMatches, setIsMatches] = useState<boolean>(
        getMediaQueryMatches(mediaQuery),
    )

    const handleMediaQueryChange = useCallback((event: MediaQueryListEvent) => {
        setIsMatches(event.matches)
    }, [])

    useEffect(() => {
        if (isWindowUndefined()) {
            return
        }
        const mediaQueryList = window.matchMedia(mediaQuery)

        addMediaQueryListener(mediaQueryList, handleMediaQueryChange)

        return () => {
            removeMediaQueryListener(mediaQueryList, handleMediaQueryChange)
        }
    }, [mediaQuery, handleMediaQueryChange])

    return isMatches
}

export default useIsBreakpoint
