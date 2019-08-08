import React from "react";
import { Switch, Route } from "react-router-dom";

/**Pages */
import HomePage from "../pages/homepage/homepage.component";
import ShopPage from "../pages/shop/shop.component";
import SignInAndSignUpPage from "../pages/sign-in-and-sign-out/sign-in-and-sign-up.component";

/**Components */
import Header from "../components/header/header.component";

const AppRouter = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" component={HomePage} exact />
        {/* <Route path="/hats" component={} /> */}
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default AppRouter;
