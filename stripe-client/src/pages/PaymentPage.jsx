import React from "react";
import { getAuthStatus } from "../utils/api";

function PaymentPage() {
  React.useEffect(() => {
    getAuthStatus()
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div>Payment Page</div>;
}

export default PaymentPage;
