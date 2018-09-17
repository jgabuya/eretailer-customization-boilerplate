import $ from 'jquery'
import createRow from './create-row'

describe('#createRow()', () => {
    beforeAll(() => {
        window.$ = $
    })

    it('creates an html row (jQuery DOM object)', () => {
        const $el = createRow('mt-3')

        expect($el.is('div')).toBe(true)
        expect($el.hasClass('row mt-3')).toBe(true)        
    })
})