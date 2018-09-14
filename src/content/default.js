// global $
import Layout from '../lib/layout';

class Default extends Layout {
    constructor(props) {
        super(props);
    }

    render() {
        super.render();

        console.log('This page should render 404, or there\'s no handler for this page yet.');
    }
}

export default Default;