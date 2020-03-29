import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Damian Dembicki" />

    {/* Navbar here */}

    <Layout title="Take a look at some of my projects">
        <h2>Hello my people</h2>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
    </Layout>

    <Layout title="A few words about me" background="red">
        <h2>Hello my people</h2>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
    </Layout>

    <Layout title="Contact me if you are interested in">
        <h2>Hello my people</h2>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
    </Layout>

  </>
)

export default IndexPage
