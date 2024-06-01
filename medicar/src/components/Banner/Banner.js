// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import {
//   bannerImgOne,
//   bannerImgTwo,
//   bannerImgThree,
// } from "../../assets/images";
// import Image from "../designLayouts/Image";

// const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
//   <div
//     style={{
//       position: "relative",
//       backgroundColor: "#F5F5F3", // Gray background color
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center", // Center vertically
//     }}
//   >
//     <div
//       style={{
//         maxWidth: "450px", // Adjust the maxWidth as needed
//         marginRight: "100px", // Add margin between text/button and image
//       }}
//     >
//       <h1
//         style={{
//           marginBottom: "15px",
//           fontSize: "2.5rem", // Adjust the font size as needed
//           color: "#000", // Black color
//           fontWeight: "700",
//         }}
//       >
//         {text}
//       </h1>
//       <p
//         style={{
//           marginBottom: "25px",
//           fontSize: "1.5rem", // Adjust the font size as needed
//           color: "#666", // Gray color
//         }}
//       >
//         {Subtext}
//       </p>

//       <Link to="/about">
//         <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
//           {buttonText}
//         </button>
//       </Link>
//     </div>
//     <div style={{ marginLeft: "100px" }}>
//       <Image imgSrc={imgSrc} />
//     </div>
//   </div>
// );

// const Banner = () => {
//   const [dotActive, setDocActive] = useState(0);
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true,
//     arrows: false,
//     beforeChange: (prev, next) => {
//       setDocActive(next);
//     },
//     appendDots: (dots) => (
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "7%",
//           transform: "translateY(-50%)",
//         }}
//       >
//         <ul style={{ margin: "0px" }}> {dots} </ul>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         style={
//           i === dotActive
//             ? {
//                 width: "30px",
//                 color: "#262626",
//                 borderRight: "3px #262626 solid",
//                 padding: "8px 0",
//                 cursor: "pointer",
//               }
//             : {
//                 width: "30px",
//                 color: "transparent",
//                 borderRight: "3px white solid",
//                 padding: "8px 0",
//                 cursor: "pointer",
//               }
//         }
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
//             <div
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "2%",
//                 transform: "translateY(-50%)",
//               }}
//             >
//               <ul style={{ margin: "0px" }}> {dots} </ul>
//             </div>
//           ),
//           customPaging: (i) => (
//             <div
//               style={
//                 i === dotActive
//                   ? {
//                       width: "25px",
//                       color: "#262626",
//                       borderRight: "3px #262626 solid",
//                       cursor: "pointer",
//                       fontSize: "12px",
//                     }
//                   : {
//                       width: "25px",
//                       color: "transparent",
//                       borderRight: "3px white solid",
//                       cursor: "pointer",
//                       fontSize: "12px",
//                     }
//               }
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
//       Subtext:
//         "Trusted pharmacy services, personalized for you",
//       buttonLink: "/offer",
//       buttonText: "Order Now",
//     },
//     {
//       imgSrc: bannerImgOne,
//       text: "Expert Care, Anytime",
//       Subtext:
//         "24/7 access to medications and health advice.",
//       buttonLink: "/shop",
//       buttonText: "About-us",
//     },
//     {
//       imgSrc: bannerImgOne,
//       text: "Convenient Prescriptions",
//       Subtext:
//         "Easy refills and fast delivery right to your door ",
//       buttonLink: "/contact",
//       buttonText: "Contact-us",
//     },

//     // Add more slides as needed
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

   // code for responsive banner but giving errors 
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree } from "../../assets/images";
import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div className="relative bg-gray-100 flex flex-col md:flex-row justify-center items-center p-4 md:p-8">
    <div className="max-w-xl mr-0 md:mr-10 mb-6 md:mb-0 text-center md:text-left">
      <h1 className="mb-4 text-2xl md:text-4xl font-bold text-black">{text}</h1>
      <p className="mb-6 text-lg md:text-xl text-gray-600">{Subtext}</p>
      <Link to={buttonLink}>
        <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
    <div className="ml-0 md:ml-10">
      <Image imgSrc={imgSrc} />
    </div>
  </div>
);

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
      buttonLink: "/offer",
      buttonText: "Order Now",
    },
    {
      imgSrc: bannerImgOne,
      text: "Expert Care, Anytime",
      Subtext: "24/7 access to medications and health advice.",
      buttonLink: "/about",
      buttonText: "About Us",
    },
    {
      imgSrc: bannerImgOne,
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

