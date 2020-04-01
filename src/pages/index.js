import React from "react"

// components
import SEO from "../components/seo"

//sections
import Hero from '../sections/hero'
import Portfolio from '../sections/Portfolio'
import About from '../sections/About'
import Contact from '../sections/Contact'


const IndexPage = () => {
  
  return (
    <>
      <SEO title="Damian Dembicki" />
      {/* Hero section */}
      <Hero />

      {/* Portfolio section */}
      <Portfolio />

      {/* About me section */}
      <About />
      {/* Contact section */}

      <Contact />
    </>
  )
}
export default IndexPage
