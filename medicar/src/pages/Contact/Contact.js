// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

// const Contact = () => {
//   const location = useLocation();
//   const [prevLocation, setPrevLocation] = useState("");
//   useEffect(() => {
//     setPrevLocation(location.state.data);
//   }, [location]);

//   const [clientName, setclientName] = useState("");
//   const [email, setEmail] = useState("");
//   const [messages, setMessages] = useState("");

//   // ========== Error Messages Start here ============
//   const [errClientName, setErrClientName] = useState("");
//   const [errEmail, setErrEmail] = useState("");
//   const [errMessages, setErrMessages] = useState("");
//   // ========== Error Messages End here ==============
//   const [successMsg, setSuccessMsg] = useState("");

//   const handleName = (e) => {
//     setclientName(e.target.value);
//     setErrClientName("");
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setErrEmail("");
//   };
//   const handleMessages = (e) => {
//     setMessages(e.target.value);
//     setErrMessages("");
//   };

//   // ================= Email Validation start here =============
//   const EmailValidation = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
//   };
//   // ================= Email Validation End here ===============

//   const handlePost = (e) => {
//     e.preventDefault();
//     if (!clientName) {
//       setErrClientName("Enter your Name");
//     }
//     if (!email) {
//       setErrEmail("Enter your Email");
//     } else {
//       if (!EmailValidation(email)) {
//         setErrEmail("Enter a Valid Email");
//       }
//     }
//     if (!messages) {
//       setErrMessages("Enter your Messages");
//     }
//     if (clientName && email && EmailValidation(email) && messages) {
//       setSuccessMsg(
//         `Thank you dear ${clientName}, Your messages has been received successfully. Futher details will sent to you by your email at ${email}.`
//       );
//     }
//   };

//   return (
//     <div className="max-w-container mx-auto px-4">
//       <Breadcrumbs title="Contact" prevLocation={prevLocation} />
//       {successMsg ? (
//         <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
//       ) : (
//         <form className="pb-20">
//           <h1 className="font-titleFont font-semibold text-3xl">
//             Fill up a Form
//           </h1>
//           <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
//             <div>
//               <p className="text-base font-titleFont font-semibold px-2">
//                 Name
//               </p>
//               <input
//                 onChange={handleName}
//                 value={clientName}
//                 className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
//                 type="text"
//                 placeholder="Enter your name here"
//               />
//               {errClientName && (
//                 <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
//                   <span className="text-sm italic font-bold">!</span>
//                   {errClientName}
//                 </p>
//               )}
//             </div>
//             <div>
//               <p className="text-base font-titleFont font-semibold px-2">
//                 Email
//               </p>
//               <input
//                 onChange={handleEmail}
//                 value={email}
//                 className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
//                 type="email"
//                 placeholder="Enter your email here"
//               />
//               {errEmail && (
//                 <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
//                   <span className="text-sm italic font-bold">!</span>
//                   {errEmail}
//                 </p>
//               )}
//             </div>
//             <div>
//               <p className="text-base font-titleFont font-semibold px-2">
//                 Messages
//               </p>
//               <textarea
//                 onChange={handleMessages}
//                 value={messages}
//                 cols="30"
//                 rows="3"
//                 className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
//                 type="text"
//                 placeholder="Enter your message here"
//               ></textarea>
//               {errMessages && (
//                 <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
//                   <span className="text-sm italic font-bold">!</span>
//                   {errMessages}
//                 </p>
//               )}
//             </div>
//             <button
//               onClick={handlePost}
//               className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Contact;


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"; // Import axios
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [city, setCity] = useState("");

  // ========== Error Messages Start here ============
  const [errFullName, setErrFullName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [errCity, setErrCity] = useState("");
  // ========== Error Messages End here ==============
  const [successMsg, setSuccessMsg] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value);
    setErrFullName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    setErrMessage("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    };
    // ================= Email Validation End here ===============
  
    const handlePost = async (e) => {
      e.preventDefault();
      if (!fullName) {
        setErrFullName("Enter your full name");
      }
      if (!email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a valid email");
        }
      }
      if (!message) {
        setErrMessage("Enter your message");
      }
      if (!city) {
        setErrCity("Enter your city");
      }
      if (fullName && email && EmailValidation(email) && message && city) {
        try {
          const response = await axios.post("http://localhost:5000/contact", {
            fullName,
            email,
            gender,
            message,
            city,
          });
          setSuccessMsg(
            `Thank you dear ${fullName}, your message has been received successfully. Further details will be sent to you by email at ${email}.`
          );
          setFullName("");
          setEmail("");
          setGender("");
          setMessage("");
          setCity("");
        } catch (error) {
          console.error("There was an error submitting the form!", error);
        }
      }
    };
  
    return (
      <div className="max-w-container mx-auto px-4">
        <Breadcrumbs title="Contact" prevLocation={prevLocation} />
        {successMsg ? (
          <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
        ) : (
          <form className="pb-20">
            <h1 className="font-titleFont font-semibold text-3xl">
              Fill up a Form
            </h1>
            <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Full Name
                </p>
                <input
                  onChange={handleFullName}
                  value={fullName}
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                  type="text"
                  placeholder="Enter your full name here"
                />
                {errFullName && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {errFullName}
                  </p>
                )}
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Email
                </p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                  type="email"
                  placeholder="Enter your email here"
                />
                {errEmail && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {errEmail}
                  </p>
                )}
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Gender
                </p>
                <select
                  onChange={handleGender}
                  value={gender}
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  City
                </p>
                <input
                  onChange={handleCity}
                  value={city}
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                  type="text"
                  placeholder="Enter your city here"
                />
                {errCity && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {errCity}
                  </p>
                )}
              </div>
              
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Message
                </p>
                <textarea
                  onChange={handleMessage}
                  value={message}
                  cols="30"
                  rows="3"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                  type="text"
                  placeholder="Enter your message here"
                ></textarea>
                {errMessage && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {errMessage}
                  </p>
                )}
              </div>
              <button
                onClick={handlePost}
                className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    );
  };
  
  export default Contact;
  
