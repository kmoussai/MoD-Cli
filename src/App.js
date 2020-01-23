import React from "react";
import Header from "./Components/Header";


import Home from "./Components/Home";
import Ask from "./Components/Ask";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./Components/Login";
import Register from "./Components/Register";
// import {useSelector, useDispatch} from 'react-redux'
// import isLoggedAction from "./Components/Login/LoginAction";




function App() {
	// const islogged = useSelector(state => state.islogged);
	// const dispatch = useDispatch();

	return (

		
		<Router>
			<Header />
			<Route exact path="/register" component={Register} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/" component={Home} />
			<Route exact path="/ask" component={Ask} />
		</Router>

  );
}


export default App;


