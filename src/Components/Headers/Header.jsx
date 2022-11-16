import React, { useRef, useEffect } from "react";
import "./header.css";
import { motion } from "framer-motion";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase_config";
import { toast } from "react-toastify";

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);
  const showLogin = useRef(null);

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("Furniture-Store/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show_profileActions");

  const show_login = () => {
    showLogin.current.classList.toggle("profile_actions");
  };

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  const navigateToCart = () => {
    navigate("Furniture-Store/cart");
  };
  const navigateToHome = () => {
    navigate("Furniture-Store/home");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1 className="logo_name" onClick={navigateToHome}>
                  Multimart
                </h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                <li className="nav_item">
                  <NavLink
                    to="Furniture-Store/home"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : " "
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="Furniture-Store/shop"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    to="Furniture-Store/cart"
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : ""
                    }
                  >
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav_icons">
              <span className="fav_icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>

              <span className="cart_icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=""
                  onClick={show_login}
                />
                <div
                  className="profile_actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="join_btn">
                      <span>
                        <Link to="Furniture-Store/signup">Signup</Link>
                      </span>
                      {/* <span>
                        <Link to="/login">Login</Link>
                      </span> */}
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
