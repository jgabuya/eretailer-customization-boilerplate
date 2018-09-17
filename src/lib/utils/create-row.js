// global $
import createElement from './create-element'

/**
 * Creates a new bootstrap row
 * @param classNames (space-separated strings)
 * @returns {void|jQuery}
 */
export default function createRow(classNames = '') {
    return createElement('div', `row ${classNames}`)
}