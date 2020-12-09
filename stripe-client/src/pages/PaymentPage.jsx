import React from "react";
import StripeForm from "../components/StripeForm";
import { getAuthStatus } from "../utils/api";

function PaymentPage({ history }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getAuthStatus()
      .then(({ data }) => {
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        history.push("/login");
        setLoading(false);
      });
  });

  return !loading ? (
    <div>
      <h1>Payment</h1>
      <StripeForm />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default PaymentPage;
