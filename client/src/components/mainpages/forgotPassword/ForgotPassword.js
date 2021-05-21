import React from 'react'
import Button from '../utils/Button/Button'
import './ForgotPassword.css'
function ForgotPassword() {
    return (
        <div className="forgot mrt mrb">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-12">
                    <form action='' className='form-forgot'>
							<h2 className='heading-forgot'>Tạo mật khẩu mới</h2>							
							<div className='form-group'>
								<label htmlFor='password' className='form-label'>
									Mật khẩu
								</label>
								<input
									id='password'
									name='password'
									type='password'
									placeholder=''
									className='form-control'
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='password_confirmation' className='form-label'>
									Nhập lại mật khẩu
								</label>
								<input
									id='password_confirmation'
									name='password_confirmation'
									type='password' 
									placeholder=''
									className='form-control'
								/>
							</div>

							<Button text='Cập nhật' />
						</form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
