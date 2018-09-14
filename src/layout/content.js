// global $
import Home from '../content/home';
import Login from '../content/login';
import Register from '../content/register';
import Category from '../content/category';
import AllCategories from '../content/all-categories';
import Product from '../content/product';
import ShoppingCart from '../content/shopping-cart';
import Checkout from '../content/checkout';
import GuestCheckout from '../content/guest-checkout';
import MyAccount from '../content/my-account';
import SearchResults from '../content/search-results';
import Wishlist from '../content/wishlist';
import Contact from '../content/contact';
import InfoPage from '../content/info-page';
import Default from '../content/default';

const $body = $('body');
let content;

// determine content based on body class
if ($body.hasClass('EOTHERS')) {
    if ($body.hasClass('EPHOME')) {
        content = Home;
    } else if ($body.hasClass('EPLOGIN')) {
        content = Login;
    } else if ($body.hasClass('EPREGISTER')) {
        content = Register;
    } else if ($body.hasClass('EPALLCATEGORIES')) {
        content = AllCategories;
    } else if ($body.hasClass('EPSHOPPINGCART')) {
        content = ShoppingCart;
    } else if ($body.hasClass('EPWISHLIST')) {
        content = Wishlist;
    } else if ($body.hasClass('EPGUESTCHECKOUT')) {
        content = GuestCheckout;
    } else if ($body.hasClass('EPCHECKOUT')) {
        content = Checkout;
    } else if ($body.hasClass('EPMYACCOUNT')) {
        content = MyAccount;
    } else if ($body.hasClass('EPCONTACTFORM')) {
        content = Contact;
    } else {
        content = Default;
    }
} else if ($body.hasClass('ECATEGORY')) {
    content = Category;
} else if ($body.hasClass('ESTYLE')) {
    content = Product;
} else if ($body.hasClass('ESEARCH')) {
    content = SearchResults;
} else if ($body.hasClass('EPAGE')) {
    content = InfoPage;
}

export default content;