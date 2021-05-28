import React, { useContext } from 'react';
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Product from './product/Product';
import DetailProduct from './detailProduct/DetailProduct';
import { Switch, Route } from 'react-router-dom';
import NotFound from './utils/Not_Found/NotFound';
import Cart from './cart/Cart';
import Profile from './profile/Profile';
import History from './history/OrderHistory';
import HistoryDetail from './history/OrderDetails';
import ForgotPassword from './forgotPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword';
import AdminProducts from './adminProducts/AdminProducts';
import AdminPayments from './adminPayments/AdminPayments';
import AdminCustomers from './adminCustomer/AdminCustomer.js';
import AdminCategory from './adminCategory/AdminCategory';

import { GlobalState } from '../../GlobalState';
const Pages = () => {
	const state = useContext(GlobalState);
	const [isLogged] = state.userAPI.isLogged;
	const [userInfo] = state.userAPI.userInfo;
	return (
		<Switch>
			<Route path='/' exact component={Home}></Route>
			<Route
				path='/login'
				exact
				component={isLogged ? NotFound : Login}
			></Route>
			<Route
				path='/register'
				exact
				component={isLogged ? NotFound : Register}
			></Route>
			<Route path='/product' exact component={Product}></Route>
			<Route path='/product/:id' exact component={DetailProduct}></Route>
			<Route path='/cart' exact component={Cart}></Route>
			<Route
				path='/profile'
				exact
				component={isLogged ? Profile : NotFound}
			></Route>
			<Route
				path='/history'
				exact
				component={isLogged ? History : NotFound}
			></Route>
			<Route
				path='/history/:id'
				exact
				component={isLogged ? HistoryDetail : NotFound}
			></Route>
			<Route
				path='/reset/:token'
				exact
				component={isLogged ? NotFound : ForgotPassword}
			></Route>
			<Route
				path='/forgot'
				exact
				component={isLogged ? NotFound : ResetPassword}
			></Route>
			<Route
				path='/admin/products'
				exact
				component={userInfo.role ? AdminProducts : NotFound}
			></Route>
			<Route
				path='/admin/payments'
				exact
				component={userInfo.role ? AdminPayments : NotFound}
			></Route>
			<Route
				path='/admin/customers'
				exact
				component={userInfo.role ? AdminCustomers : NotFound}
			></Route>
			<Route
				path='/admin/categories'
				exact
				component={userInfo.role ? AdminCategory : NotFound}
			></Route>

			<Route path='*' exact component={NotFound}></Route>
		</Switch>
	);
};

export default Pages;
