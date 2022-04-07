import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import home from "../pages/home";
import products from "../pages/products";
import services from "../pages/services";
function rou() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={home} />
                <Route exact path="/products" component={products} />
                <Route exact path="/services" component={services} />
                <Redirect to="/home" />
            </Switch>
        </BrowserRouter>
    );
}
export default rou;