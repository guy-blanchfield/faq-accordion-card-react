import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Accordion from './Accordion'

// import the illustration
import illustrationWomanOnlineMobile from '../images/illustration-woman-online-mobile.svg'

const App = () => {

  const title = 'Frontend Mentor | FAQ Accordion Card'

  return (
    <div className="app-container">
      
      <Header title={title} />

      <main className="container">

        <section className="faq">

          <div className="faq-illustration">
          
          <picture>
            <source 
              srcSet={illustrationWomanOnlineMobile}
              media="(min-width: 992px)" />
            <img src={illustrationWomanOnlineMobile} alt="woman online" />
          </picture>

          
          </div>

          <div className="faq-faqs">
        
            <h2><abbr title="Frequently Asked Questions">FAQ</abbr></h2>

            <Accordion />

          </div>

        </section>

      </main>
      
      <Footer />

    </div>
  )
}

export default App
