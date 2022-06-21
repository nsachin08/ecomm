import React, { useState, useEffect } from "react";
import ShowProduct from "./ShowProduct";

function Search({ searchTerm }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      setData([]);

      var url = `https://sachinecomm.herokuapp.com/search/${searchTerm}`;
      console.log(url);
      const response = await fetch(url);

      setData(await response.clone().json());
      return () => {};
    };
    getProducts();
  }, [searchTerm]);

  return (
    <div className="container">
      <div>
        <ShowProduct data={data}></ShowProduct>
      </div>
    </div>
  );
}

export default Search;
