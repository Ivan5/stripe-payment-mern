import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login" exact={true} component={LoginPage} />
        <Route path="/payment" exact={true} component={PaymentPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
