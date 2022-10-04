import React from "react"
import Select from "./Select"

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectInfo: "", }
    }

    HandleSelect = (event) => {
        this.setState({
            selectInfo: event.target.value
        });
    }

    // OrderProducts = (order,button, products) => {
    //     if (order === 'highest') {
    //         products = [...products].sort((a, b) => b.price - a.price)
    //     }
    //     else if (order === 'lowest') {
    //         products = [...products].sort((a, b) => a.price - b.price)
    //     }
    //     return products;
    // }

    OrderProducts = (order, InputButtons, products) => {

        let Filteredproducts = [...products];
        if (InputButtons.length === 0) {

            if (order === 'highest') {
                Filteredproducts = Filteredproducts.sort((a, b) => b.price - a.price)
            }
            else if (order === 'lowest') {
                Filteredproducts = Filteredproducts.sort((a, b) => a.price - b.price)
            }
            return Filteredproducts;
        }

        Filteredproducts = Filteredproducts.filter((product) => {

            for (const buttons of InputButtons) {
                if (product.availableSizes.includes(buttons)) {
                    return true;
                }
            }
        }
        );

        if (order === 'highest') {
            Filteredproducts = Filteredproducts.sort((a, b) => b.price - a.price)
        }
        else if (order === 'lowest') {
            Filteredproducts = Filteredproducts.sort((a, b) => a.price - b.price)
        }
        return Filteredproducts;
    }

    render() {

        let MyPoducts = this.OrderProducts(this.state.selectInfo, this.props.clickedButton, this.props.products);
        return (
            <>
            <div className="main-part-1-div">
            <div className="main-part-1-div-a">
                <label>Sort by:</label>
                    <Select selectInfo={this.state.selectInfo} HandleSelect={this.HandleSelect} />
                </div>

                <div>
                    <h6>{MyPoducts.length} Product's found</h6>
                </div>
                
            </div>
            <hr className="items-hr"></hr>
           
               
                <div className="items-main-div">
                    {
                        MyPoducts.map((value) => (
                            <ItemsUI {...value} HandleCart={this.props.HandleCart} />
                        )
                        )
                    }
                </div>

            </>
        )
    }
}

function ItemsUI(props) {

    return (
        <>
            <div className="item-box-div">
                <img src={`/static/products/${props.sku}_1.jpg`} alt="myimage" />
                <div className="adjust-1">
                <h1>{props.title}</h1>
                <h2>Price: {props.currencyFormat}{props.price}</h2>
                </div>
                
                <button className="item-button" onClick={() => props.HandleCart(props)}>Add to cart</button>
            </div>
        </>
    )
}

export default Main