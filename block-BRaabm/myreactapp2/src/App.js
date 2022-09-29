import React from "react";


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = ({
      step: "1",
      firstname: "",
      lastname: "",
      Dateofbirth: "",
      emailaddress: "",
      address: "",
      message: "",
      messagecheckbox: ""
    })
  }

  HandleChange = ({ target }) => {
    let { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  HandleSubmit = (event) => {
    event.preventDefault()
    let { firstname, message, password } = this.state;
    alert(`Your Name :${firstname}, Message:${message}, Password:${password}`)
  }


  NextF = () => {
    let step = this.state.step
    step = step >= 2 ? 3 : Number(step) + 1
    this.setState({
      step: step
    })
  }

  PreviousF = () => {
    let currentStep = this.state.step
    currentStep = currentStep - 1
    console.log("hello this is  shubham")
    console.log(currentStep)
    this.setState({
      step: currentStep
    })
  }

  HandleCheckbox = (event) => {
    console.log(event.target.value)
    this.setState({
      messagecheckbox: event.target.value
    })
  }


  render() {
    return (
      <>
        <div className="container">

          <div className="main-div-a">
            <img src="download44.webp" alt="myimage" />
          </div>
          <div className="main-div">

            <div className="active-step">
              <div className="active-step-div">
                <span className={this.state.step >= 1 ? "Active" : "inactive"}>1</span>
                Signup
              </div>
              <div className="active-step-div">
                <span className={this.state.step >= 2 ? "Active" : "inactive"}>2</span>
                Message
              </div>
              <div className="active-step-div">
                <span className={this.state.step === 3 ? "Active" : "inactive"}>3</span>
                Checkbox
              </div>


            </div>
            <hr></hr>
            <p>Step {this.state.step}</p>

            <form onSubmit={this.HandleSubmit}>
              <FunctionStep1 step={this.state.step}
                HandleChange={this.HandleChange}
                username={this.state.username} NextF={this.NextF} />
              <FunctionStep2 step={this.state.step}
                HandleChange={this.HandleChange}
                name={this.state.name} NextF={this.NextF} PreviousF={this.PreviousF} HandleCheckbox={this.HandleCheckbox} />
              <FunctionStep3 step={this.state.step}
                HandleChange={this.HandleChange}
                password={this.state.password} NextF={this.NextF} PreviousF={this.PreviousF} />
            </form>
          </div>

        </div>

      </>
    )
  }
}


function FunctionStep1(props) {
  console.log(props.step)
  if (props.step == 1) {
    return (
      <>
        <h2>Sign Up</h2>
        <div className="signup">
          <div class="signup-inside">
            <label>First name</label>
            <input type="text"
              name="firstname"
              placeholder="first name"
              value={props.firstname}
              onChange={props.HandleChange} />
          </div>

          <div class="signup-inside">
            <label>Last name</label>
            <input type="text"
              name="lastname"
              placeholder="last name"
              value={props.lastname}
              onChange={props.HandleChange} />
          </div>

          <div class="signup-inside">
            <label>Date of birth</label>
            <input type="Date"
              name="dateofbirth"
              value={props.Dateofbirth}
              onChange={props.HandleChange} />
          </div>

          <div class="signup-inside">
            <label>Email</label>
            <input type="Email"
              name="email"
              placeholder="type email address"
              value={props.email}
              onChange={props.HandleChange} />
          </div>

        </div>
        <div className="address-div">
          <label>Address</label>
          <input type="text"
            name="address"
            placeholder="Address"
            value={props.address}
            onChange={props.HandleChange} />
        </div>
        <button onClick={props.NextF}>next</button>
      </>
    )
  }
  else {
    return null
  }


}

function FunctionStep2(props) {
  if (props.step != 2) {
    return null
  }
  return (
    <>
      <div className="message-div-main">
        <h2>Message</h2>
        <div className="main-message">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="type your message here..."
            value={props.message}
            onChange={props.HandleChange}
          ></textarea>
        </div>


        <div className="msginput-div">
          <div className="msginput-a">
            <input onClick={props.HandleCheckbox} value="selected one" type="checkbox"></input>
            The number one choice
          </div>
          <div className="msginput-a">
            <input onClick={props.HandleCheckbox} value="selected two" type="checkbox"></input>
            The number Two choice
          </div>
        </div>

      </div>

      {/* <input type="text"
        name="name"
        placeholder="type name"
        value={props.name}
        onChange={props.HandleChange} /> */}
      <div className="in-out">
        <button className="prev-button" onClick={props.PreviousF}>Previous</button>
        <button onClick={props.NextF}>next</button>
      </div>


    </>
  )
}

function FunctionStep3(props) {
  if (props.step != 3) {
    return null
  }
  return (
    <>
    <div className="pass-div">
    <label>password</label>
      <input type="text"
        name="password"
        placeholder="type password"
        value={props.password}
        onChange={props.HandleChange} />
    </div>
     
        <div className="in-out">
        <button className="prev-button" onClick={props.PreviousF}>Previous</button>

        </div>
      <div className="signup">
        <button>Signup</button>
      </div>
    </>
  )
}







// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = (
//       {
//         username: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         Date: "",

//         errors: {
//           username: "",
//           email: "",
//           password: "",
//           confirmPassword: "",
//           Date: ""
//         }
//       }
//     )
//     this.fileInput = React.createRef();
//   }

//   validateEmail = (email) => {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
//   }

//   Eventhandle = ({ target }) => {

//     let { name, value } = target;
//     let error = this.state.errors

//     switch (name) {
//       case 'username':
//         error.username = value.length < 4 ? "username cant be less than 4 characters" : "";
//         break;
//       case 'email':
//         error.email = this.validateEmail(value) ? "" : "Invalid email";
//         break;
//       case 'password':
//         error.password = value.length < 6 ? "Invalid password" : "";
//         break;
//       case 'confirmPassword':
//         error.confirmPassword = (value === this.state.password) ? "" : "Password didn't match";
//         break;
//       case 'Date':
//         error.Date = (value) ? "" : "Select date";
//         break;
//       default:
//         break;
//     }


//     this.setState({
//       error, [name]: value
//     })
//   }

//   render() {
//     let { username, email, password, confirmPassword, Date } = this.state.errors;
//     return (
//       <>
//         <div class="main-div">
//           <h1>Form</h1>
//           <form className="form">

//             <label>Username</label>
//             <input
//               type="text"
//               placeholder="type username"
//               value={this.state.username}
//               name="username"
//               onChange={this.Eventhandle}
//               className={username ? "error" : ""}
//             ></input>
//             <span>{username}</span>

//             <label>Email</label>
//             <input
//               type="text"
//               placeholder="type your name here"
//               value={this.state.email}
//               name="email"
//               onChange={this.Eventhandle}
//               className={email ? "error" : ""}
//             ></input>
//             <span>{email}</span>

//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Password"
//               value={this.state.password}
//               name="password"
//               onChange={this.Eventhandle}
//               className={password ? "error" : ""}
//             ></input>
//             <span>{password}</span>

//             <label>Confirm password</label>
//             <input
//               type="password"
//               placeholder="Password"
//               value={this.state.confirmPassword}
//               name="confirmPassword"
//               onChange={this.Eventhandle}
//               className={confirmPassword ? "error" : ""}
//             ></input>
//             <span>{confirmPassword}</span>

//             <label>Date</label>
//             <input
//               type="Date"
//               value={this.state.Date}
//               name="Date"
//               onChange={this.Eventhandle}
//               className={Date ? "error" : ""}
//             ></input>
//             <span>{Date}</span>

//             <input
//               type="file"
//               ref={this.fileInput}
//             ></input>

//             <label>Read-only input</label>
//             <input
//               type="Text"
//               value="hi this is shubham here..."
//               name="Readonly"
//               readonly
//             ></input>

//             <label>Disabled input</label>
//             <input
//               type="Text"
//               name="DisabledInput"
//               disabled
//             ></input>


//             <input type="submit"></input>
//           </form>
//         </div>
//       </>
//     )
//   }


// }

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