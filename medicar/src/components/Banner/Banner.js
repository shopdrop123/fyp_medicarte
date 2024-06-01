
//     code for responsive banner 
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import { bannerImgOne, bannerImgTwo, bannerImgThree } from "../../assets/images";
// import Image from "../designLayouts/Image";

// const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
//   <div className="relative bg-gray-100 flex flex-col md:flex-row justify-center items-center p-4 md:p-8 h-[60vh]">

//     <div className="max-w-xl mr-0 md:mr-10 mb-6 md:mb-0 text-center md:text-left">
//       <h1 className="mb-4 text-2xl md:text-4xl font-bold text-black">{text}</h1>
//       <p className="mb-6 text-lg md:text-xl text-gray-600">{Subtext}</p>
//       <Link to={buttonLink}>
//         <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
//           {buttonText}
//         </button>
//       </Link>
//     </div>
//     <div className="ml-0 md:ml-10">
//       <Image imgSrc={imgSrc} />
//     </div>
//   </div>
// );

// const Banner = () => {
//   const [dotActive, setDotActive] = useState(0);
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     arrows: false,
//     beforeChange: (prev, next) => {
//       setDotActive(next);
//     },
//     appendDots: (dots) => (
//       <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
//         <ul className="m-0 p-0 list-none"> {dots} </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         className={`w-8 text-center ${i === dotActive ? "text-black border-r-2 border-black" : "text-transparent border-r-2 border-white"} cursor-pointer py-2`}
//       >
//         0{i + 1}
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 576,
//         settings: {
//           dots: true,
//           appendDots: (dots) => (
//             <div className="absolute top-1/2 left-1 transform -translate-y-1/2">
//               <ul className="m-0 p-0 list-none"> {dots} </ul>
//             </div>
//           ),
//           customPaging: (i) => (
//             <div
//               className={`w-6 text-center ${i === dotActive ? "text-black border-r-2 border-black text-sm" : "text-transparent border-r-2 border-white text-sm"} cursor-pointer py-1`}
//             >
//               0{i + 1}
//             </div>
//           ),
//         },
//       },
//     ],
//   };

//   const slides = [
//     {
//       imgSrc: bannerImgOne,
//       text: "Your Health, Our Priority",
//       Subtext: "Trusted pharmacy services, personalized for you.",
//       buttonLink: "/home",
//       buttonText: "Order Now",
//     },
//     {
//       imgSrc: bannerImgTwo,
//       text: "Expert Care, Anytime",
//       Subtext: "24/7 access to medications and health advice.",
//       buttonLink: "/About",
//       buttonText: "About Us",
//     },
//     {
//       imgSrc: bannerImgThree,
//       text: "Convenient Prescriptions",
//       Subtext: "Easy refills and fast delivery right to your door.",
//       buttonLink: "/contact",
//       buttonText: "Contact Us",
//     },
//   ];

//   return (
//     <div className="w-full bg-white">
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <CustomSlide key={index} {...slide} />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Banner;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree } from "../../assets/images";
import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(buttonLink);
  };

  return (
    <div className="relative bg-gray-100 flex flex-col md:flex-row justify-center items-center p-4 md:p-8 h-[60vh]">
      <div className="max-w-xl mr-0 md:mr-10 mb-6 md:mb-0 text-center md:text-left">
        <h1 className="mb-4 text-2xl md:text-4xl font-bold text-black">{text}</h1>
        <p className="mb-6 text-lg md:text-xl text-gray-600">{Subtext}</p>
        <button
          onClick={handleButtonClick}
          className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold"
        >
          {buttonText}
        </button>
      </div>
      <div className="ml-0 md:ml-10">
        <Image imgSrc={imgSrc} />
      </div>
    </div>
  );
};

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
        <ul className="m-0 p-0 list-none"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-8 text-center ${i === dotActive ? "text-black border-r-2 border-black" : "text-transparent border-r-2 border-white"} cursor-pointer py-2`}
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div className="absolute top-1/2 left-1 transform -translate-y-1/2">
              <ul className="m-0 p-0 list-none"> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              className={`w-6 text-center ${i === dotActive ? "text-black border-r-2 border-black text-sm" : "text-transparent border-r-2 border-white text-sm"} cursor-pointer py-1`}
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: bannerImgOne,
      text: "Your Health, Our Priority",
      Subtext: "Trusted pharmacy services, personalized for you.",
      buttonLink: "/shop",
      buttonText: "Order Now",
    },
    {
      imgSrc: bannerImgTwo,
      text: "Expert Care, Anytime",
      Subtext: "24/7 access to medications and health advice.",
      buttonLink: "/about",
      buttonText: "About Us",
    },
    {
      imgSrc: bannerImgThree,
      text: "Convenient Prescriptions",
      Subtext: "Easy refills and fast delivery right to your door.",
      buttonLink: "/contact",
      buttonText: "Contact Us",
    },
  ];

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;


