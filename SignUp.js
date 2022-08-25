// import React,{Component} from "react";
import './SignUp.css';
import { Link } from "react-router-dom";
import { LoginUser } from './Login';
// export class SignUp extends Component{

//   constructor(){
//     super();
//     this.state={
//       Firstname : this.Firstname,
//       Lastname : "",
//     }
//   }
//   handleSubmit(){
//       console.log("CreateButton")
//       this.setState((this.stateFirstName = this.state.Firstname))
//       console.log(this.state.Firstname);

//   }

//     render(){

//         return (
//  )
//     }
// }
// export default SignUp;
import { useRef } from "react";

const SignUp = () => {
  const inputFirst = useRef("");
  const inputLast = useRef("");
  const inputEmail = useRef("");
  const inputPass = useRef("");
  
  function handleClick(e) {

    e.preventDefault();
    // http://localhost:8089/api/suggestmegood/signUp?password=${inputPass.current.value}&firstName=${inputFirst.current.value}&lastName=${inputLast.current.value}&email=${inputEmail.current.value}
    console.log("handleClick");
    console.log(inputFirst.current.value)
    console.log(inputLast.current.value)
    console.log(inputEmail.current.value)
    console.log(inputPass.current.value)
    
    LoginUser.set(inputEmail.current.value,inputPass.current.value);
    console.log(LoginUser);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
  };
  fetch(`http://localhost:8089/api/suggestmegood/signUp?password=${inputPass.current.value}&firstName=${inputFirst.current.value}&lastName=${inputLast.current.value}&email=${inputEmail.current.value}`, requestOptions)
      .then(response =>{if(response.status === 200){
        alert("SUCCESSS")
        return response.json();     
    }else if(response.status === 408){
        alert("SOMETHING WENT WRONG")
        
    }})
      .then(data =>alert("Account registered"));
     
}

  return (
    <div>
      <div class="SignUp">
        <div className="container my-3 ">
          <form>
            <div className="container">
              <center>
                {" "}
                <h1 className="text-white my-3"> Create Account</h1>{" "}
              </center>
              <h2 className="text-white"></h2>
              <hr></hr>
              <br></br>

              <input
                type="text"
                name="firstname"
                placeholder="Firstname"
                ref={inputFirst}
                size="15"
                required
              />
              {/* <label  className="text-white"> Lastname: </label> */}
              <input
                type="text"
                name="lastname"
                ref={inputLast}
                placeholder="Lastname"
                size="15"
                required
              />

              {/* <label for="email"  className="text-white">
                <b>Email</b>
              </label> */}
              <input
                type="text"
                placeholder="Enter Email"
                ref={inputEmail}
                name="email"
                required
              />

              {/* <label for="psw"  className="text-white">
                <b>Password</b>
              </label> */}
              <input
                type="text"
                ref={inputPass}
                placeholder="Enter Password"
                name="password"
                required
              />
            </div>
            <div class="BtnRegister">
              <button
                className="btn btn-primary my-3 mx-3"
                onClick={handleClick}
              >
                Create Account
              </button>
              <Link to="/Login">
                <a href="#"> Back to Login</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
