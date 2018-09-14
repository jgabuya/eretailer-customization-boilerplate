// global $
import Elevator from 'elevator.js';
import Layout from '../lib/layout';

export default class FooterTop extends Layout {
    constructor() {
        super();

        this.$el = $('#ctl00_FooterTop_Content_129_pnlContentData');
        this.$contentContainer = this.$el.children('.footer').first();
        this.$btnScrollTop = $('#back-top');

        this.$movableElements = [
            this.$contentContainer
        ];
    }

    initBtnScrollTopScrollHandler() {
        $(window).scroll((e) => {
            const $self = $(e.target);

            if ($self.scrollTop() > 100) {
                this.$btnScrollTop.fadeIn();
            } else {
                this.$btnScrollTop.fadeOut();
            }
        });
    }

    initBtnScrollTopClickHandler() {
        this.$btnScrollTop.on('click', () => {
            this.elevator.elevate();
        });
    }

    initBtnScrollTop() {
        $(window).on('load', () => {
            this.elevator = new Elevator({
                element: document.querySelector(`#${this.$btnScrollTop.attr('id')}`),
                duration: 1000 // milliseconds
            });

            this.initBtnScrollTopScrollHandler();
            this.initBtnScrollTopClickHandler();
        });
    }

    insertMailchimpForm(content) {
        this.$contentContainer.find('.footer-subscribe h3').after(content);
    }

    initMailchimpForm() {
        $(document).ready(() => {
            $.get('/user/files/mailchimp-form.html', this.insertMailchimpForm.bind(this));
        });
    }

    hideKudosBranding() {
        const urls = [
            'http://www.kudos.co.nz',
            'http://www.kudos.net.au'
        ];

        $(document).ready(() => {
            urls.forEach(url => {
                $(`#bodywrapper > div > a[href="${url}"]`).parent().hide();
            });
        });
    }

    /**
     * Preloads background images
     */
    preloadImages() {
        const urls = [
            '/user/files/bullet-arrow-red.png',
            '/user/files/icon-heart-white.png',
            '/user/files/icon-cart-white.png',
            '/user/files/bullet-login-red.png'
        ];

        const generateEl = () => {
            return $('<img src="">').hide();
        };

        $(document).ready(() => {
            urls.forEach(url => {
                const $el = generateEl();

                $el.attr('src', url);
                $('body').append($el);
            });
        })
    }

    render() {
        super.render();

        this.initBtnScrollTop();
        this.initMailchimpForm();
        this.hideKudosBranding();
        this.preloadImages();
    }
}