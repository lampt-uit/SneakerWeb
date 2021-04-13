import React from 'react'
import Home from './home/Home'
import Login from './auth/Login'
import Register from './auth/Register'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
const Pages = () => {
	return (
		<Switch>
			<Route path='/' exact component={Home}></Route>
			<Route path='/login' exact component={Login}></Route>
			<Route path='/register' exact component={Register}></Route>
		</Switch>
	);
};

export default Pages;
