// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// import "reactjs-popup/dist/index.css";
// import "./LoginPop.css";
// export class LoginPop extends Component {
//   render() {
//     return (
// <div className="container  my-3">
//   <div className="container bg-light" class="LoginForm">
//     <Link to="/">
//       <a href="" className="text-Primary container">
//         <button className="btn btn-primary">Back</button>
//       </a>
//     </Link>
//     <form>
//       <h1 className="text-center ">
//         <b>Login </b>{" "}
//       </h1>

//       <div class="container">

//         <input
//           type="text"
//           placeholder="Enter gmail"
//           name="username"
//           required
//         />

//         <input
//           type="password"
//           placeholder="Enter password"
//           name="password"
//           required
//         />
//         <button type="button" className="btn btn-primary container my-3">
//           Login
//         </button>
//         Forgot__<a href="#">password? </a>
//         <Link to="/SignUp">
//           <button type="submit" className="btn btn-primary mx-3 my-3">
//             CreateAccount
//           </button>{" "}
//         </Link>
//       </div>
//     </form>
//   </div>
// </div>
//     );
//   }
// }
// export default LoginPop;
import { useRef } from "react";
import "./LoginPop.css";
import { Link } from "react-router-dom";
import { LoginUser } from "./Login";
const Login = () => {
   const inputEmail = useRef(null);
   const inputPass = useRef(null);
 
  const Check = (e)=>{
    e.preventDefault();
    console.log(inputEmail.current.value);
    console.log(inputPass.current.value);
  
      if(LoginUser.has(inputEmail.current.value)){

        if(LoginUser.keys(inputEmail.current.value) == inputPass.current.value){
          console.log("Login successfully");
        }
        else{
          console.log("Wrong Password ");
        }
      }
      else{
        console.log("User not found");
      }
  //   const requestOptions = {
  //     mode:'cors',
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ title: 'React POST Request Example' })
  // };
  // fetch(`http://localhost:8089/api/suggestmegood/validate?password=${inputPass.current.value}&email=${inputEmail.current.value}`, requestOptions)
  //     .then(response =>{if(response.status === 200){
  //       alert("SUCCESSS")
  //       return response.json();     
  //   }else if(response.status === 408){
  //       alert("SOMETHING WENT WRONG")
        
  //   }})
  //     .then(data =>alert("Account registered"));
     
    
  }
  

  return (
    <div className="container  my-3">
      <Link to="/">
      <a href="" className="text-Primary container">
         <button className="btn btn-primary">Back</button>
       </a>
     </Link>
    <div className="container my-3 mx-3">
    <form>
      <h1 className="text-white my-3  mx-3">LoginForm</h1>
  <div className="form-group my-3  mx-3 text-white">
    <label for="exampleInputEmail1">Email address</label>
    <input   ref = {inputEmail}type="email" className="form-control my-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group my-3 mx-3 text-white">
    <label for="exampleInputPassword1">Password</label>
    <input ref={inputPass} type="password" className=" my-3 form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
  <button type="submit" className=" my-3 btn btn-primary mx-3" onClick={Check}>Login</button>
      </form>
    </div>
    <Link to="/SignUp">
           <button type="submit" className="btn btn-primary mx-3 my-3">
             CreateAccount
           </button>
        </Link>
    </div>
  );
};

export default Login;
