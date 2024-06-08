import React, { useEffect, useState } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";
import axios from "../../../components/axios";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      {products.map((product) => (
          <div key={product._id}>
            <Product
              _id={product._id}
              img={product.ProductImage}
              productName={product.Title}
              price={product.Price}
              color="Black" // Assuming color is not in the product object, replace with actual value if exists
              badge={product.SalePercent !== '0.00'}
              des={product.Description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
