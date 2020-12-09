import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripe = loadStripe("pk_test_tX7qfen4ofHddKN2ynJfl7X7");

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact={true} component={LoginPage} />
          <Route path="/payment" exact={true}>
            <Elements stripe={stripe}>
              <PaymentPage />
            </Elements>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
