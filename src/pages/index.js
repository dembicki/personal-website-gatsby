import React from "react"


// components
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Project from "../components/project"
import Header from "../components/header"
import HeroText from "../components/heroText"

//sections
import Hero from '../sections/hero'
import Portfolio from '../sections/Portfolio'
import About from '../sections/About'
import Contact from '../sections/Contact'


// images

import heroImage from "../images/hero-image.png"

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
