import React from "react";
import { Switch, Route } from "react-router-dom";

/**Components */
import Header from "../components/header/header.component";
import HomePage from "../pages/homepage/homepage.component";
import ShopPage from "../pages/shop/shop.component";

const AppRouter = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" component={HomePage} exact />
        {/* <Route path="/hats" component={} /> */}
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default AppRouter;
