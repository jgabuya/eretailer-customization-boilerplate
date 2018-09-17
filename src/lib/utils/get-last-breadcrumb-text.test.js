import $ from 'jquery'
import getLastBreadcrumbText from './get-last-breadcrumb-text'

describe('#getLastBreadcrumbText()', () => {
    beforeAll(() => {
        window.$ = $
    })

    it('extracts the last breadrcumb\'s html content', () => {
        const $el = $(`<div>
                <div class="sitemappath">
                    <span><a>text1</a></span>
                    <span><a>text2</a></span>
                    <span><a>text3</a></span>
                </div>
            </div>`)

        expect(getLastBreadcrumbText($el)).toBe('text3')             
    })
})