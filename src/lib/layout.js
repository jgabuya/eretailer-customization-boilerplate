// global $
import config from '../config';
import { createElement } from './util';

class Layout {
    constructor($el, $movableElements, $isFluid = false) {
        this.$el = $el;
        this.$movableElements = $movableElements;
        this.isFluid = $isFluid;
    }

    addContainer() {
        const containerClassname = (this.isFluid)? config.CONTAINER_FLUID_CLASSNAME : config.CONTAINER_CLASSNAME;

        this.$container = createElement('div', containerClassname);
        this.$el.prepend(this.$container);
    }

    moveElementsToContainer() {
        this.$movableElements.forEach(($item) => {
            $item.appendTo(this.$container);
        });
    }

    render() {
        this.addContainer();
        this.moveElementsToContainer();
    }
}

export default Layout;