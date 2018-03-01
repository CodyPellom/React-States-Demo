import React, { Component } from 'react'
import styled from 'styled-components'
import AdminView from './AdminView'
import ShopView from './ShopView'
const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background: palevioletred;
  border: none;
  color: white;
  font-size: 1.1rem;
`

const Input = styled.input`
  border: none;
  border-bottom: #9cc 2px solid;
  margin: 10px;
  width: 400px;
  font-size: 1.2rem;
`

class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: 'A Hammer!!',
    editSaleItem: false
  }

  toggleEditSaleItem = () => {
    this.setState({ editSaleItem: !this.state.editSaleItem })
  }

  handleChange = (event) => {
      
    console.log(event.target.value)
    this.setState({itemCurrentlyOnSale: event.target.value})
  }
toggleAdminView = () => {
    this.setState({adminVie: !this.state.AdminView})

}
  render () {
    return (
      <div>
        <h1>Less is More Hardware Store</h1>
        <div>Currently On Sale: {this.state.itemCurrentlyOnSale}!</div>
        <div>
          {this.state.editSaleItem
            ? <Input
              type="text" name="itemCurrentlyOnSale"
              value={this.state.itemCurrentlyOnSale}
              onChange={this.handleChange}
            />
            : null}
        </div>
        <Button onClick={this.toggleEditSaleItem}>
          { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
        </Button>
        {this.state.AdminView ? <AdminView/> : <ShopView/>}
        <Button onClick={this.changeView}
      </div>
    )
  }
}

export default HomePage

// Make sure input is tied to this.state.itemCurrentlyOnSale
// When we change the value on input, the state gets updated


// some conditional ? return when true : return when false