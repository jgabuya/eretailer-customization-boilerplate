import $ from 'jquery'
import createElement from './create-element'

describe('#createElement()', () => {
    beforeAll(() => {
        window.$ = $
    })

    it('creates a jQuery DOM object', () => {
        const $el = createElement('div', 'row mt-3', 'hello')

        expect($el.is('div')).toBe(true)
        expect($el.hasClass('row mt-3')).toBe(true)        
        expect($el.hasClass('row1')).toBe(false)
        expect($el.html()).toBe('hello')
    })
})