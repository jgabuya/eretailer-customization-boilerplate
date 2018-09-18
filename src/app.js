// global $
import di from './di-registry'
import constants from './constants'

// import styles
import './styles/app.scss'

// render customizations
$(document).ready(() => {
    di.get(constants.GLOBAL).render()
    di.get(constants.HEADER_TOP).render()
    di.get(constants.HEADER_MIDDLE).render()
    di.get(constants.HEADER_BOTTOM).render()
    di.get(constants.FOOTER_TOP).render()
    di.get(constants.FOOTER_MIDDLE).render()
    di.get(constants.FOOTER_BOTTOM).render()
    di.get(constants.CONTENT).render()
})