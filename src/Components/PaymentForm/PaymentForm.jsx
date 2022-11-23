import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { Link } from "react-router-dom";
import "./paymentform.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#fff",
      color: "#fff",
      fontWeight: 600,
      fontSize: "0.9rem",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder:": { color: "#87bbfd" },
    },
    invaild: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:5000/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Sucessful Payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <CardElement options={CARD_OPTIONS} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              variant="contained"
              // type="submit"
              className="buy_btn auth_btn w-100 place_btn"
            >
              <Link to="/SuccessPage" color="#000">
                Place on order
              </Link>
            </button>
          </div>
        </form>
      ) : (
        <h3>Sucessfull</h3>
      )}
    </>
  );
};

export default PaymentForm;
