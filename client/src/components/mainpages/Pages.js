import React from 'react';
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Product from './product/Product';
import DetailProduct from './detailProduct/DetailProduct';
import { Switch, Route } from 'react-router-dom';
import NotFound from './utils/Not_Found/NotFound'
import Cart from './cart/Cart';
const Pages = () => {
	return (
		<Switch>
			<Route path='/' exact component={Home}></Route>
			<Route path='/login' exact component={Login}></Route>
			<Route path='/register' exact component={Register}></Route>
			<Route path='/product' exact component={Product}></Route>
			<Route path='/detail' exact component={DetailProduct}></Route>
			<Route path='/cart' exact component={Cart}></Route>
			<Route path='/found' exact component={NotFound}></Route>
		</Switch>
	);
};

export default Pages;
