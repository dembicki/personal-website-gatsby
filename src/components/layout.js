/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import { Container } from 'react-bootstrap'

const Layout = ({ children, title, fluid, bgSrc}) => {
  let titleText = title;

  if(fluid) return (
    <>
      <div 
        style={{
          border: `1px solid red`,
          height: `100vh`,
          backgroundImage: `url(${bgSrc})`,
          backgroundSize: `cover`,
        }}
      >
        <section>{children}</section>
      </div>
    </>
  )
  else return(
    <>
    <Container 
      style={{
        border: `1px solid red`,
        height: `100vh`,
        width:``,
      }}
    >
      <section>{children}</section>
    </Container>
  </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
