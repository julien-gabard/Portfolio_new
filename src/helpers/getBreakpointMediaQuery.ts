import { commonValues } from 'config/theme'
import { Device } from 'types/theme'

const { breakpoint } = commonValues

/**
 * Generates a media query string based on the provided device size.
 *
 * @param {Device} device - The size of the device, typically one of 'xs', 'sm', 'md', 'lg', or 'xl'.
 * @return {string} The media query string corresponding to the provided device size.
 *
 * The function handles the following cases:
 * - 'xs': Returns a media query string for extra small devices up to small devices.
 * - 'sm', 'md', 'lg': Returns a media query string for the specified device size and below.
 * - 'xl': Returns a media query string for extra large devices and above.
 * - Default: Returns an empty string if the device size is not recognized.
 */
const getBreakpointMediaQuery = (device: Device): string => {
    switch (device) {
        case 'xs':
            return breakpoint.between(device, 'sm')
        case 'sm':
        case 'md':
        case 'lg':
            return breakpoint.down(device)
        case 'xl':
            return breakpoint.up('xl')
        default:
            return ''
    }
}

export default getBreakpointMediaQuery
