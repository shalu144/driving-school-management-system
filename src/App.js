import React, { Component } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './screens/Login';
import "./App.css";



class App extends Component {
render() {
const myStyle={
		backgroundImage: "url(/image.png)",
		height:'100vh',
		marginTop:'-70px',
		fontSize:'50px',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	};
	return (
  //   <Router> 
  //   <Routes>
  //     <Route exact path="login" element={<Login/>}/>
  //   </Routes>
  // </Router>
	<div style={myStyle} >
		<h3>Motor Driving School Management</h3><tr> 
    </tr> 
      
    <h4> Admin</h4> 
      <h4> Student</h4>
    
	</div>
  
	);
}
}
document.body.style.backgroundColor="pink"; 

export default App;
