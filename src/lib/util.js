// global $

/**
 * Creates a new jQuery element obj
 * @param el
 * @param classNames
 * @param content
 * @returns {void | jQuery}
 */
export function createElement(el, classNames = '', content = '') {
    return $(`<${el}>`).addClass(classNames).append(content)
}

/**
 * Creates a new bootstrap row
 * @param classNames (space-separated strings)
 * @returns {void|jQuery}
 */
export function createRow(classNames = '') {
    return createElement('div', `row ${classNames}`)
}

/**
 * Extracts the last breadcrumb element's html content from the DOM
 * @param $breadCrumbsContainer
 * @returns {*}
 */
export function getLastBreadcrumbText($breadCrumbsContainer) {
    try {
        return $breadCrumbsContainer.find('.sitemappath > span:last-child > a').html()
    } catch (err) {
        console.log(err.message)
    }
}