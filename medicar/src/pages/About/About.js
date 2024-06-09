import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  // useEffect(() => {
  //   setPrevLocation(location.state.data);
  // }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Medicarte</span>{" "}</h1>
          <p>
          Welcome to Medicarte, your trusted source for quality healthcare products and services. At Medicarte, we are committed to providing personalized care and expert guidance to help you and your loved ones achieve optimal health and wellness.

Founded 2024, Medicarte has been serving our community with dedication and integrity. Our team of experienced pharmacists and healthcare professionals are passionate about delivering exceptional customer service and making a positive impact on the lives of our customers.

At Medicarte, we believe in the power of knowledge and education. We strive to empower our customers with the information and resources they need to make informed decisions about their health. Whether you have questions about medications, need advice on managing a health condition, or are looking for wellness tips, our team is here to help.

As a locally owned and operated pharmacy, we take pride in being an integral part of our community. We value the relationships we have built with our customers and are grateful for the trust they have placed in us.

Thank you for choosing Medicarte as your healthcare partner. We look forward to serving you and your family for many years to come.
</p>
        
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300 ">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
