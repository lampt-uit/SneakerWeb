import React, {useState ,useContext } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
function Profile() {
	const state = useContext(GlobalState);
	const [userInfo] = state.userAPI.userInfo;
	
	const [toggle, setToggle] = useState(1);
	const toggleTab = (index) => {
		setToggle(index)
	}
	return (
		<div>
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
									<form className='form-profile'>
										<div className='form-group-profile'>
											<label htmlFor='name' className='label'>
												Họ và tên
											</label>
											<div className='form-group-input'>
												<input
													id='name'
													name='name'
													type='text'
													defaultValue={userInfo.name}
												/>
											</div>
										</div>
										<div className='form-group-profile'>
											<label htmlFor='phone' className='label'>
												Số điện thoại
											</label>
											<div className='form-group-input'>
												<input
													id='name'
													name='name'
													type='text'
													defaultValue={userInfo.phone}
												/>
											</div>
										</div>
										<div className='form-group-profile'>
											<label htmlFor='phone' className='label'>
												Số điện thoại
											</label>
											<div className='form-group-input'>
												<input
													id='name'
													name='name'
													type='text'
													defaultValue={userInfo.email}
												/>
											</div>
										</div>

										<div className='form-group-profile'>
											<label htmlFor='address' className='label'>
												Địa chỉ
											</label>
											<div className='form-group-input'>
												<input
													id='name'
													name='name'
													type='text'
													defaultValue={userInfo.address}
												/>
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
