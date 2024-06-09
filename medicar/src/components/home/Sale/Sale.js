// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   saleImgOne,
//   saleImgTwo,
//   saleImgThree,
// } from "../../../assets/images/index";
// import Image from "../../designLayouts/Image";
// import ShopNow from "../../designLayouts/buttons/ShopNow";

// const Sale = () => {
//   return (
//     <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
//       <div className="bg-[#f3f3f3] w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center items-center text-black">
//         <div className="aspect-w-4 aspect-h-3 w-full mb-4">
//           <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
//         </div>
//         <div className="text-left h-140 md:h-200 lg:h-260 w-full mx-4 ">
//           <div className="mx-8">
//             <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
//               Medicine sale
//             </h2>
//             <p className="text-lg md:text-xl lg:text-2xl mb-6">
//               Up to{" "}
//               <span className="text-4xl md:text-5xl lg:text-5xl font-bold">
//                 30%
//               </span>{" "}
//               sales for all medicines{" "}
//             </p>
//             <div className=" mb-8">
//               <ShopNow />
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-[#f3f3f3] w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center items-center text-black">
//         <div className="aspect-w-4 aspect-h-3 w-full mb-4">
//           <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
//         </div>
//         <div className="text-left h-140 md:h-200 lg:h-260 w-full mx-4 ">
//           <div className="mx-8">
//             <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
//           Items Sale
//             </h2>
//             <p className="text-lg md:text-xl lg:text-2xl mb-6">
//               Up to{" "}
//               <span className="text-4xl md:text-5xl lg:text-5xl font-bold">
//                 20%
//               </span>{" "}
//               sales for all accessories{" "}
//             </p>
//             <div className=" mb-8">
//               <ShopNow />
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="bg-[#f3f3f3] w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center items-center text-black">
//         <div className="aspect-w-4 aspect-h-3 w-full mb-4">
//           <Image className="h-full w-full object-cover" imgSrc={saleImgThree} />
//         </div>
//         <div className="text-left h-140 md:h-200 lg:h-260 w-full mx-4 ">
//           <div className="mx-8">
//             <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
//               Protiens sale
//             </h2>
//             <p className="text-lg md:text-xl lg:text-2xl mb-6">
//               Up to{" "}
//               <span className="text-4xl md:text-5xl lg:text-5xl font-bold">
//                 50%
//               </span>{" "}
//               sales for all protien{" "}
//             </p>
//             <div className=" mb-8">
//               <ShopNow />
//             </div>
//           </div>
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default Sale;


// new responsive cards with errors  


// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   saleImgOne,
//   saleImgTwo,
//   saleImgThree,
// } from "../../../assets/images/index";
// import Image from "../../designLayouts/Image";
// import ShopNow from "../../designLayouts/buttons/ShopNow";

// const Sale = () => {
//   return (
//     <div className="py-20 flex flex-col items-center">
//       <div className="flex flex-wrap justify-center gap-4 lg:gap-10 w-full">
//         <div className="bg-[#f3f3f3] w-full sm:w-1/2 lg:w-1/3 h-full flex flex-col justify-center items-center text-black rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
//           <div className="w-full mb-4">
//             <Image className="h-64 w-full object-cover" imgSrc={saleImgOne} />
//           </div>
//           <div className="text-left p-6">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
//               Medicine Sale
//             </h2>
//             <p className="text-lg md:text-xl lg:text-2xl mb-6">
//               Up to{" "}
//               <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 30%
//               </span>{" "}
//               sales for all medicines
//             </p>
//             <div className="mb-4">
//               <ShopNow />
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#f3f3f3] w-full sm:w-1/2 lg:w-1/3 h-full flex flex-col justify-center items-center text-black rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
//           <div className="w-full mb-4">
//             <Image className="h-64 w-full object-cover" imgSrc={saleImgTwo} />
//           </div>
//           <div className="text-left p-6">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
//               Items Sale
//             </h2>
//             <p className="text-lg md:text-xl lg:text-2xl mb-6">
//               Up to{" "}
//               <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 20%
//               </span>{" "}
//               sales for all accessories
//             </p>
//             <div className="mb-4">
//               <ShopNow />
//             </div>
//           </div>
//         </div>

//         <div className="bg-[#f3f3f3] w-full sm:w-1/2 lg:w-1/3 h-full flex flex-col justify-center items-center text-black rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
//           <div className="w-full mb-4">
//             <Image className="h-64 w-full object-cover" imgSrc={saleImgThree} />
//           </div>
//           <div className="text-left p-6">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
//               Proteins Sale
//             </h2>
//             <p className="text-lg md:text-xl lg:text-2xl mb-6">
//               Up to{" "}
//               <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
//                 50%
//               </span>{" "}
//               sales for all proteins
//             </p>
//             <div className="mb-4">
//               <ShopNow />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sale;

import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import ShopNow from "../../designLayouts/buttons/ShopNow";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="bg-[#f3f3f3] w-full h-full flex flex-col justify-center items-center text-black p-4">
        <div className="w-full h-60 md:h-80 lg:h-96 mb-4 overflow-hidden">
          <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
        </div>
        <div className="text-left w-full px-4">
          <div className="px-2 md:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Medicine sale
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-4">
              Up to{" "}
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                30%
              </span>{" "}
              sales for all medicines{" "}
            </p>
            <div className="mb-4">
              <ShopNow />
              
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] w-full h-full flex flex-col justify-center items-center text-black p-4">
        <div className="w-full h-60 md:h-80 lg:h-96 mb-4 overflow-hidden">
          <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
        </div>
        <div className="text-left w-full px-4">
          <div className="px-2 md:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Items Sale
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-4">
              Up to{" "}
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                20%
              </span>{" "}
              sales for all accessories{" "}
            </p>
            <div className="mb-4">
              <ShopNow />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f3f3f3] w-full h-full flex flex-col justify-center items-center text-black p-4">
        <div className="w-full h-60 md:h-80 lg:h-96 mb-4 overflow-hidden">
          <Image className="h-full w-full object-cover" imgSrc={saleImgThree} />
        </div>
        <div className="text-left w-full px-4">
          <div className="px-2 md:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Protiens sale
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-4">
              Up to{" "}
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                50%
              </span>{" "}
              sales for all protien{" "}
            </p>
            <div className="mb-4">
              <ShopNow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
