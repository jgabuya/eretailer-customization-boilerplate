// global $
import config from '../config';
import { createElement } from './util';

class Layout {
    constructor(props) {
        this.$el = props.$el;
        this.$movableElements = props.$movableElements;
        this.isFluid = props.isFluid;
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