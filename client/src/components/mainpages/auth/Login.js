import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import './Login.css';
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification';
import Button from '../utils/Button/Button';
import Loading from '../utils/Loading/Loading';

function Login() {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({
		email: '',
		password: '',
		err: '',
		success: ''
	});

	const { email, password, err, success } = user;

	const onChangeInput = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value, err: '', success: '' });
	};

	const loginSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const res = await axios.post('/user/login', { ...user });
			// console.log(res);
			setUser({ ...user, err: '', success: res.data.message });
			setLoading(false);
			localStorage.setItem('firstLogin', true);
			history.push('/');
		} catch (error) {
			error.response.data.message &&
				setUser({
					...user,
					err: error.response.data.message,
					success: ''
				});
		}
	};

	return (
		<>
			{loading && <Loading />}
			<div className='login mrt mrb'>
				<div className='grid wide'>
					<div className='row app-content'>
						<div className='col l-6 m-12 c-12'>
							<form className='form' onSubmit={loginSubmit}>
								<h2 className='heading'>Đăng nhập</h2>
								<Link to='#' className='desc'>
									Bạn quên mật khẩu?
								</Link>
								{err && showErrMsg(err)}
								{success && showSuccessMsg(success)}
								<div className='form-group'>
									<label htmlFor='email' className='form-label'>
										Email
									</label>
									<input
										id='email'
										name='email'
										type='text'
										value={email}
										placeholder='kimthang@gmail.com'
										className='form-control'
										onChange={onChangeInput}
									/>
									<span className='form-message'></span>
								</div>
								<div className='form-group'>
									<label htmlFor='password' className='form-label'>
										Mật khẩu
									</label>
									<input
										id='password'
										name='password'
										type='password'
										value={password}
										placeholder='*******'
										className='form-control'
										onChange={onChangeInput}
									/>
									<span className='form-message'></span>
								</div>
								<Button text='Đăng nhập' />
							</form>
						</div>
						<div className='col l-6 m-12 c-12'>
							<div className='reason'>
								<h2 className='heading'>Tạo một tài khoản</h2>
								<p className='desc'>
									Thật dễ dàng tạo một tài khoản. Hãy nhập địa chỉ email của bạn
									và điền vào mẫu trên trang tiếp theo và tận hưởng những lợi
									ích của việc sở hữu một tài khoản.
								</p>
								<div className='content'>
									<ul>
										<li>
											<i className='fal fa-check'></i>
											<span>
												Tổng quan đơn giản về thông tin cá nhân của bạn
											</span>
										</li>
										<li>
											<i className='fal fa-check'></i>
											<span>Thanh toán nhanh hơn</span>
										</li>
										<li>
											<i className='fal fa-check'></i>
											<span>Ưu đãi và khuyến mãi độc quyền</span>
										</li>
										<li>
											<i className='fal fa-check'></i>
											<span>Các sản phẩm mới nhất</span>
										</li>
										<li>
											<i className='fal fa-check'></i>
											<span>
												Các bộ sưu tập giới hạn và bộ sưu tập theo mùa mới
											</span>
										</li>
										<li>
											<i className='fal fa-check'></i>
											<span>Các sự kiện sắp tới</span>
										</li>
									</ul>
								</div>
								{/* <Link
									to='/register'
									className='btn btn-register btn-table-mobile'
								>
									Đăng ký<i className='fas fa-arrow-right'></i>
								</Link> */}
								<Link to='/register'>
									<Button text='Đăng kí' />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
