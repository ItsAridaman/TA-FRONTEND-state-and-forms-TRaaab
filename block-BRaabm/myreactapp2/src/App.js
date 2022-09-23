import React from "react";

function Home()
{
  return <>
  <h1>hello one</h1>
  </>
}
function Contact()
{
  return <>
  <h1>hello Two</h1>
  </>
}
function About()
{
  return <>
  <h1>hello Three</h1>
  </>
}

class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state=({
      active:"" 
    })
  }

  


function1=(value)=>
{
  this.setState({
    active: value
  })
}



render()


{

  let Myvalue;
  Myvalue=this.state.active;
  console.log(Myvalue);

return (
  <>
          { ["Home", "Contact", "About"].map((value)=>
                 <button onClick={()=>this.function1(value)}>{value}</button>
                )
          }
          <div>
            <Home />
          </div>
  </>
           

           

)
}


}

export default App;