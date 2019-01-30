import PropTypes from 'prop-types'
import React from 'react'
import {Container} from 'reactstrap'

const Footer = ({ siteTitle }) => (
  <Container
    style={{
      background: `white`,
      padding: `0`,
      position: `absolute`,
      bottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    </div>
  </Container>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
