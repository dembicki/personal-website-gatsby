import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ title }) => (
  <header
    style={{
      marginTop: `1.5rem`,
      marginBottom: `1.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ 
        margin: 0, 
        textAlign: "center",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize: `1.4rem`,
        color: `black`,
        }}>
          {title}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: `Title is very important`,
}

export default Header
