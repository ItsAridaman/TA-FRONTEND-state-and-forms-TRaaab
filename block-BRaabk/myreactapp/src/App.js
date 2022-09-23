import React from "react";
import data from './data.json';
import Card from './card';

function App() {
    return <>
        <Header />
        <Menu />
    </>
}

function Header() {
    return <>
        <h1>Food Menu</h1>
    </>
}

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({ active: 'lunch' })

    }

    function1 = (datas) => {
        this.setState({
            active: datas,
        })
    }

    function2 = () => {
        this.setState({
            active: "",
        })

    }
    render() {

        let dataC = data.map((datas) => datas.category);
        let uniqueCategory = [...new Set(dataC)];
        let ActiveCard;

        if (this.state.active === "") {
            ActiveCard = data.map((datass) => datass);
        }
        else {
            ActiveCard = data.filter((datass) => datass.category === this.state.active);
        }

        console.log(ActiveCard);
        return (
            <>
                <div class="category-names">
                    <button onClick={this.function2}>All</button>
                    {
                        uniqueCategory.map((datas) =>
                            <button onClick={() => this.function1(datas)}>{datas}</button>
                        )}
                </div>
                <Card Infor={ActiveCard} />

            </>
        )
    }
}

export default App;