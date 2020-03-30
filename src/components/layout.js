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

const Layout = ({ children, title , bg}) => {
  let titleText = title;
  let background = bg;
  console.log(background);

  return (
    <>
      <Header title={titleText} />
      <Container
        style={{
          border: `1px solid red`,
          height: `81vh`,
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
