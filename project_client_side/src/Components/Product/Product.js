import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { _id, product_name } = product;
    return (
      <div key={_id}>
        <Link to={`/details/${_id}`}>
          <h1>{_id}</h1>
          <h1>{product_name}</h1>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Product;
