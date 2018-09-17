// global $

/**
 * Creates a new jQuery element obj
 * @param el
 * @param classNames
 * @param content
 * @returns {void|jQuery}
 */
export default function createElement(el, classNames = '', content = '') {
    return $(`<${el}>`).addClass(classNames).append(content)
}