
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Profile.css';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import Button from '../utils/Button/Button';
import Toast from '../utils/Toast/Toast';
function Profile() {	
	const [toggle, setToggle] = useState(1);
	const toggleTab = (index) => {
		setToggle(index)
	}
	const _state = useContext(GlobalState);
	const [toast, setToast] = useState(false);
	const [userInfo] = _state.userAPI.userInfo;
	const [state, setState] = useState({ err: '', success: '' });
	const [token, setToken] = _state.token;
	// const { err, success } = state;

	const formik = useFormik({
		initialValues: {
			name: userInfo.name || '',
			phone: userInfo.phone || '',
			address: userInfo.address || ''
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Vui lòng nhập trường này'),
			phone: Yup.number()
				.typeError("That doesn't look like a phone number")
				.positive("A phone number can't start with a minus")
				.integer("A phone number can't include a decimal point")
				.min(8)
				.required('A phone number is required'),
			address: Yup.string().required('Vui lòng nhập trường này')
		}),
		onSubmit: async (values) => {
			try {
				// console.log(values);
				const res = await axios.patch('/user/updateUserInfo', values, {
					headers: { Authorization: token }
				});
				// console.log(res);
				setState({ err: '', success: res.data.message });
				setToast(!toast);

				//
				const resp = await axios.get('/user/refresh_token');
				// console.log(resp.data.accesstoken);
				setToken(resp.data.accesstoken);
			} catch (error) {
				// console.log(error.response);
				error.response.data.message &&
					setState({ err: error.response.data.message, success: '' });
			}
		}
	});
	return (
		<div>
			{/* <Toast type='success' msg='Hello' /> */}
			{toast && <Toast type='success' msg={state.success} />}
			<div className='profile mrt'>
				<div className='grid wide'>
					<div className='row'>
						<div className='col l-3'>
							<div className='userpage-sliderbar'>
								<div className='user-page-avatar'>
									<img
										src={userInfo.avatar}
										alt=''
										height='45px'
										width='45px'
										className='user-page-avatar-img'
									/>
									<div className='info'>
										<p className=''>Tài khoản của</p>
										<strong>{userInfo.name}</strong>
									</div>
								</div>
								<div className='user-page-menu'>
									<button className={toggle === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} >
										<i class="fas fa-user"></i>
										<span>Thông tin tài khoản</span>
									</button>
									<button className={toggle === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
										<i class="fas fa-unlock"></i>
										<span>Đặt lại mật khẩu</span>
									</button>
									
								</div>
							</div>
						</div>
						<div className='col l-9'>
							<div className={toggle === 1 ? "tabs-content active-content" : "tabs-content"}>
								<div className='tabs-heading'>
									<p>Thông tin tài khoản</p>
								</div>
								<div className='my-account'>
									<form className='form-profile' onSubmit={formik.handleSubmit}>
										<div className='form-group-profile'>
											<label htmlFor='name' className='label'>
												Họ và tên
											</label>
											<div className='form-group-input'>
												<input
													id='name'
													name='name'
													type='text'
													onChange={formik.handleChange}
													value={formik.values.name}
												/>
												{formik.errors.name && formik.touched.name && (
													<span className='form-message'>
														{formik.errors.name}
													</span>
												)}
											</div>
										</div>
										<div className='form-group-profile'>
											<label htmlFor='email' className='label'>
												Email của bạn
											</label>
											<div className='form-group-input'>
												<input
													id='email'
													name='email'
													type='text'
													defaultValue={userInfo.email}
													disabled
												/>
											</div>
										</div>
										<div className='form-group-profile'>
											<label htmlFor='phone' className='label'>
												Số điện thoại
											</label>
											<div className='form-group-input'>
												<input
													id='phone'
													name='phone'
													type='text'
													onChange={formik.handleChange}
													value={formik.values.phone}
												/>
												{formik.errors.phone && formik.touched.phone && (
													<span className='form-message'>
														{formik.errors.phone}
													</span>
												)}
											</div>
										</div>
										<div className='form-group-profile'>
											<label htmlFor='address' className='label'>
												Địa chỉ
											</label>
											<div className='form-group-input'>
												<input
													id='address'
													name='address'
													type='text'
													onChange={formik.handleChange}
													value={formik.values.address}
												/>
												{formik.errors.address && formik.touched.address && (
													<span className='form-message'>
														{formik.errors.address}
													</span>
												)}
											</div>
										</div>
										<div className='btn btn_mrt'>Cập nhật</div>
									</form>
								</div>
							</div>

							<div className={toggle === 2 ? "tabs-content active-content" : "tabs-content"}>
								<div className='tabs-heading'>
									<p>Đặt lại mật khẩu</p>
								</div>
								<div className="my-account">
									<form className='form-profile'>
										<div className='form-group-profile'>
											<label htmlFor='name' className='label'>
												Mật khẩu hiện tại
											</label>
											<div className='form-group-input'>
												<input
													id='password'
													name='password'
													type='password'
													
												/>
											</div>
										</div>
										<div className='form-group-profile'>
											<label htmlFor='phone' className='label'>
												Mật khẩu mới
											</label>
											<div className='form-group-input'>
												<input
													id='new_password'
													name='new_password'
													type='password'
													
												/>
											</div>
										</div>
										<div className='form-group-profile'>
											<label htmlFor='phone' className='label'>
												Nhập lại mật khẩu
											</label>
											<div className='form-group-input'>
												<input
													id='password_confirmation'
													name='password_confirmation'
													type='password'
												
												/>
											</div>
										</div>
										<div className='btn btn_mrt'>Cập nhật</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
