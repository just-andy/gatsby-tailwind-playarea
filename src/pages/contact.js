import React from "react"
import Layout from "../components/Layout"
import Form from "../components/modules/ContactForm"
import Map from "../components/modules/MapInfo"
import Hero from '../components/modules/HeroBanner'
import SEO from "../components/SEO"
import OpeningHours from '../components/elements/OpeningHours'


export default () => (
  <Layout>
    <SEO title="Contact Just Salons" description="How to contact Just salons" />
    <Hero alt="group in hair salon" filename="salon" title="Book an appointment with one team today" label="Book Now" link="/contact"/>
<section className="container">
    <h1>Contact</h1>

    <p className="lead">Whether it is your contact details, dropping a message or trying to find your salon this is the page to do it. Aside from pricelists this is one of the most trafficked pages on the site.</p>
   
   <p>It is a great location to call out things like free parking, when you handle correspondance. It's also a good place to set an initial tone about your business, so think about how you word your replies.</p>

  <hr className="mt-4 mb-6" /> 

    <div className="md:flex">   
    
      <div className="w-full md:w-1/2 md:mr-4">
     
      <p>For any enquiries please complete for form below. We do our best to get back to you within one business day. <b>Note:</b> all fields are required.</p> 
        <Form />
        <h3>Opening Hours</h3>
        <ul className="flex flex-col justify-between mb-8">
            <OpeningHours />
        </ul>
      </div>
      <div className="w-full md:w-1/2 md:ml-4">
        <Map />
      </div>
    </div>
    </section>
  </Layout>
)

