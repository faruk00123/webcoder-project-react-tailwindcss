import React, { useState } from 'react'
import ComonCode from '../components/ComonCode'
 const faqs = [
    {
        id: 1,
        question: "Who should use the app?",
        answer: "Our app is designed for freelancers, professionals, and agencies looking to streamline their workflow, manage projects efficiently, and deliver quality results. It's ideal for anyone in need of project management and collaboration tools."
    },

    {
        id: 2,
        question: "What is included with my subscription?",
        answer: "Your subscription includes access to all the tools for project management, communication features, real-time collaboration, and unlimited access to templates, along with customer support based on your plan."
    },

    {
        id: 3,
        question: "How do I get paid?",
        answer: "Payments are processed through secure payment gateways such as PayPal, Stripe, or bank transfer. You can track your earnings directly through your account dashboard."
    },

    {
        id: 4,
        question: "Is my personal information safe?",
        answer: "Yes! We take your privacy seriously. We use encryption and secure payment methods to ensure your data and personal information are protected at all times."
    },

    {
        id: 5,
        question: "Can I use the app on multiple devices?",
        answer: "Yes! You can use the app on multiple devices such as your phone, tablet, and computer. All your data stays synced in real-time, so you can continue your work from anywhere without interruption."
    },
 ]

   

const FAQs = () => {

    const [isActiv, setIsActiv] = useState(null);

    // toogle btn to visible the answer
    const toogleAnswer = (you)=> {
       if(isActiv === you){
          setIsActiv(null)
       }
       else{
        setIsActiv(you)
       }
    }
  return (
    <div className='bg-gray-100'>
        <div className='max-w-screen-2xl container mx-auto py-20 px-5'>
            <ComonCode subheading="faqs" heading="Frequently Asked Questions"/>
        

         <div className='w-full max-w-4xl mx-auto mt-12'>
            {
                faqs.map((fa)=>(
                    <div key={fa.id} className='border border-gray-300 mb-4'>
                        {/* questions */}
                        <div onClick={() => toogleAnswer(fa.id)} className='cursor-pointer flex transition-all duration-200 bg-gray-50 hover:bg-gray-200 justify-between items-center p-4'>
                        <h3 className='text-lg font-semibold text-gray-800'>{fa.question}</h3>
                        <span className={`transform transition duration-200 text-lg font-bold ${isActiv === fa.id ? "rotate-180":""}`}>
                            {
                                isActiv === fa.id ? "-" : "+"
                            }
                        </span>
                    </div>
                     
                     {/* answers */}
                     {
                        isActiv === fa.id && (<div>
                           <p className='p-2 border-t border-gray-300'>{fa.answer}</p>
                        </div>)
                     }
                    </div>
                ))
            }
         </div>
        
        
        </div>
    </div>
  )
}

export default FAQs