import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './Login.css';
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification';
import Button from '../utils/Button/Button';

function Register() {
	const [state, setState] = useState({ err: '', success: '' });
	const { err, success } = state;
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			password_confirmation: '',
			name: ''
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Vui lòng nhập trường này'),
			email: Yup.string()
				.trim()
				.email('Email không hợp lệ')
				.required('Vui lòng nhập trường này'),
			password: Yup.string()
				.min(6, 'Vui lòng nhập tối thiểu 6 ký tự')
				.required('Vui lòng nhập trường này'),
			password_confirmation: Yup.string()
				.oneOf([Yup.ref('password')], 'Mật khẩu nhập lại không chính xác')
				.required('Vui lòng nhập trường này!')
		}),
		onSubmit: async (values, { resetForm }) => {
			try {
				const res = await axios.post('/user/register', { ...values });
				// console.log(res);
				setState({ err: '', success: res.data.message });
				localStorage.setItem('firstLogin', true);
				window.location.href = '/';
				resetForm();
			} catch (error) {
				error.response.data.msg &&
					setState({ err: error.response.data.msg, success: '' });
			}
		}
	});

	return (
		<div className='login mrt mrb'>
			<div className='grid wide'>
				<div className='row app-content'>
					<div className='col l-6 m-12 c-12'>
						<form action='' className='form' onSubmit={formik.handleSubmit}>
							<h2 className='heading heading-register'>Đăng ký</h2>
							{err && showErrMsg(err)}
							{success && showSuccessMsg(success)}
							<div className='form-group'>
								<label htmlFor='name' className='form-label'>
									Tên đầy đủ
								</label>
								<input
									id='name'
									name='name'
									type='text'
									onChange={formik.handleChange}
									value={formik.values.name}
									placeholder='Kimthang'
									className='form-control'
								/>
								{formik.errors.name && formik.touched.name && (
									<span className='form-message'>{formik.errors.name}</span>
								)}
							</div>
							<div className='form-group'>
								<label htmlFor='email' className='form-label'>
									Email
								</label>
								<input
									id='email'
									name='email'
									type='text'
									onChange={formik.handleChange}
									value={formik.values.email}
									placeholder='Kimthang@gmai.com'
									className='form-control'
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
									onChange={formik.handleChange}
									value={formik.values.password}
									placeholder='Nhập mật khẩu'
									className='form-control'
								/>

								{formik.errors.password && formik.touched.password && (
									<span className='form-message'>{formik.errors.password}</span>
								)}
							</div>
							<div className='form-group'>
								<label htmlFor='password_confirmation' className='form-label'>
									Nhập lại mật khẩu
								</label>
								<input
									id='password_confirmation'
									name='password_confirmation'
									type='password'
									onChange={formik.handleChange}
									value={formik.values.password_confirmation}
									placeholder='Nhập lại mật khẩu'
									className='form-control'
								/>

								{formik.errors.password_confirmation &&
									formik.touched.password_confirmation && (
										<span className='form-message'>
											{formik.errors.password_confirmation}
										</span>
									)}
							</div>

							<Button text='Đăng kí' />
						</form>
					</div>
					<div className='col l-6 m-12 c-12'>
						<div className='reason'>
							<h2 className='heading'>Tạo một tài khoản</h2>
							<p className='desc'>
								Đăng kí một tài khoản sẽ giúp bạn truy cập:
							</p>
							<div className='content'>
								<ul>
									<li>
										<i className='fal fa-check'></i>
										<span>
											Một lần đăng nhập chung duy nhất để tương tác với các sản
											phẩm và dịch vụ của của hàng
										</span>
									</li>
									<li>
										<i className='fal fa-check'></i>
										<span>Thanh toán nhanh hơn</span>
									</li>
									<li>
										<i className='fal fa-check'></i>
										<span>Xem lịch sử đặt hàng riêng của bạn</span>
									</li>
									<li>
										<i className='fal fa-check'></i>
										<span>Thêm hoặc thay đổi tùy chọn email</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
