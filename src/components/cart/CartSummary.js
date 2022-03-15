import React, { Component } from "react";
import {Link} from 'react-router-dom'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from "alertifyjs";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class CartSummary extends Component {

  removeFromCart(product)
  {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName+" removed successfully")
  }

  renderEmpty()
  {
    return (
      <NavItem>
        <NavLink style={{color:"black"}}>
          Your cart is empty
        </NavLink>
      </NavItem>
    )
  }
  renderSummary()
  {
    return (
      <UncontrolledDropdown inNavbar nav>
      <DropdownToggle caret nav >
        Your cart
      </DropdownToggle>
      <DropdownMenu right>
        {
          this.props.cart.map(cartItem=>(
            <DropdownItem key={cartItem.product.id}>
             <Badge color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>X</Badge> 
            {cartItem.product.productName}
            <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))
        }
        <DropdownItem divider />
        <DropdownItem><Link to="/cart">Cart Details</Link></DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    )
  }

  render() {
    
    return (
      <div style={{listStyle:"none"}}>
        {
          this.props.cart.length>0?this.renderSummary() : this.renderEmpty()
        }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    actions:{
      removeFromCart : bindActionCreators(cartActions.removeFromCart,dispatch)
    }
  }
}

function mapStateToProps(state)
{
  return {
    cart:state.cartReducer
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
