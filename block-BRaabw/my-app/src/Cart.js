// function Cart(props) {
//     let totalamount = props.cartItems.reduce((acc, cv) => {
//         acc = Number(acc) + Number(cv.price)
//         return acc;
//     }, "")
//     console.log(totalamount);
//     return (
//         <>
//             <div>
//                 <h5>Your cart</h5>
//                 <p>Item in your Cart:{props.cartItems.length}</p>
//                 <div>
//                     {
//                         props.cartItems.map((value) =>
//                             <CartItemsUI HandleIncrement={props.HandleIncrement} HandleDecrement={props.HandleDecrement} value={value} />
//                         )
//                     }
//                 </div>
//                 <div>
//                     <h7>Subtotal</h7>

import React from "react";

//                     <h8>{totalamount}</h8>
//                 </div>

//                 <div>Checkout</div>
//             </div>
//         </>
//     )
// }



// function CartItemsUI(props) {
//     return <>

//         <div>
//             <div>
//                 <img src={`/static/products/${props.value.sku}_1.jpg`} alt="gdf" />
//             </div>
//             <div>
//                 <h6>{props.value.title}</h6>
//                 <span>{props.value.style}</span>
//                 <span>{props.value.quantity}</span>
//             </div>
//             <div>
//                 <span>{(props.value.price) * (props.value.quantity)}</span>
//                 <div>
//                     <span className="hello" onClick={() => props.HandleIncrement(props.value)}>+</span>
//                     <span className="hello" onClick={() => props.HandleDecrement(props.value)}>-</span>
//                 </div>
//             </div>
//         </div>

//     </>
// }

// export default Cart



class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    Handlecartclick = () => {
        this.setState({
            isOpen: !(this.state.isOpen)
        })
    }

    render() {
        let totalamount = this.props.cartItems.reduce((acc, cv) => {
            acc = Number(acc) + Number(cv.price)
            return acc;
        }, "")
        console.log(totalamount);

        if (this.state.isOpen === false) {
            return <CartIcon count={this.props.cartItems.length} Handlecartclick={this.Handlecartclick} />
        }

        else if (this.state.isOpen === true) {
            return (
                <>
                    <div className="cart-inside-main">
                        <div className="cart-inside-out">
                            <i onClick={this.Handlecartclick} className="fa fa-close"></i>
                        </div>
                        <div className="cart-static-1">
                            <span className="cart-icon-span my-1">{this.props.cartItems.length}</span>
                            <i class="fa fa-shopping-cart"></i>
                            {/* <h5>Your cart</h5>
                            <p className="cart-p">Item in your Cart:{this.props.cartItems.length}</p> */}
                        </div>

                        <div className="cart-items-inside-items-main">
                            {
                                this.props.cartItems.map((value) =>
                                    <CartItemsUI HandleRemoveItem={this.props.HandleRemoveItem} HandleIncrement={this.props.HandleIncrement} HandleDecrement={this.props.HandleDecrement} value={value} />
                                )
                            }
                        </div>
                        <div className="cart-static-2">
                            <h7> Subtotal </h7>

                            <h8> ${totalamount} </h8>
                        </div>

                        <div className="checkout">Checkout</div>
                    </div>
                </>
            )
        }

    }
}


function CartIcon(props) {
    return (
        <div className="cart-icon-div">
            <span className="cart-icon-span">{props.count}</span>
            <i onClick={props.Handlecartclick} class="fa fa-shopping-cart"></i>
        </div>
    )
}
function CartItemsUI(props) {
    return <>
        <div className="my-cart-main">
            <div className="my-cart-main-1">
                <img className="img-cart" src={`/static/products/${props.value.sku}_1.jpg`} alt="gdf" />
            </div>
            <div className="my-cart-main-2">
                <div className="hello-1">
                    <h9>{props.value.title}</h9>
                </div>
                <div className="hello-2">
                    <span className="inside-span-h">{props.value.style}</span>
                    <span className="inside-span-h-2">Quantity: {props.value.quantity}</span>
                </div>

            </div>
            <div className="my-cart-main-3">
                <div className="hello-3">
                    ${(props.value.price) * (props.value.quantity)}
                </div>

                <div className="hello-4">
                    <span className="hello" onClick={() => props.HandleIncrement(props.value)}>+</span>
                    <span className="hello" onClick={() => props.HandleDecrement(props.value)}>-</span>
                </div>
            </div>
            <div>
            <i onClick={()=>props.HandleRemoveItem(props.value)} className="fa fa-close close-1"></i>
            </div>
        </div>
        <hr className="hr-cart">
        </hr>
    </>
}

export default Cart
















