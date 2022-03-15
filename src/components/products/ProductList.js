import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Button, Table } from 'reactstrap'
import {bindActionCreators} from 'redux'
import * as productActions from '../../redux/actions/productActions'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'

class ProductList extends Component {
  componentDidMount()
  {
    this.props.actions.getProducts();
  }

  addToCart=(product)=>{
    alertify.success(product.productName+' Added to cart successfully')
    this.props.actions.addToCart({quantity:1,product})
  }

  render() {
    return (
      <div>        
        <Badge color='success'>
          Product
        </Badge>
        <Badge color='warning'>
          {this.props.currentCategory.categoryName}
        </Badge>
        <Table>
          <thead>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units in Stock</th>
            <th>Add To Cart</th>
          </thead>
          <tbody>
            {this.props.products.map(product=>(
                <tr key={product.id}>
                  <th scope='row'>{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitsInStock}</td>
                  <td><Button color='success' onClick={()=>this.addToCart(product)}>Add</Button></td>
                </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}
function mapStateToProps(state)
{
  return {
    currentCategory:state.changeCategoryReducer,
    products:state.productListReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions:{
      getProducts:bindActionCreators(productActions.getProducts,dispatch),
      addToCart:bindActionCreators(cartActions.addToCart,dispatch)
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductList)
