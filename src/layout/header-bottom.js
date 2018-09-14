// global $
import { detect } from 'detect-browser';
import Layout from '../lib/layout';

export default class HeaderBottom extends Layout {
    constructor() {
        super();

        this.$el = $('#ctl00_HeaderBottom_pnlContentContainerData');
        this.$categoriesContainer = $('#ctl00_HeaderBottom_Content_115_pnlContentData');
        this.$searchContainer = $('#ctl00_HeaderBottom_Content_116_pnlContentData');

        this.$movableElements = [
            this.$categoriesContainer,
            this.$searchContainer
        ]
    }

    cleanUpSearchBar() {
        this.$searchContainer.html(this.$searchContainer.html().replace('Search:', ''));
    }

    addSearchbarFirefoxClass() {
        const browser = detect();
        const firefox = 'firefox';

        if (browser && browser.name === firefox) {
            this.$searchContainer.find('input').addClass(firefox);
        }
    }

    render() {
        super.render();

        this.cleanUpSearchBar();
        this.addSearchbarFirefoxClass();
    }
}