import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Body} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
