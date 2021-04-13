import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
    return (
        <div className='login'>
            <div className="grid wide">
                <div className="row">
                    <div className="col c-6 form-login">
                        <form action="" className="form">
                            <h2 className="heading">Đăng nhập</h2>
                            <Link to="#" className="desc">Bạn quên mật khẩu?</Link>
                            <div className="form-group">
                                <label htmlFor="" className="form-label">Email</label>
                                <input id="password" name="email" type="text" placeholder="kimthang@gmail.com" class="form-control"/>
                                <span class="form-message"></span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="" className="form-label">Password</label>
                                <input id="password" name="password" type="password" placeholder="*******" class="form-control"/>
                                <span class="form-message"></span>
                            </div>

                            <button className="btn form-submit">Đăng nhập <i class="fas fa-arrow-right"></i></button>
                        </form>
                    </div>
                    <div className="col c-6">
                        <div className="reason">
                            <h2 className="heading">Tạo một tài khoản</h2>
                            <p className="desc">Thật dễ dàng tạo một tài khoản. Hãy nhập địa chỉ email của bạn và điền vào mẫu trên trang tiếp theo và tận hưởng những lợi ích của việc sở hữu một tài khoản.</p>
                            <div className="content">
                                <ul>
                                    <li>
                                        <i class="fal fa-check"></i>
                                        <span>Tổng quan đơn giản về thông tin cá nhân của bạn</span> 
                                    </li>
                                    <li>
                                        <i class="fal fa-check"></i>
                                        <span>Thanh toán nhanh hơn</span> 
                                    </li>
                                    <li>
                                        <i class="fal fa-check"></i>
                                        <span>Ưu đãi và khuyến mãi độc quyền</span> 
                                    </li>
                                    <li>
                                        <i class="fal fa-check"></i>
                                        <span>Các sản phẩm mới nhất</span> 
                                    </li>
                                    <li>
                                        
                                        <i class="fal fa-check"></i>
                                        <span>Các bộ sưu tập giới hạn và bộ sưu tập theo mùa mới</span> 
                                    </li>
                                    <li>
                                        <i class="fal fa-check"></i>
                                        <span>Các sự kiện sắp tới</span> 
                                    </li>
                                </ul>
                            </div>
                            <Link to='/register' class="btn" >Đăng ký <i class="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
