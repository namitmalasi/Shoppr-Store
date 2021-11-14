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
import LoginSignUp from "./component/User/LoginSignUp.js";
import { loadUser } from "./actions/userAction.js";
import store from "./store";
import UserOptions from "./component/layout/Header/UserOption.js";
import { useSelector } from "react-redux";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Route path="/" component={Home} exact />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/products" component={Products} exact />
      <Route path="/products/:keyword" component={Products} />
      <Route path="/search" component={Search} exact />
      <Route path="/login" component={LoginSignUp} exact />

      <Footer />
    </Router>
  );
}

export default App;
