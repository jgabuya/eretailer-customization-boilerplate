// global $
import {
    CONTENT_OTHERS_CLASSNAME,
    CONTENT_HOME_CLASSNAME,
    CONTENT_LOGIN_CLASSNAME,
    CONTENT_REGISTER_CLASSNAME,
    CONTENT_ALL_CATEGORIES_CLASSNAME,
    CONTENT_CATEGORY_CLASSNAME,
    CONTENT_SHOPPING_CART_CLASSNAME,
    CONTENT_WISHLIST_CLASSNAME,
    CONTENT_GUEST_CHECKOUT_CLASSNAME,
    CONTENT_CHECKOUT_CLASSNAME,
    CONTENT_MY_ACCOUNT_CLASSNAME,
    CONTENT_CONTACT_FORM_CLASSNAME,
    CONTENT_PRODUCT_CLASSNAME,
    CONTENT_SEARCH_CLASSNAME,
    CONTENT_INFO_PAGE_CLASSNAME
} from '../constants'
import config from '../config'

import Home from '../content/home'
import Login from '../content/login'
import Register from '../content/register'
import Category from '../content/category'
import AllCategories from '../content/all-categories'
import Product from '../content/product'
import ShoppingCart from '../content/shopping-cart'
import Checkout from '../content/checkout'
import GuestCheckout from '../content/guest-checkout'
import MyAccount from '../content/my-account'
import SearchResults from '../content/search-results'
import Wishlist from '../content/wishlist'
import Contact from '../content/contact'
import InfoPage from '../content/info-page'
import Default from '../content/default'

// determine content based on body class
export default function ($body) {
    const content = {}

    if ($body.hasClass(CONTENT_OTHERS_CLASSNAME)) {
        if ($body.hasClass(CONTENT_HOME_CLASSNAME)) {
            content.component = Home
            content.props = config.CONTENT_HOME_PROPS
        } else if ($body.hasClass(CONTENT_LOGIN_CLASSNAME)) {
            content.component = Login
            content.props = config.CONTENT_LOGIN_PROPS
        } else if ($body.hasClass(CONTENT_REGISTER_CLASSNAME)) {
            content.component = Register
            content.props = config.CONTENT_REGISTER_PROPS
        } else if ($body.hasClass(CONTENT_ALL_CATEGORIES_CLASSNAME)) {
            content.component = AllCategories
            content.props = config.CONTENT_ALL_CATEGORIES_PROPS
        } else if ($body.hasClass(CONTENT_SHOPPING_CART_CLASSNAME)) {
            content.component = ShoppingCart
            content.props = config.CONTENT_SHOPPING_CART_PROPS
        } else if ($body.hasClass(CONTENT_WISHLIST_CLASSNAME)) {
            content.component = Wishlist
            content.props = config.CONTENT_WISHLIST_PROPS
        } else if ($body.hasClass(CONTENT_GUEST_CHECKOUT_CLASSNAME)) {
            content.component = GuestCheckout
            content.props = config.CONTENT_GUEST_CHECKOUT_PROPS
        } else if ($body.hasClass(CONTENT_CHECKOUT_CLASSNAME)) {
            content.component = Checkout
            content.props = config.CONTENT_CHECKOUT_PROPS
        } else if ($body.hasClass(CONTENT_MY_ACCOUNT_CLASSNAME)) {
            content.component = MyAccount
            content.props = config.CONTENT_MY_ACCOUNT_PROPS
        } else if ($body.hasClass(CONTENT_CONTACT_FORM_CLASSNAME)) {
            content.component = Contact
            content.props = config.CONTENT_CONTACT_FORM_PROPS
        } else {
            content.component = Default
            content.props = config.CONTENT_DEFAULT_PROPS
        }
    } else if ($body.hasClass(CONTENT_CATEGORY_CLASSNAME)) {
        content.component = Category
        content.props = config.CONTENT_CATEGORY_PROPS
    } else if ($body.hasClass(CONTENT_PRODUCT_CLASSNAME)) {
        content.component = Product
        content.props = config.CONTENT_PRODUCT_PROPS
    } else if ($body.hasClass(CONTENT_SEARCH_CLASSNAME)) {
        content.component = SearchResults
        content.props = config.CONTENT_SEARCH_PROPS
    } else if ($body.hasClass(CONTENT_INFO_PAGE_CLASSNAME)) {
        content.component = InfoPage
        content.props = config.CONTENT_INFO_PAGE_PROPS
    }

    return content
}