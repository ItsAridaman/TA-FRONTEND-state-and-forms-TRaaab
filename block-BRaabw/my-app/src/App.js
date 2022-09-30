import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {Active: []} 

  }

  HandleButton = (size) => {

    let myvalue=this.state.Active;
    console.log(`the value for it`);
    console.log(myvalue);

    this.setState({
      Active:myvalue.push(size),
    })
    console.log("..........");
    console.log(this.state.Active);

  }

  render() {
    return (
      <>
        <div className="size-button">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) =>
          (
            <button onClick={() => this.HandleButton(size)}>{size}</button>
          )
          )
          }
        </div>
      </>
    )

  }
}






export default App;
