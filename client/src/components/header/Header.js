import React, { useContext } from 'react';
import axios from 'axios';

import { GlobalState } from '../../GlobalState';
import { Link } from 'react-router-dom';
import Logo from '../../public/images/logo_vatino.png';
import './header.css';

const Header = () => {
	const state = useContext(GlobalState);
	// console.log(state);
	const [userInfo] = state.userAPI.userInfo;
	const [isLogged] = state.userAPI.isLogged;
	const [cart] = state.userAPI.cart;

	const handleLogout = async () => {
		try {
			await axios.get('/user/logout');
			localStorage.removeItem('firstLogin');
			localStorage.removeItem('dataCart');
			window.location.href = '/';
		} catch (error) {
			window.location.href = '/';
		}
	};

	return (
		<div className='header'>
			<div className='header-top'>
				<ul>
					{isLogged ? (
						<li className='drop-nav'>
							<Link to='#' className='avatar'>
								<img src={userInfo.avatar} alt='/' />
								&nbsp;
								<span className='name'>
									{userInfo.name} <i className='fas fa-angle-down'></i>
								</span>
							</Link>
							<ul className='dropdown'>
								<li>
									<Link to='/profile'>Thông tin</Link>
								</li>
								<li>
									<Link to='/history'>Đơn hàng</Link>
								</li>

								<li>
									<Link to='/logout' onClick={handleLogout}>
										Đăng xuất
									</Link>
								</li>
							</ul>
						</li>
					) : (
						<>
							{' '}
							<li>
								<Link to='/login'>Login</Link>
							</li>
							<li>
								<Link to='/register'>Register</Link>
							</li>
						</>
					)}
				</ul>
			</div>
			<div className='header-bottom'>
				<Link to='/' className='header-bottom_logo'>
					<img src={Logo} alt='' width='100' />
				</Link>
				<div className='header-bottom_nav'>
					<ul>
						<li>
							<Link to='/product'>Nike</Link>
						</li>
						<li>
							<Link to='/product'>Puma</Link>
						</li>
						<li>
							<Link to='/product'>Converse</Link>
						</li>
						<li>
							<Link to='/product'>Adidas</Link>
						</li>
						<li>
							<Link to='/product'>Vans</Link>
						</li>
						<li>
							<Link to='/product'>Thương hiệu khác</Link>
						</li>
					</ul>
				</div>
				<div className='hearder-bottom_search'>
					<div className='form-input'>
						<input type='text' placeholder='Tìm kiếm' />
						<i className='fas fa-search'></i>
					</div>
					<Link to='/cart' className='icon-cart'>
						<i className='fas fa-shopping-cart'></i>
						<div className='cart__total'>
							<span>{cart.length}</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
