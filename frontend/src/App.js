import React from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";
import Home from "./component/Home/Home.js";
import "./App.css";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/products" component={Products} exact />
      <Route path="/products/:keyword" component={Products} />
      <Route path="/search" component={Search} exact />

      <Footer />
    </Router>
  );
}

export default App;
