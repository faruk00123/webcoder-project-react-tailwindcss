import React, { useState } from 'react'
import ComonCode from '../../components/ComonCode'
import { VscCheck } from "react-icons/vsc";
const pricingPlans = [
    {
        name: "Freelancer",
        monthlyPrice: 25,
        yearlyPrice: 250,
        saves: "$25 USD per month, paid annually",
        featurce: [
            "1 project",
            "Hasic Support",
            "Access to all templates",
            "5GB Storage"
        ]
    },

    {
        name: "Professional",
        monthlyPrice: 65,
        yearlyPrice: 650,
        saves: "$65 USD per month, paid annually",
        featurce: [
            "5 project",
            "Priority Support",
            "Access to all templates",
            "25GB Storage",
            "Advanced Analytics"
        ]
    },

    {
        name: "Agency",
        monthlyPrice: 95,
        yearlyPrice: 950,
        saves: "$95 USD per month, paid annually",
        featurce: [
            "Unlimited project",
            "24/7 Support",
            "Access to all templates",
            "Unlimited Storage",
            "Custom Branding",
            "Team Collaboration"
        ]
    }
]

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false)
  return (
    <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
        <div>
            <ComonCode subheading="pricing" heading="Choose Your Plan" description="defining your vision, creating a functional layout, setting a budget, and carefully selecting materials to bring the space to life."/>
        </div>

        {/* toggle for yearly/monthly plan */}

        <div className='text-center mb-10'>
            <label className='inline-flex items-center cursor-pointer'>
                <span className='mr-3 text-lg to-gray-600'>
                    {
                        isYearly ? "Yearly Pricing" : "Monthly Pricing"
                    }
                </span>
                <div className='relative'>
                    <input type="checkbox" className='sr-only' checked={isYearly} onChange={() => setIsYearly(!isYearly)}/>
                    <div className='toggle-bg w-14 h-8 relative bg-gray-300 rounded-full'>
                    <div className={`w-6 h-6 absolute mt-1 transform duration-300 ml-1 bg-blue-600 rounded-full ${isYearly ? "ml-7 transform duration-300":""}`}>
                        
                    </div>
                    </div>
                </div>
            </label>
        </div>

        {/* princing plan */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            pricingPlans.map((plan) => (
                <div key={plan.name} className='bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>
                    <div className='p-5 text-center'>
                        <h3 className='text-2xl font-semibold text-gray-800 my-3'>{plan.name}</h3>
                        <p className='text-gray-500 mb-5'>Best for {plan.name.toLocaleLowerCase()}s</p>


                        {/* pricing */}
                        <div className='text-3xl font-bold text-gray-800'>
                            ${
                                isYearly ? plan.yearlyPrice : plan.monthlyPrice
                            }
                            <span className='text-sm text-gray-500'>{isYearly ? "/year":"/month"}</span>
                            <p className='text-sm mt-4 text-gray-600'>{isYearly? plan.saves: ""}</p>
                        </div>
                        <button className='mt-18 py-3 text-center px-6 bg-blue-600 hover:bg-blue-700 text-xl text-white rounded-full cursor-pointer'>Choose {plan.name}</button>
                        
                        {/* */}
                        <div className='p-5 md:px-12 md:my-5'>
                            <ul>
                                {
                                    plan.featurce.map((fea, index) => (
                                        <li className='flex items-center gap-2 pt-2 text-gray-500' key={index}><VscCheck className='text-black'/>{fea}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            ))
          }
        </div>
    </div>
  )
}

export default Pricing