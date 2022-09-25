import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = (
      {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        Date: "",

        errors: {
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          Date: ""
        }
      }
    )
    this.fileInput = React.createRef();
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
      case 'username':
        error.username = value.length < 4 ? "username cant be less than 4 characters" : "";
        break;
      case 'email':
        error.email = this.validateEmail(value) ? "" : "Invalid email";
        break;
      case 'password':
        error.password = value.length < 6 ? "Invalid password" : "";
        break;
      case 'confirmPassword':
        error.confirmPassword = (value === this.state.password) ? "" : "Password didn't match";
        break;
      case 'Date':
        error.Date = (value) ? "" : "Select date";
        break;
      default:
        break;
    }


    this.setState({
      error, [name]: value
    })
  }

  render() {
    let { username, email, password, confirmPassword, Date } = this.state.errors;
    return (
      <>
        <div class="main-div">
          <h1>Form</h1>
          <form className="form">

            <label>Username</label>
            <input
              type="text"
              placeholder="type username"
              value={this.state.username}
              name="username"
              onChange={this.Eventhandle}
              className={username ? "error" : ""}
            ></input>
            <span>{username}</span>

            <label>Email</label>
            <input
              type="text"
              placeholder="type your name here"
              value={this.state.email}
              name="email"
              onChange={this.Eventhandle}
              className={email ? "error" : ""}
            ></input>
            <span>{email}</span>

            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              name="password"
              onChange={this.Eventhandle}
              className={password ? "error" : ""}
            ></input>
            <span>{password}</span>

            <label>Confirm password</label>
            <input
              type="password"
              placeholder="Password"
              value={this.state.confirmPassword}
              name="confirmPassword"
              onChange={this.Eventhandle}
              className={confirmPassword ? "error" : ""}
            ></input>
            <span>{confirmPassword}</span>

            <label>Date</label>
            <input
              type="Date"
              value={this.state.Date}
              name="Date"
              onChange={this.Eventhandle}
              className={Date ? "error" : ""}
            ></input>
            <span>{Date}</span>

            <input
              type="file"
              ref={this.fileInput}
            ></input>

            <label>Read-only input</label>
            <input
              type="Text"
              value="hi this is shubham here..."
              name="Readonly"
              readonly
            ></input>

            <label>Disabled input</label>
            <input
              type="Text"
              name="DisabledInput"
              disabled
            ></input>


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