// global $
import Layout from '../lib/layout';

export default class HeaderMiddle extends Layout {
    constructor() {
        super();

        this.$el = $('#ctl00_HeaderMiddle_pnlContentContainerData');
        this.$logoContainer = $('#ctl00_HeaderMiddle_Content_111_pnlContentData');
        this.$storeHoursContainer = $('#ctl00_HeaderMiddle_Content_114_pnlContentData');
        this.$wishlistCartButtonsContainer = $('#ctl00_HeaderMiddle_Content_112_pnlContentData');
        this.$shoppingCartButton = $('#trg_slidingcart_a');

        this.$movableElements = [
            this.$logoContainer,
            this.$wishlistCartButtonsContainer,
            this.$storeHoursContainer
        ]
    }

    renderCartButton() {
        this.$shoppingCartButton.find('#ctl00_HeaderTop_Content_3_lvTop_imgCart').remove();

        const labelContent = this.$shoppingCartButton.html();

        this.$shoppingCartButton
            .html('')
            .prepend('<span class="icon"></span>')
            .append(`<span class="label"><span class="label-text">MY CART</span>${labelContent}</span>`);

        this.$shoppingCartButton.appendTo(this.$wishlistCartButtonsContainer);
    }

    render() {
        super.render();
        this.renderCartButton();
    }
}