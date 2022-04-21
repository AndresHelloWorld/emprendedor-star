import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import home from "../pages/home";
// import products from "../pages/products";
import services from "../pages/services";
import Create from "../pages/create";
function rou() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={home} />
                {/* <Route exact path="/products" component={products} /> */}
                <Route exact path="/services" component={services} />
                <Route exact path="/create" component={Create} />
                <Redirect to="/home" />
            </Switch>
        </BrowserRouter>
    );
}
export default rou;