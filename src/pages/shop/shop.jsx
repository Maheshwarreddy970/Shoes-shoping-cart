import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="products w-full h-auto grid grid-cols-3 place-items-center">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
};
