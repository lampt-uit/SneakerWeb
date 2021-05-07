import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {

	const [click, setClick] = useState(false)
	const closeMenu = () => {
		setClick(!click)
	}
	const handleClick = () => {
		setClick(!click)
	}

	

	return (
		<div className='header'>
			<div className="header-table-mobile">
				
				<div className="icon" onClick={handleClick}>
					<i class= {click?"fas fa-times":"fas fa-bars"}></i>
				</div>
				<div className={click ? "menu-nav active": "menu-nav"}>
					<ul>
						<li><Link to='/product' onClick={closeMenu}>Nam</Link></li>
						<li><Link to='/product' onClick={closeMenu}>Nữ</Link></li>
						<li><Link to='/product' onClick={closeMenu}>Trẻ em</Link></li>
						<li><Link to='/product' onClick={closeMenu}>Nhãn hiệu khác</Link></li>
						<li><Link to='/login' onClick={closeMenu}>Login</Link></li>
					</ul>
				</div>
				<img src="http://mauweb.monamedia.net/trueshoes/wp-content/uploads/2018/03/logo-mona.png" alt="" width='80'/>
				<div className="cart">
					<i className="fas fa-shopping-cart"></i>
					<div className="cart__total">
						<span>0</span>
					</div>
				</div>	
			</div>

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
						<li><Link to='/product'>Nam</Link></li>
						<li><Link to='/product'>Nữ</Link></li>
						<li><Link to='/product'>Trẻ em</Link></li>
						<li><Link to='/product'>Nhãn hiệu khác</Link></li>
					</ul>
				</div>
				<div className="hearder-bottom_search">
					<div className="form-input">
						<input type="text" placeholder='Tìm kiếm'/>
						<i className="fas fa-search"></i>
					</div>
					<div className="icon-cart">
						<i className="fas fa-shopping-cart"></i>
						<div className="cart__total">
							<span>0</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
