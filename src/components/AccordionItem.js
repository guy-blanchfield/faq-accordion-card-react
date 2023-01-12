import React, { useRef} from 'react'

const AccordionItem = ({itemIndex, faq, onToggle, active}) => {

  // now destructure question and answer from the faq item object
  const { question, answer } = faq

  // get a reference to the dd (the desc/content wrapper)
  // so we can get its height using scrollHeight
  const ddEl = useRef(null)

  return (
    <>
    <dt className={`accordion-dt ${active ? "active" : ""}`}>
      <button 
        onClick={onToggle} 
        type="button" 
        aria-expanded={ active ? "true" : "false" }
        aria-controls={`accordion-dd-content-${itemIndex}`}
      >
        {question}
      </button>
    </dt>
    <dd 
      ref={ddEl} 
      className="accordion-dd"
      style={
        active 
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