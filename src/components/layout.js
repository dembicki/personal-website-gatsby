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

const Layout = ({ children, title , bg}) => {
  let titleText = title;
  let background = bg;
  console.log(background);

  return (
    <>
      <Header title={titleText} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
          border: `1px solid red`,
          display: `flex`,
          height: `81vh`,
        }}
      >
        <section>{children}</section>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Layout
