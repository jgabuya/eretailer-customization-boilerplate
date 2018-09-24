import IOCContainer from './lib/ioc-container'

import Global from './layout/global'
import HeaderTop from './layout/header-top'
import HeaderMiddle from './layout/header-middle'
import HeaderBottom from './layout/header-bottom'
import FooterTop from './layout/footer-top'
import FooterMiddle from './layout/footer-middle'
import FooterBottom from './layout/footer-bottom'
import resolveContent from './lib/resolve-content'

import config from './config'
import {
    GLOBAL,
    HEADER_TOP,
    HEADER_MIDDLE,
    HEADER_BOTTOM,
    FOOTER_TOP,
    FOOTER_MIDDLE,
    FOOTER_BOTTOM,
    CONTENT
} from './constants'

// Init IOC container
const container = new IOCContainer()

// init content resolver
const content = resolveContent($('body'))

// register component instances
container.register(GLOBAL, new Global())
container.register(HEADER_TOP, new HeaderTop(config.HEADER_TOP_PROPS))
container.register(HEADER_MIDDLE, new HeaderMiddle(config.HEADER_MIDDLE_PROPS))
container.register(HEADER_BOTTOM, new HeaderBottom(config.HEADER_BOTTOM_PROPS))
container.register(FOOTER_TOP, new FooterTop(config.FOOTER_TOP_PROPS))
container.register(FOOTER_MIDDLE, new FooterMiddle(config.FOOTER_MIDDLE_PROPS))
container.register(FOOTER_BOTTOM, new FooterBottom(config.FOOTER_BOTTOM_PROPS))
container.register(CONTENT, new content.component(content.props))

export default container