import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PricingCard = ({ postsPerDay, price, perks }) => {
    const stripe = useStripe();
  
    const handleSubscribe = async () => {
      if (!stripe) {
        return;
      }
  
      // Implement the Stripe payment logic here
      // For simplicity, let's assume the subscription creation is successful
      console.log(`Subscribed to ${postsPerDay} posts per day for $${price}`);
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
          onClick={handleSubscribe}
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
      <Elements stripe={stripePromise}>
          <PricingCard {...pricingPlans[0]} />
        </Elements>
        <Elements stripe={stripePromise}>
          <PricingCard {...pricingPlans[1]} />
        </Elements>
        <Elements stripe={stripePromise}>
          <PricingCard {...pricingPlans[2]} />
        </Elements>
        <Elements stripe={stripePromise}>
          <PricingCard {...pricingPlans[3]} />
        </Elements>
      </div>
    </div>
  );
};

export default MembershipPricingPage;
