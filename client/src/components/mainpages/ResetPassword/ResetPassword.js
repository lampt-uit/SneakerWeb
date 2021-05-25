import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import Button from '../utils/Button/Button';
import './ResetPassword.css';
import { showErrMsg, showSuccessMsg } from '../utils/Notification/Notification';

function ResetPassword() {
	const [state, setState] = useState({ err: '', success: '' });
	const { err, success } = state;
	const formik = useFormik({
		initialValues: {
			email: ''
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.trim()
				.email('Email không hợp lệ')
				.required('Vui lòng nhập trường này')
		}),
		onSubmit: async (values) => {
			try {
				const res = await axios.post('/user/forgotPassword', values);
				// console.log(res);
				setState({ ...state, err: '', success: res.data.message });
			} catch (error) {
				error.response.data.message &&
					setState({ ...state, err: error.response.data.message, success: '' });
			}
		}
	});
	return (
		<div className='reset-password mrt mrb'>
			<div className='grid wide'>
				<div className='row'>
					<div className='col l-6'>
						<form
							action=''
							className='form-reset'
							onSubmit={formik.handleSubmit}
						>
							<h2 className='heading-forgot'>Please enter your email</h2>
							{err && showErrMsg(err)}
							{success && showSuccessMsg(success)}
							<div className='form-group'>
								<label htmlFor='email' className='form-label'>
									Your email has been registered for an account
								</label>
								<input
									id='email'
									name='email'
									type='email'
									placeholder='Please your email'
									className='form-control'
									onChange={formik.handleChange}
									value={formik.values.email}
								/>
								{formik.errors.email && formik.touched.email && (
									<span className='form-message'>{formik.errors.email}</span>
								)}
							</div>

							<Button text='Send to email	' />
						</form>
					</div>
					<div className='col l-6'>
						<h1>BẠN QUÊN MẬT KHẨU ?</h1>
						<p>Thật dễ dàng để reset mật khẩu của một tài khoản. Hãy nhập địa chỉ email của bạn để được đặt lại mật khẩu</p>		
					</div>
				</div>
			</div>
		</div>
	);
}

export default ResetPassword;
