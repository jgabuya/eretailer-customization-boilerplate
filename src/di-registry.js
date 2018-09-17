import IOCContainer from './lib/ioc-container'

import HeaderTop from './layout/header-top'
import HeaderMiddle from './layout/header-middle'
import HeaderBottom from './layout/header-bottom'
import FooterTop from './layout/footer-top'
import FooterMiddle from './layout/footer-middle'
import FooterBottom from './layout/footer-bottom'
import content from './lib/resolve-content'

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
container.register(constants.CONTENT, new content.component(content.props))

export default container