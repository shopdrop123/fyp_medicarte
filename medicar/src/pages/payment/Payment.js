// import React from "react";
// import { Link } from "react-router-dom";
// import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import StripeCheckout from "react-stripe-checkout";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import axios from "../../components/axios";
// import { resetCart } from "../../redux/orebiSlice";

// const Payment = () => {
//   const products = useSelector((state) => state.orebiReducer.products);
//   const dispatch = useDispatch(); // Use the dispatch hook from react-redux
//   const [totalAmt, setTotalAmt] = useState(0);
//   const [shippingCharge, setShippingCharge] = useState(0);

//   useEffect(() => {
//     let price = 0;
//     products.map((item) => {
//       price += item.price * item.quantity;
//       return price;
//     });
//     setTotalAmt(price);
//   }, [products]);

//   useEffect(() => {
//     if (totalAmt <= 200) {
//       setShippingCharge(30);
//     } else if (totalAmt <= 400) {
//       setShippingCharge(25);
//     } else if (totalAmt > 401) {
//       setShippingCharge(20);
//     }
//   }, [totalAmt]);

//   const makePayment = async (token) => {
  
//     const body = {
//       token,
//       product: products,
//       price: totalAmt
//     };
  
//     try {
//       const response = await axios.post('/payment', body);
//       console.log("RESPONSE", response);
  
//       // Empty the cart after successful payment
//       dispatch(resetCart());
//     } catch (error) {
//       console.log("ERROR", error);
//     }
//   };
//   return (
//     <div className="max-w-container mx-auto px-4">
//       <Breadcrumbs title="Payment gateway" />
//       <div className="pb-10">
//         <p>Payment gateway only applicable for Production build.</p>
//         <StripeCheckout stripeKey="pk_test_51IPsBgEwEbzzqba9A4AQsmpCvFKjJbN9AyCrLYwCykIR1XTe8mFHcRQB6qWHz1Y6D8XZSK0gHi2CIr92nDzrs07f00W0hXIIRv"
//                 token={makePayment} amount={totalAmt}
//                 shippingAddress
//                 billingAddress
//                 name="Buy Products" />
//         <Link to="/">
//           <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
//             Explore More
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Payment;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../components/axios";
import { resetCart } from "../../redux/orebiSlice";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51IPsBgEwEbzzqba9A4AQsmpCvFKjJbN9AyCrLYwCykIR1XTe8mFHcRQB6qWHz1Y6D8XZSK0gHi2CIr92nDzrs07f00W0hXIIRv");

const CheckoutForm = ({ products, totalAmt }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!error) {
      try {
        const response = await axios.post('/payment', {
          token: paymentMethod,
          product: products,
          price: totalAmt,
        });
        console.log("RESPONSE", response);
        dispatch(resetCart());
      } catch (error) {
        console.log("ERROR", error);
      }
    } else {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe} className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
        Pay
      </button>
    </form>
  );
};

const Payment = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);

  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);

  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <p>Payment gateway only applicable for Production build.</p>
        <Elements stripe={stripePromise}>
          <CheckoutForm products={products} totalAmt={totalAmt} />
        </Elements>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
