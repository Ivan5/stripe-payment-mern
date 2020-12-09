import React, { useState } from "react";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { sendPaymentMethod } from "../utils/api";

function StripeForm() {
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement("card");
    const result = await stripe.createPaymentMethod({ card, type: "card" });
    if (result.error) {
      setError(result.error.message);
    } else {
      setError(null);
      console.log(result.paymentMethod);
      sendPaymentMethod({ id: result.paymentMethod.id })
        .then(({ data }) => console.log(data))
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  return (
    <div>
      {error ? <div>{error}</div> : null}
      <form onSubmit={handleSubmit}>
        <CardElement onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default StripeForm;
