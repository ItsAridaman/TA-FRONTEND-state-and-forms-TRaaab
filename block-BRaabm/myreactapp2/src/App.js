import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = (
      {
        email: "",
        password: "",
        errors: {
          email: "",
          password: ""
        }
      }
    )
  }

  validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  Eventhandle = ({ target }) => {

    let { name, value } = target;
    let error = this.state.errors

    switch (name) {
      case 'email':
        error.email = this.validateEmail(value) ? "" : "Invalid email";
        break;
      case 'password':
        error.password = value.length < 6 ? "Invalid password" : "";
        break;
      default:
        break;
    }

    this.setState({
      error, [name]: value
    })
  }




  render() {
    let { email, password } = this.state.errors;
    return (
      <>
        <div class="main-div">
          <h1>Form</h1>
          <form class="form">

          <label>Name</label>
            <input
              type="text"
              placeholder="type your name here"
              value={this.state.email}
              name="email"
              onChange={this.Eventhandle}
              class={email ? "error" : ""}
            ></input>
            <span>{email}</span>

            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              name="password"
              onChange={this.Eventhandle}
              class={password ? "error" : ""}
            ></input>
            <span>{password}</span>

            <input type="submit"></input>
          </form>
        </div>
      </>
    )
  }


}

// function Home() {
//   return <>
//     <h1>This is Homepage</h1>
//   </>
// }
// function Contact() {
//   return <>
//     <h1>Here you will get the contact information</h1>
//   </>
// }
// function About() {
//   return <>
//     <h1>All about details</h1>
//   </>
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({
//       active: ""
//     })
//   }

//   function1 = (value) => {
//     this.setState({
//       active: value
//     })
//   }

//   function2 = (value) => {
//     switch (value) {
//       case 'Home':
//         return <Home />;
//       case 'Contact':
//         return <Contact />;
//       case 'About':
//         return <About />;
//       default:
//         return null;
//     }
//   }
//   render() {
//     return (
//       <>
//         <div class="main-div">
//           <div class="div-1">
//             {["Home", "Contact", "About"].map((value) =>
//               <button onClick={() => this.function1(value)}>{value}</button>
//             )
//             }
//           </div>
//           <div class="div-2">
//             {this.function2(this.state.active)}
//           </div>
//         </div>
//       </>




//     )
//   }


// }

export default App;