import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from "axios";
import React, { Component } from 'react';
import ThirdPage from './ThirdPage';
import Register from './Register';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  isLogin:true,
  isLoginSuccess:true
  }
 }
render() {
return(
<div className="loginscreen">
        
        <div>
          
          <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Go To 3rd Page" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Go To 3rd Page 1" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
        </div>
      </div>
);

   /* return (
      <div class="thirdpage">
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Go To 3rd Page" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Go To 3rd Page 1" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );*/
  }

handleClick(event){

  alert("Going to new page");
  //var uploadScreen=[];
  //uploadScreen.push(<UploadScreen/>)
  //self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})

  //if(this.state.isLogin){
    alert("Third Page");
    var thirdpage=[];
    thirdpage.push(<ThirdPage parentContext={this}/>);
    var loginmessage = "Not Registered yet. Go to registration";
    this.setState({
                   thirdpage:thirdpage,
                   loginmessage:loginmessage,
                   buttonLabel:"Register",
                   isLogin:false,
                   isLoginSuccess:true
                 })
  /*}else{
    alert("Register Page");
    var loginscreen=[];
    loginscreen.push(<Register parentContext={this}/>);
    var loginmessage = "Not Registered yet. Go to registration";
    this.setState({
                   loginscreen:loginscreen,
                   loginmessage:loginmessage,
                   buttonLabel:"Register",
                   isLogin:true,
                   isLoginSuccess:false
                 })
  }
*/
}


}
const style = {
 margin: 15,
};
export default Login;