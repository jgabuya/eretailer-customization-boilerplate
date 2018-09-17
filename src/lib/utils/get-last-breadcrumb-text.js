// global $

/**
 * Extracts the last breadcrumb element's html content from the DOM
 * @param $breadCrumbsContainer
 * @returns {*}
 */
export default function getLastBreadcrumbText($breadCrumbsContainer) {
    try {
        return $breadCrumbsContainer.find('.sitemappath > span:last-child > a').html()
    } catch (err) {
        console.log(err.message)
    }
}