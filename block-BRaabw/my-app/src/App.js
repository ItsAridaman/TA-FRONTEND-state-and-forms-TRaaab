import React from "react";
import Sidebar from "./Sidebar"
import Main from "./Main"
import Cart from "./Cart"

import products from "./data.json"


// function App() {
//   return (
//     <>
//       <Sidebar products={products.products} />
//       <Main products={products.products} />
//     </>

//   )
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      clickedButton: [],
      cartItems: []
    })
  }


  HandleRemoveItem = (value) => {
    console.log(value.id)

    this.setState((prevState) => {
      let updatedItemsCart = prevState.cartItems.filter((item) => {
        return item.id !== value.id;
      });
      return {
        cartItems: updatedItemsCart
      };
    }
    );

    // this.state.cartItems[ItemIndex].remove();
  };

  HandleCart = (value) => {
    let Present = this.state.cartItems.find((p) => p.id === value.id)

    if (Present) {
      this.HandleIncrement(Present)
    }

    else {
      this.setState((prevState) => ({
        cartItems: prevState.cartItems.concat({ ...value, quantity: 1 })
      })
      )
    }

  }

  HandleIncrement = (props) => {
    this.setState((prevState) => {
      let updatedItems = prevState.cartItems.map((items) => {
        if (items.id === props.id) {
          return {
            ...items, quantity: items.quantity + 1,
          }
        }
        return items;
      })
      return {
        cartItems: updatedItems
      }
    })
  }

  HandleDecrement = (props) => {
    this.setState((prevState) => {
      let updatedItems = prevState.cartItems.map((items) => {
        if (items.id === props.id && items.quantity > 1) {
          return {
            ...items, quantity: items.quantity - 1,
          }
        }
        return items;
      })
      return {
        cartItems: updatedItems
      }
    })
  }

  HandleButtonClick = (size) => {

    if (this.state.clickedButton.includes(size)) {
      this.setState((prevState) => ({
        clickedButton: prevState.clickedButton.filter((value) => value !== size)
      })
      )
    }
    else {
      this.setState((prevState) => ({
        clickedButton: prevState.clickedButton.concat(size)
      })
      )
    }
    console.log(this.state.clickedButton)
  }

  render() {

    return (
      <>
        <div className="heading-div">
          <h className="heading">SHOPPING CART</h>
        </div>
        <div className="container">
          <div className="container-part-1">
            <h className="size-heading">Select Size</h>

            <Sidebar products={products.products} clickedButton={this.state.clickedButton} HandleButtonClick={this.HandleButtonClick} />
          </div>
          <div className="container-part-2">
            <Main products={products.products} clickedButton={this.state.clickedButton} HandleCart={this.HandleCart} cartItems={this.state.cartItems} />

          </div>
          <div className="container-part-3">
            <Cart cartItems={this.state.cartItems} HandleRemoveItem={this.HandleRemoveItem} HandleIncrement={this.HandleIncrement} HandleDecrement={this.HandleDecrement} />

          </div>

        </div>
      </>
    )
  }
}

export default App;
