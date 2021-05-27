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
				.email('Email invalid')
				.required('Please enter this field.')
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
							<h2 className='heading-reset'>Please enter your email</h2>
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
						<div className='reason reason-reset'>
							<h1 className='heading-reset'>YOU FORGET YOUR PASSWORD ?</h1>
							<p className='description'>It's easy to reset an account's password. Please enter your email address to reset your password</p>		
							<div className='content'>
									<ul>
										<li>
											<i className='fal fa-check'></i>
											<span>Easy and faster</span>
										</li>
										<li>
											<i className='fal fa-check'></i>
											<span>
												Facility
											</span>
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

export default ResetPassword;
