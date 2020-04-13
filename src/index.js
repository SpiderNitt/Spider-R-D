import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Blogs from "./Blogs/blogPage";
import HomePage from "./HomePage/homepage";
import Projects from "./Projects/projects";
import Members from "./Members/new_members";
import NotFound from "./NotFound/redirectPage";
import Inductions from "./Inductions/inductions";

const routing = (
  <Router>
    <App />
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/sop" component={Inductions} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
