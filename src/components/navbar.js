import PropTypes from 'prop-types'
import React from 'react'
import {
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link } from 'gatsby'

const Navbar1 = ({ siteTitle }) => (
  <div   
  style={{
    background: `red`,
    padding: `1.45rem 1.0875rem`,
    marginBottom: `1.45rem`,
    marginTop: `0`,
  }}>
  <Nav pills>
    <NavItem>
      <NavLink href="/page-2/" active>
        <Link to="/page-2/"  style={{
            color: `white`,
            textDecoration: `none`,
        }}>
          Link to Page
        </Link>
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#">Another Link</NavLink>
    </NavItem>
    <NavItem>
      <NavLink disabled href="#">Disabled Link</NavLink>
    </NavItem>
  </Nav>
</div>
)

Navbar1.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar1.defaultProps = {
  siteTitle: ``,
}

export default Navbar1
