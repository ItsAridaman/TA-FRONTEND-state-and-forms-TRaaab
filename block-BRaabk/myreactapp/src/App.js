import React from "react";
import data from './data.json';

function App() {
    return <>
        <Header />
        <Menu />
    </>
}


function Header() {
    return <>
        <h1>Hello there...</h1>
    </>
}

let dataC = data.map((datas) => datas.category);
const uniqueCategory = [...new Set(dataC)]

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({ active: 'lunch' })

    }

    function1 = (datas) => {
        this.setState({
            active:datas
        })
      }
    render() {

        return (
            <>
                <button>All</button>
                {
                    uniqueCategory.map((datas) =>
                        <button onClick={() => this.function1(datas)}>{datas}</button>
                    )}
            </>
        )
    }
}

export default App;