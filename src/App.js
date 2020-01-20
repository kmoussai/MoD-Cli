import React from "react";
import Header from "./Components/Header";


import Home from "./Components/Home";
import Ask from "./Components/Ask";
import {BrowserRouter as Router, Route} from "react-router-dom"



function App() {

  return (
	<Router>
		<div className="App">
			<Header />
		  	<Route exact path="/" component={Home} />
		  	<Route exact path="/ask" component={Ask} />

		</div>
	</Router>
	
  );
}


export default App;
