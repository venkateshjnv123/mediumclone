import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
//import Razorpay from 'razorpay';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setmembershipValue } from '../redux/reduxslice';
import useRazorpay from "react-razorpay";


const PricingCard = ({ postsPerDay, price, perks }) => {
  const [Razorpay] = useRazorpay();
    //const stripe = useStripe();
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handlePayment = (price) => {
      console.log("yeaj")
      const options = {
        key: 'rzp_test_hjnHnpkynNqw7v', // Replace with your Razorpay API key
        amount: 1000, // Replace with the desired amount in paise
        currency: 'INR', // Replace with your preferred currency
        name: 'Your Company Name',
        description: 'Test Payment',
        handler: function (response) {
          // Payment success callback
          console.log('Payment success:', response);
          //setPaymentSuccess(true);
          dispatch(setmembershipValue(true));
          navigate('/home')
        },
        prefill: {
          name: 'John Doe',
          email: 'john@example.com',
          contact: '9876543210',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
      };
      const rzp = new Razorpay(options);
      rzp.open();
    };
  
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold mb-2">{postsPerDay} Posts per Day</h2>
        <p className="mb-4">${price} per month</p>
        <div className="border-t border-gray-400 my-4" />
        <ul className="list-disc pl-6">
          {perks.map((perk, index) => (
            <li key={index} className="mb-2">
              {perk}
            </li>
          ))}
        </ul>
        <button
          onClick={(price)=>handlePayment(price)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg w-full"
        >
          Subscribe
        </button>
      </div>
    );
  };
  


const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

const MembershipPricingPage = () => {

    const pricingPlans = [
        {
          postsPerDay: 1,
          price: 0,
          perks: ['1 Post per Day', 'No ads', 'Listen to any story'],
        },
        {
          postsPerDay: 3,
          price: 3,
          perks: ['3 Posts per Day', 'No ads', 'Listen to any story', 'Support quality writing'],
        },
        {
          postsPerDay: 5,
          price: 5,
          perks: [
            '5 Posts per Day',
            'No ads',
            'Listen to any story',
            'Support quality writing',
            'Access on any device',
          ],
        },
        {
          postsPerDay: 10,
          price: 10,
          perks: [
            '10 Posts per Day',
            'No ads',
            'Listen to any story',
            'Support quality writing',
            'Access on any device',
            'Read offline with the Medium app',
            'Create your own publications',
            'Mastodon account',
          ],
        },
      ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Membership Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PricingCard {...pricingPlans[0]} />
  
          <PricingCard {...pricingPlans[1]} />
   
          <PricingCard {...pricingPlans[2]} />
      
          <PricingCard {...pricingPlans[3]} />
      </div>
    </div>
  );
};

export default MembershipPricingPage;
