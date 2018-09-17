// global $
import constants from '../constants'
import di from '../di-registry'

const $body = $('body')
let content

// determine content based on body class
if ($body.hasClass(constants.CONTENT_OTHERS_CLASSNAME)) {
    if ($body.hasClass(constants.CONTENT_HOME_CLASSNAME)) {
        content = di.get(constants.CONTENT_HOME)
    } else if ($body.hasClass(constants.CONTENT_LOGIN_CLASSNAME)) {
        content = di.get(constants.CONTENT_LOGIN)
    } else if ($body.hasClass(constants.CONTENT_REGISTER_CLASSNAME)) {
        content = di.get(constants.CONTENT_REGISTER)
    } else if ($body.hasClass(constants.CONTENT_ALL_CATEGORIES_CLASSNAME)) {
        content = di.get(constants.CONTENT_ALL_CATEGORIES)
    } else if ($body.hasClass(constants.CONTENT_SHOPPING_CART_CLASSNAME)) {
        content = di.get(constants.CONTENT_SHOPPING_CART)
    } else if ($body.hasClass(constants.CONTENT_WISHLIST_CLASSNAME)) {
        content = di.get(constants.CONTENT_WISHLIST)
    } else if ($body.hasClass(constants.CONTENT_GUEST_CHECKOUT_CLASSNAME)) {
        content = di.get(constants.CONTENT_GUEST_CHECKOUT)
    } else if ($body.hasClass(constants.CONTENT_CHECKOUT_CLASSNAME)) {
        content = di.get(constants.CONTENT_CHECKOUT)
    } else if ($body.hasClass(constants.CONTENT_MY_ACCOUNT_CLASSNAME)) {
        content = di.get(constants.CONTENT_MY_ACCOUNT)
    } else if ($body.hasClass(constants.CONTENT_CONTACT_FORM_CLASSNAME)) {
        content = di.get(constants.CONTENT_CONTACT_FORM)
    } else {
        content = di.get(constants.CONTENT_NOT_FOUND)
    }
} else if ($body.hasClass(constants.CONTENT_CATEGORY_CLASSNAME)) {
    content = di.get(constants.CONTENT_CATEGORY)
} else if ($body.hasClass(constants.CONTENT_PRODUCT_CLASSNAME)) {
    content = di.get(constants.CONTENT_PRODUCT)
} else if ($body.hasClass(constants.CONTENT_SEARCH_CLASSNAME)) {
    content = di.get(constants.CONTENT_SEARCH)
} else if ($body.hasClass(constants.CONTENT_INFO_PAGE_CLASSNAME)) {
    content = di.get(constants.CONTENT_INFO_PAGE)
}

export default content