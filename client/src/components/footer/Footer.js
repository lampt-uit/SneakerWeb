import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'
const Footer = () => {
	return (
		<div className='footer'>
			<div className="grid wide footer-top">
				<div className="row ">
				<div className="content col l-3">
					<h2>Sản phẩm</h2>
					<ul>
						<li>
							<Link to='#'>Quần</Link>
						</li>
						<li>
							<Link to='#'>Áo</Link>
							</li>
						<li>
							<Link to='#'>Giày</Link>
						</li>
					</ul>
				</div>
				<div className="content col l-3">
					<h2>Thể thao</h2>
					<ul>
						<li>
							<Link to='#'>Quần</Link>
						</li>
						<li>
							<Link to='#'>Áo</Link>
							</li>
						<li>
							<Link to='#'>Giày</Link>
						</li>
					</ul>
				</div>
				<div className="content col l-3">
					<h2>Bộ sưu tập</h2>
					<ul>
						<li>
							<Link to='#'>Quần</Link>
						</li>
						<li>
							<Link to='#'>Áo</Link>
							</li>
						<li>
							<Link to='#'>Giày</Link>
						</li>
					</ul>
				</div>
				<div className="content col l-3">
					<h2>Hỗ trợ</h2>
					<ul>
						<li>
							<Link to='#'>Quần</Link>
						</li>
						<li>
							<Link to='#'>Áo</Link>
							</li>
						<li>
							<Link to='#'>Giày</Link>
						</li>
					</ul>
				</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="policy">
					<ul>
						<li>
							<Link to='#'>Chính sách và bảo mật</Link>
						</li>
						<li>
							<Link to='#'>Điều khoản và điều kiện</Link>
						</li>
						<li>
							<Link to='#'>Thông tin về công ty</Link>
						</li>
						<li>
							<Link to='#'>© 2020 Công ty TNHH adidas Việt Nam</Link>
						</li>
						
					</ul>
				</div>
				<div className="social">
					<ul>	
						<li>
							<Link to='#'><i class="fab fa-facebook-square"></i></Link>
						</li>
						<li>
							<Link to='#'><i class="fab fa-twitter-square"></i></Link>
						</li>
						<li>
							<Link to='#'> <i class="fab fa-google"></i></Link>
						</li>
					</ul>
				</div>
			</div>
		</div>

		
	);
};

export default Footer;
