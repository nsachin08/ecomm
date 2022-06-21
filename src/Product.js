import React, { useState, useEffect } from "react";
import "./Product.css";
import ShowProduct from "./ShowProduct";
import Pagination from "./Pagination";

const Product = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  let componentsMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://sachinecomm.herokuapp.com/products"
      );

      if (componentsMounted) {
        setData(await response.clone().json());
      }

      return () => {};
    };
    getProducts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div>
        <ShowProduct data={currentPosts}></ShowProduct>
        <br />
        <br />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        ></Pagination>
      </div>
    </div>
  );
};

export default Product;
