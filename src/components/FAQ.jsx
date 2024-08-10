import React from 'react'
import FAQItem from './helpers/FAQItem'

const FAQ = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center text-center'>
            <h1>FAQ</h1>
            <h3>We're here to answer all you question.</h3>
            <p>Get the answer that you may not have understood about.</p>
            <div className='max-w-[800px] w-full h-full grid  gap-1 mt-9 place-items-center py-2 px-4 text-start'>
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />
                ))}

            </div>
        </div>
    )
}

const faqs = [
    {
        question: 'How do I order?',
        answer: 'You can place an order by visiting our contact page and filling out the form. You can also reach out to us via social media or email.'
    },
    {
        question: 'What is the delivery time?',
        answer: 'Delivery typically takes 3-5 business days, depending on your location.'
    },
    {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we ship internationally. Please contact us for shipping rates and delivery times.'
    },
    {
        question: 'Can I return or exchange an item?',
        answer: 'Yes, we have a return and exchange policy. Please visit our returns page for more information.'
    }
];

export default FAQ