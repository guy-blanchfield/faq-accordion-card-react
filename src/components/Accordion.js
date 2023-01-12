import React, { useState } from 'react'
import faqs from '../data/faqs'
import AccordionItem from './AccordionItem'

const Accordion = () => {

  // state to track which item is clicked (and is currently active)
  const [clicked, setClicked] = useState(-1)

  const handleToggle = (index) => {

    if (clicked === index) {
      return setClicked(-1)
    }
  
    setClicked(index)

  }
  
  return (
    <dl className="accordion-dl">
      {faqs.map((faq, index) => (
        <AccordionItem 
          key={index} 
          itemIndex={index} 
          faq={faq} 
          onToggle={() => handleToggle(index)} 
          active={clicked === index}
        />
      ))}
    </dl>
  )
}

export default Accordion