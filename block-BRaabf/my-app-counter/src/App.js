import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, gap: 5, limit: "" };
  }

  HandleClickAdd = () => {
    if (this.state.limit === "") {
      this.setState({
        counter: this.state.counter + this.state.gap
      })
    }

    else if (this.state.counter < this.state.limit) {
      this.setState({
        counter: this.state.counter + this.state.gap
      })
    }
  }

  HandleClickSubtract = () => {
    this.setState({
      counter: this.state.counter - this.state.gap,
    })
  }

  HandleClickReset = () => {
    this.setState({
      counter: 0,
    })
  }
  render() {

    return (

      <>
        <div>
<h5>Counter App</h5>

          <div class="main-div">
            <h1>{this.state.counter}</h1>

            <div class="div-1">

              <div class="div-1-a">
                <h3>Steps</h3>
                {[5, 10, 15].map((gap) =>
                  <button class={this.state.gap === gap ? "active" : ""} onClick={() => {
                    this.setState({
                      gap: gap
                    })
                  }

                  }>{gap}</button>)}
              </div>
              <div class="div-2-a">
                <h3>Max value</h3>
                {[15, 30, 45].map((limit) =>
                  <button class={this.state.limit === limit ? "active" : ""} onClick={() => {
                    this.setState({
                      limit: limit
                    })
                  }

                  }>{limit}</button>)}
              </div>
            </div>
            <div class="div-2">
              <button class="button-1" onClick={this.HandleClickAdd}>Increment</button>
              <button class="button-1" onClick={this.HandleClickSubtract} >Decrement</button>
              <button class="button-1" onClick={this.HandleClickReset} >Reset</button>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default App