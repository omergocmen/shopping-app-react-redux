import React, { Component } from 'react'
import { Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,NavItem,NavLink} from 'reactstrap'
import CartSummary from '../cart/CartSummary'

export default class Navi extends Component {
  render() {
    return (
      <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      Reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="">
            Components
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
    <CartSummary />
  </Navbar>
</div>
    )
  }
}
