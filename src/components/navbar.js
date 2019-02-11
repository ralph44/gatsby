import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand,  Nav, NavItem, NavLink } from 'reactstrap';

export default class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      "title": "Lennard"
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="clearfix">
        <Navbar color="faded" light className="cleafix">
        <NavbarBrand href="/">{this.props.title}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/page-2/">Lebenslauf</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/ralph44">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
