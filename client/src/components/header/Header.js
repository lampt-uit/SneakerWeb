import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
	return (
		<div className='header'>
			<div className="header-top">
				<ul>
					<li><Link to='/login'>Login</Link></li>
					<li><Link to='/register'>Register</Link></li>
					<li><Link to='/'>Home</Link></li>
				</ul>
			</div>
			<div className="header-bottom">
				<div className="header-bottom_logo">
					<img src="http://mauweb.monamedia.net/trueshoes/wp-content/uploads/2018/03/logo-mona.png" alt="" width='80'/>
				</div>
				<div className="header-bottom_nav">
					<ul>
						<li><Link to='#'>Adidas</Link></li>
						<li><Link to='#'>Puma</Link></li>
						<li><Link to='#'>Converse</Link></li>
						<li><Link to='#'>Vans</Link></li>
						<li><Link to='#'>Nhãn hiệu khác</Link></li>
					</ul>
				</div>
				<div className="hearder-bottom_search">
					<div className="form-input">
						<input type="text" placeholder='Tìm kiếm'/>
						<i class="fas fa-search"></i>
					</div>
					<div className="icon-cart">
						<i class="fas fa-shopping-cart"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
