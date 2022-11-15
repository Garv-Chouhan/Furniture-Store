import React from "react";
import { Col, Container, FormGroup, Form, Row } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PaymentForm from "../Components/PaymentForm/PaymentForm";

const PUBLIC_KEY =
  "pk_test_51Ley5mSEAz6M5zhnHP7kt9PdVTYQK7mrS3gJH50iipZm0YdSXYGwJlXuxwVPp9sm1S1p0Cdtebzf0Qdzn3anbzkM000BwbFZ9n";

const stripePromise = loadStripe(PUBLIC_KEY);

function Checkout() {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />

      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your name"></input>
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="email" placeholder="Enter your email"></input>
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="number" placeholder="Phone number"></input>
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Street address"></input>
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="City"></input>
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Postal code"></input>
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Country"></input>
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty : <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subotal : <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping : <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost : <span>${totalAmount}</span>
                </h4>
                <Elements stripe={stripePromise}>
                  <PaymentForm />
                </Elements>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Checkout;
