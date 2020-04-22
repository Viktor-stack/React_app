import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Content/Home/Home";
import About from "./components/Content/About/About";
import Portfolio from "./components/Content/Portfolio/Portfolio";
import Blog from "./components/Content/Blog/Blog";
import { Route } from "react-router-dom";
import Contact from "./components/Content/Contact/Contact";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="content">
        <Header />
        <div className="content__bar">
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" render={() => <Blog />} />
          <Route path="/products" render={() => <Portfolio />} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
