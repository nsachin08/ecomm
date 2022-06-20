import React, { useState, useEffect } from "react";
import ShowProduct from "./ShowProduct";

function Search() {
  const [data, setData] = useState([]);
  var q = window.location.pathname;
  var query = q.slice(8);

  useEffect(() => {
    const getProducts = async () => {
      setData([]);
      
      var url = `http://localhost:8081/search/${query}`;
      const response = await fetch(url);

        setData(await response.clone().json());
      return () => {};
    };
    getProducts();
  }, []);


  return (
    <div className="container">
      <div>
        <ShowProduct data={data}></ShowProduct>
      </div>
    </div>
  );
}

export default Search;
