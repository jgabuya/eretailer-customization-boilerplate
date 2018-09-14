import HeaderTop from './layout/header-top';
import HeaderMiddle from './layout/header-middle';
import HeaderBottom from './layout/header-bottom';
import FooterTop from './layout/footer-top';
import Content from './layout/content';

// import styles
import './styles/app.scss';

// render customizations
new HeaderTop().render();
new HeaderMiddle().render();
new HeaderBottom().render();
new Content().render();
new FooterTop().render();