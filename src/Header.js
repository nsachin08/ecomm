import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import Navbar from "./Navbar.js";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { useStateValue } from "./StateProvider";

function Header({ setsearchTerm }) {
  const [{ basket }, dispatch] = useStateValue();

  const getcount = (basket) => {
    let count = 0;
    basket.map((item) => {
      count += item.quantity;
    });
    return count;
  };

  const nameForm = useRef(null);
  const history = useNavigate();

  const search = () => {
    const q = nameForm.current.value;
    console.log(q);
    setsearchTerm(q);
    var query = `/search/${q}`;
    history(query);
  };

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__name">
          <Link to="/" className="header__nametext">
            Name
          </Link>
        </div>
        <div className="header__search">
          <label aria-label="Search Box">
            <input
              ref={nameForm}
              name={"search"}
              className="header__searchInput"
            ></input>
            <button
              className="header__searchbutton"
              onClick={search}
              aria-label="Search Button"
            >
              <FaSearch />
            </button>
          </label>
        </div>
        <div className="header__checkout">
          <Link to="/cart" aria-label="Search Icon">
            <FaCartPlus className="cart__icon" />
          </Link>

          <span className="header__basketCount">
            {basket ? getcount(basket) : 0}
          </span>
        </div>
      </div>
      <div className="header__nav">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
