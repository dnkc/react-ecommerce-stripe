import Homepage from "./components/Homepage";
import NotFound from "./components/NotFound";
import Shop from "./components/pages/shop/Shop";
import SingleProduct from "./components/singleproduct/SingleProduct";
import CartPage from "./components/pages/cartPage/CartPage";
import Checkout from "./components/checkout/Checkout";
import Success from "./components/checkout/stripeCheckout/Success";
import Cancelled from "./components/checkout/stripeCheckout/Cancelled";
import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/sign-in/SignIn";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/success" component={Success} />
        <Route path="/cancelled" component={Cancelled} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
