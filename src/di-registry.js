import IOCContainer from './lib/ioc-container'

import HeaderTop from './layout/header-top'
import HeaderMiddle from './layout/header-middle'
import HeaderBottom from './layout/header-bottom'
import FooterTop from './layout/footer-top'
import FooterMiddle from './layout/footer-middle'
import FooterBottom from './layout/footer-Bottom'

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

import config from './config'
import constants from './constants'

// init IOC container
const container = new IOCContainer()

// register component instances
container.register(constants.HEADER_TOP, new HeaderTop(config.HEADER_TOP_PROPS))
container.register(constants.HEADER_MIDDLE, new HeaderMiddle(config.HEADER_MIDDLE_PROPS))
container.register(constants.HEADER_BOTTOM, new HeaderBottom(config.HEADER_BOTTOM_PROPS))
container.register(constants.FOOTER_TOP, new FooterTop(config.FOOTER_TOP_PROPS))
container.register(constants.FOOTER_MIDDLE, new FooterMiddle(config.FOOTER_MIDDLE_PROPS))
container.register(constants.FOOTER_BOTTOM, new FooterBottom(config.FOOTER_BOTTOM_PROPS))
container.register(constants.CONTENT_HOME, new Home(config.CONTENT_HOME_PROPS))
container.register(constants.CONTENT_LOGIN, new Login(config.CONTENT_LOGIN_PROPS))
container.register(constants.CONTENT_REGISTER, new Register(config.CONTENT_REGISTER_PROPS))
container.register(constants.CONTENT_ALL_CATEGORIES, new AllCategories(config.CONTENT_ALL_CATEGORIES_PROPS))
container.register(constants.CONTENT_CATEGORY, new Category(config.CONTENT_CATEGORY_PROPS))
container.register(constants.CONTENT_SHOPPING_CART, new ShoppingCart(config.CONTENT_SHOPPING_CART_PROPS))
container.register(constants.CONTENT_WISHLIST, new Wishlist(config.CONTENT_WISHLIST_PROPS))
container.register(constants.CONTENT_GUEST_CHECKOUT, new GuestCheckout(config.CONTENT_GUEST_CHECKOUT_PROPS))
container.register(constants.CONTENT_CHECKOUT, new Checkout(config.CONTENT_CHECKOUT_PROPS))
container.register(constants.CONTENT_MY_ACCOUNT, new MyAccount(config.CONTENT_MY_ACCOUNT_PROPS))
container.register(constants.CONTENT_CONTACT_FORM, new Contact(config.CONTENT_CONTACT_FORM_PROPS))
container.register(constants.CONTENT_PRODUCT, new Product(config.CONTENT_PRODUCT_PROPS))
container.register(constants.CONTENT_SEARCH, new SearchResults(config.CONTENT_SEARCH_PROPS))
container.register(constants.CONTENT_INFO_PAGE, new InfoPage(config.CONTENT_INFO_PAGE_PROPS))
container.register(constants.CONTENT_NOT_FOUND, new Default(config.CONTENT_DEFAULT_PROPS))

export default container