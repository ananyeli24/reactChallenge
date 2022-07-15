import React from "react";
import About from "./About";
import Product from "/.Product";
import Nav from "./Navigationbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/product" component={Product} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home page</h1>;
}
