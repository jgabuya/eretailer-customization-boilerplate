// global $
import di from './di-registry'
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

// import styles
import './styles/app.scss'

// render customizations
$(document).ready(() => {
    di.get(GLOBAL).render()
    di.get(HEADER_TOP).render()
    di.get(HEADER_MIDDLE).render()
    di.get(HEADER_BOTTOM).render()
    di.get(FOOTER_TOP).render()
    di.get(FOOTER_MIDDLE).render()
    di.get(FOOTER_BOTTOM).render()
    di.get(CONTENT).render()
})