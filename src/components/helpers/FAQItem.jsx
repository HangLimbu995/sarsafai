import React, { useState } from 'react'

const FAQItem = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };
    
  return (
    <div className='w-full h-full py-2 px-4 border-b bg-gray-200 rounded-md
    '>
    <h3
        className='cursor-pointer text-lg font-semibold'
        onClick={toggleFAQ}
    >
        {question}
    </h3>
    {isOpen && (
        <p className='mt-2 text-gray-600'>
            {answer}
        </p>
    )}
</div>
  )
}

export default FAQItem