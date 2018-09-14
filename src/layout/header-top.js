// global $
import Layout from '../lib/layout';

export default class HeaderTop extends Layout {
    constructor() {
        super();

        // cache selectors
        this.$el = $('#ctl00_HeaderTop_pnlContentContainerData');
        this.$mainMenuContainer = $('#ctl00_HeaderTop_Content_23_pnlContentContainerData');
        this.$loginMenuContainer = $('#ctl00_HeaderTop_Content_3_Content_25_pnlContentData');

        this.$movableElements = [
            this.$mainMenuContainer,
            this.$loginMenuContainer,
            this.$el.find('.socials'),
            this.$el.find('.welcome-msg')
        ]
    }

    render() {
        super.render();
    }
}