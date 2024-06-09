import React from "react";
import { useNavigate } from "react-router-dom";


const ShopNow = () => {
  const navigate=useNavigate()
  return (
    <button  onClick={()=>navigate('/shop')} className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
      Shop Now
    </button>
  );
};

export default ShopNow;
