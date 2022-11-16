import React, { useState, useEffect } from "react";
import Helmet from "../Components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../Components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../Components/UI/Clock";

function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setbestSalesProducts] = useState([]);
  const [mobileProducts, setmobileProducts] = useState([]);
  const [watchProducts, setWatchProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);

  useEffect(() => {
    const filterTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filterBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filterMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filterWatchProducts = products.filter(
      (item) => item.category === "watch"
    );
    const filterWireleesProducts = products.filter(
      (item) => item.category === "wireless"
    );

    setTrendingProducts(filterTrendingProducts);
    setbestSalesProducts(filterBestSalesProducts);
    setmobileProducts(filterMobileProducts);
    setWatchProducts(filterWatchProducts);
    setWirelessProducts(filterWireleesProducts);
  }, []);

  const year = new Date().getFullYear();

  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2>Make Your Interior Minimalistics & Modern</h2>
                <p>
                  Good paragraphs begin with a topic sentence that briefly
                  explains what the paragraph is about. Next come a few
                  sentences for development and support, elaborating on the
                  topic with more detail. Paragraphs end with a conclusion
                  sentence that summarizes the topic or presents one final piece
                  of support to wrap up.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/Furniture-Store/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt=""></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>

            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>

            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/Furniture-Store/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="12" className="text-end timer_img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Popular Category</h2>
            </Col>
            <ProductList data={watchProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
