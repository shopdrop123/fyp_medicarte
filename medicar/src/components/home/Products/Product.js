import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import { toast } from "react-toastify";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };

console.log("props : ", props)

  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-hidden">
        <div onClick={handleProductDetails}>
          <Image className="w-full h-full object-cover" imgSrc={props.img} />
        </div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div>
        <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700 shadow-lg">
          <ul className="w-full h-full flex flex-col items-center justify-center gap-2 font-titleFont px-4">
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.color,
                  })
                )
              }
              className="text-gray-800 hover:text-white text-sm font-normal border-b-[1px] border-b-gray-300 hover:bg-black hover:border-b-white flex items-center justify-center gap-2 cursor-pointer py-2 duration-300 w-full transform hover:scale-105"
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li
              onClick={handleProductDetails}
              className="text-gray-800 hover:text-white text-sm font-normal border-b-[1px] border-b-gray-300 hover:bg-black hover:border-b-white flex items-center justify-center gap-2 cursor-pointer py-2 duration-300 w-full transform hover:scale-105"
            >
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-black font-bold">{props.productName}</h2>
          <p className="text-gray-600 text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-gray-600 text-[14px]">{props.color}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
