import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import Navbar from "./Navbar.js";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

function Header({ setsearchTerm }) {
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
          <label>
            <input
              ref={nameForm}
              name={"search"}
              className="header__searchInput"
            ></input>
            <button className="header__searchbutton" onClick={search}>
              Search
            </button>
          </label>
        </div>
      </div>
      <div className="header__nav">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
