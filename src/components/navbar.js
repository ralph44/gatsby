import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Navbar = ({ siteTitle }) => (
  <div
    style={{
      background: `red`,
      opacity: `0.5`,
      padding: `1.45rem 1.0875rem`,
      marginBottom: `1.45rem`,
      marginTop: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
      >
      <a style={{ }}>
        <Link
          to="/page-2/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
            home
        </Link>
      </a>
      <a style={{marginLeft: `3rem`}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          about me
        </Link>
      </a>
      <a style={{marginLeft: `3rem`}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
            projects
        </Link>
      </a>
    </div>
  </div>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
