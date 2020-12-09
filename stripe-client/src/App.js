import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact={true} component={LoginPage} />
          <Route path="/payment" exact={true} component={PaymentPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
