import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
	return (
		<div className='footer'>
			<div className='grid wide footer-top'>
				<div className='row '>
					<div className='col l-8'>
						<div className='row'>
							<div className='col l-4'>
								<h2 className='footer-title'>Về chúng tôi</h2>
								<ul className='footer-list'>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Tấn Lâm
										</Link>
									</li>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Đông Sinh
										</Link>
									</li>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Minh Thành
										</Link>
									</li>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Kim Thắng
										</Link>
									</li>
								</ul>
							</div>
							<div className='col l-4'>
								<h2 className='footer-title'>Liên lạc chúng tôi</h2>
								<ul className='footer-list'>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Ktx Khu A
										</Link>
									</li>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Tổng đài: 0324-xxx-xxx
										</Link>
									</li>
								</ul>
							</div>
							<div className='col l-4'>
								<h2 className='footer-title'>Tại sao chọn Vatino</h2>
								<ul className='footer-list'>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Miễn phí giao hàng
										</Link>
									</li>
									<li className='footer-item'>
										<Link to='#' className='footer-link'>
											Thẻ thành viên
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='col l-4'>
						<h2 className='footer-title'>Đăng ký nhận ưu đãi qua Email</h2>
						<form>
							<div className=''>
								<input
									id='email'
									name='email'
									type='text'
									placeholder='Your email'
									className='form-control'
								/>
							</div>
							<button className='btn-confirm'>XÁC NHẬN</button>
						</form>
					</div>
				</div>

				<div className='social'>
					<Link to='#' className='social-link'>
						<i class='fab fa-facebook-f'></i>
					</Link>
					<Link to='#' className='social-link'>
						<i class='fab fa-google-plus-g'></i>
					</Link>
					<Link to='#' className='social-link'>
						<i class='fab fa-instagram'></i>
					</Link>
				</div>

				<div className='policy'>
					<Link to='#' className='policy-link'>
						Điều khoản và Điều Kiện
					</Link>
					<Link to='#' className='policy-link'>
						Chính sách bảo mật
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
