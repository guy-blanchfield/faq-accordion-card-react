import React, { useState, useRef} from 'react'

const AccordionItem = ({itemIndex, faq}) => {

  // now destructure question and answer from the faq item object
  const { question, answer } = faq

  // state to track which item is clicked (and is currently active)
  const [clicked, setClicked] = useState(false)

  // get a reference to the dd (the desc/content wrapper)
  // so we can get its height using scrollHeight
  const ddEl = useRef(null)

  const handleToggle = () => {

    setClicked(prevClicked => !prevClicked)

  }

  return (
    <>
    <dt className={`accordion-dt ${clicked ? "active" : ""}`}>
      <button 
        onClick={handleToggle} 
        type="button" 
        aria-expanded={ clicked ? "true" : "false" }
        aria-controls={`accordion-dd-content-${itemIndex}`}
      >
        {question}
      </button>
    </dt>
    <dd 
      ref={ddEl} 
      className="accordion-dd"
      style={
        clicked 
        ? { height: ddEl.current.scrollHeight }
        : { height: "0px" }
      }
    >
      <div id={`accordion-dd-content-${itemIndex}`} className="accordion-desc">{answer}</div>
    </dd>
    </>
  )
}

export default AccordionItem