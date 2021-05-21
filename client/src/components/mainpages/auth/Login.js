import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './Login.css';
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification';
import Button from '../utils/Button/Button';
import Modal from '../utils/Modal/Modal';
function Login() {
	const [state, setState] = useState({ err: '', success: '' });
	const { err, success } = state;

	const [show, setShow] = useState(false);
	const closeModalHandler = () => setShow(false);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.trim()
				.email('Email không hợp lệ')
				.required('Vui lòng nhập trường này'),
			password: Yup.string()
				.min(6, 'Vui lòng nhập tối thiểu 6 ký tự')
				.required('Vui lòng nhập trường này')
		}),
		onSubmit: async (values, { resetForm }) => {
			try {
				const res = await axios.post('/user/login', { ...values });
				// console.log(res);
				setState({ err: '', success: res.data.message });
				localStorage.setItem('firstLogin', true);
				window.location.href = '/';
				resetForm();
			} catch (error) {
				// console.log(error.response);
				error.response.data.message &&
					setState({ err: error.response.data.message, success: '' });
			}
		}
	});

	return (
		<>
			{show ? (
				<div onClick={closeModalHandler} className='back-drop'></div>
			) : null}
			<div className='login mrt mrb'>
				<div className='grid wide'>
					<div className='row app-content'>
						<div className='col l-6 m-12 c-12'>
							<form className='form' onSubmit={formik.handleSubmit}>
								<h2 className='heading'>Đăng nhập</h2>

								<button className='desc' onClick={() => setShow(true)}>
									Bạn quên mật khẩu?
								</button>
								<Modal show={show} />

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
										placeholder='kimthang@gmail.com'
										className='form-control'
										onChange={formik.handleChange}
										value={formik.values.email}
									/>
									{formik.errors.email && formik.touched.email && (
										<span className='form-message'>{formik.errors.email}</span>
									)}
								</div>
								<div className='form-group'>
									<label htmlFor='password' className='form-label'>
										Mật khẩu
									</label>
									<input
										id='password'
										name='password'
										type='password'
										placeholder='*******'
										className='form-control'
										onChange={formik.handleChange}
										value={formik.values.password}
									/>
									{formik.errors.password && formik.touched.password && (
										<span className='form-message'>
											{formik.errors.password}
										</span>
									)}
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
