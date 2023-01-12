import React from 'react'
import faqs from '../data/faqs'
import AccordionItem from './AccordionItem'

const Accordion = () => {
  
  return (
    <dl className="accordion-dl">
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          itemIndex={index} 
          faq={faq} 
        />
      ))}
    </dl>
  )
}

export default Accordion