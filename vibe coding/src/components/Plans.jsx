import React from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Great for beginners exploring Vibe Coding.",
    features: [
      "5 Projects",
      "Basic AI Coding Help",
      "Community Support"
    ]
  },
  {
    name: "Pro",
    price: "$12/mo",
    description: "For developers who want powerful coding tools.",
    features: [
      "Unlimited Projects",
      "Advanced AI Assistance",
      "Priority Support"
    ]
  },
  
  {
    name: "Premium",
    price: "$49/mo",
    description: "Complete toolkit for professional developers.",
    features: [
      "Unlimited AI Usage",
      "Dedicated Support",
      "Early Feature Access"
    ]
  }
];

const Plans = () => {
  return (
    <div className="py-16 px-8 bg-gradient-to-b from-blue-50 to-indigo-50">

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Vibe Coding Plans
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-md p-6 flex flex-col h-full"
          >

            {/* Top Content */}
            <div>

              <p className="text-xs text-blue-600 font-semibold mb-2">
                VIBE CODING
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {plan.name}
              </h3>

              <p className="text-2xl font-bold text-blue-600 mb-3">
                {plan.price}
              </p>

              <p className="text-gray-600 text-sm mb-6">
                {plan.description}
              </p>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 text-sm">
                    ✓ {feature}
                  </li>
                ))}
              </ul>

            </div>

            {/* Button stays at bottom */}
            <button className="mt-auto w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Choose Plan
            </button>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Plans;