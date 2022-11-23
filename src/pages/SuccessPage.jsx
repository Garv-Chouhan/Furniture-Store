import React, { useEffect } from "react";
import Helmet from "../Components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";
import "../styles/successpage.css";
import { Col, Container, Row } from "reactstrap";
import { runfireworks } from "../Components/fireworks";

const SuccessPage = () => {
  useEffect(() => {
    localStorage.clear();
    runfireworks();
  }, []);
  return (
    <Helmet title={"SuccessPage"}>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" md="6" className="text-center">
              <div className="success">
                <p className="icon mt-30">
                  <BsBagCheckFill color="green" size={30} className="mb-2" />
                </p>
                <h5 className="thank">Thank you for your order!</h5>
                <p className="email-msg">
                  Check your email inbox for the receipt.
                </p>
                <p className="description">
                  if you have any question, please email{" "}
                  <a href="mailto:garvchouhan001@gmail.com">
                    garvchouhan001@gmail
                  </a>
                </p>
                <button type="button" width="300px" className="buy_btn">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SuccessPage;
