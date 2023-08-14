import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
//import Razorpay from 'razorpay';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setmembershipValue } from "../redux/reduxslice";
import useRazorpay from "react-razorpay";
import NavbarValidated from "../LandingPage/NavbarValidated";

const PricingCard = ({ postsPerDay, price, perks }) => {
  const [Razorpay] = useRazorpay();
  //const stripe = useStripe();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stripe = Stripe('pk_test_51NaimQSFmmaiQy9ietleTdCO53wM7gJi89TOY9XIuZwaPs5y8NpU889HQYKzJSFuYwLd4usdg9ejn0jIu2Pg627G00Kks846L2');
  const auth_token = localStorage.getItem("jwtToken");
  const headers =  {
    "authToken": auth_token,
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json, text/plain, */*'
  }

  const handlePayment = (price) => {
    console.log("yeaj");
    axios
    .post(
      `https://3000-venkateshjn-mediumclone-012z6jj5k9g.ws-us103.gitpod.io/payments/create?amount=${price}` , {} , {headers}
    )
    .then((response) => {
      console.log("Fetched the posts", response.data);
      stripe.redirectToCheckout({
        sessionId: data.sessionId
      })
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
    // const options = {
    //   key: "rzp_test_hjnHnpkynNqw7v", // Replace with your Razorpay API key
    //   amount: 1000, // Replace with the desired amount in paise
    //   currency: "INR", // Replace with your preferred currency
    //   name: "Your Company Name",
    //   description: "Test Payment",
    //   handler: function (response) {
    //     // Payment success callback
    //     console.log("Payment success:", response);
    //     //setPaymentSuccess(true);
    //     dispatch(setmembershipValue(true));
    //     navigate("/home");
    //   },
    //   prefill: {
    //     name: "John Doe",
    //     email: "john@example.com",
    //     contact: "9876543210",
    //   },
    //   notes: {
    //     address: "Razorpay Corporate Office",
    //   },
    // };
    // const rzp = new Razorpay(options);
    // rzp.open();
  };

  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col">
      <h2 className="text-xl font-bold mb-2">{postsPerDay} Posts per Day</h2>
      <p className="mb-4">${price} per month</p>
      <div className="border-t border-gray-400 my-4" />
      <ul className="list-disc pl-6 mb-[auto]">
        {perks.map((perk, index) => (
          <li key={index} className="mb-2">
            {perk}
          </li>
        ))}
      </ul>
      <button
        onClick={(price) => handlePayment(price)}
        className="mt-4 px-[40px] py-2 bg-orange-500 text-white rounded-[25px] w-fit mx-auto"
      >
        Subscribe
      </button>
    </div>
  );
};


const MembershipStripe = () => {
  const pricingPlans = [
    {
      postsPerDay: 1,
      price: 0,
      perks: ["1 Post per Day", "No ads", "Listen to any story"],
    },
    {
      postsPerDay: 3,
      price: 3,
      perks: [
        "3 Posts per Day",
        "No ads",
        "Listen to any story",
        "Support quality writing",
      ],
    },
    {
      postsPerDay: 5,
      price: 5,
      perks: [
        "5 Posts per Day",
        "No ads",
        "Listen to any story",
        "Support quality writing",
        "Access on any device",
      ],
    },
    {
      postsPerDay: 10,
      price: 10,
      perks: [
        "10 Posts per Day",
        "No ads",
        "Listen to any story",
        "Support quality writing",
        "Access on any device",
        "Read offline with the Medium app",
        "Create your own publications",
        "Mastodon account",
      ],
    },
  ];
  return (
    <>
      <NavbarValidated />
      <div className="max-w-[1200px] mx-auto p-4 mt-[70px]">
        <h1 className="text-2xl font-bold mb-4 text-center text-[30px] mb-[30px]">
          Membership Pricing
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <PricingCard {...pricingPlans[0]} />

          <PricingCard {...pricingPlans[1]} />

          <PricingCard {...pricingPlans[2]} />

          <PricingCard {...pricingPlans[3]} />
        </div>
      </div>
    </>
  );
};

export default MembershipPricingPage;
