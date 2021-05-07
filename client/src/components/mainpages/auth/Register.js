import React from 'react'
import './Login.css'
import {useFormik} from 'formik'
import * as Yup from "yup";

function Register() {
    const formik = useFormik({
        initialValues: {
            email:"",
            password:"",
            password_confirmation:"",
            name:""
        },
        validationSchema: Yup.object({
            name: Yup.string()
            //  .min(2, "Mininum 2 characters")
            // .max(15, "Maximum 15 characters")
                .required("Vui lòng nhập trường này"),
            email: Yup.string().trim()
                .email("Email không hợp lệ")
                .required("Vui lòng nhập trường này"),
            password: Yup.string()
                .min(6, "Vui lòng nhập tối thiểu 6 ký tự")
                .required("Vui lòng nhập trường này"),
            password_confirmation: Yup.string()
                .oneOf([Yup.ref("password")], "Mật khẩu nhập lại không chính xác")
                .required("Vui lòng nhập trường này!"),
            }),
            onSubmit: (values, { resetForm }) => {
                console.log(values)
                resetForm();
              }
    })

    return (
        <div className='login mrt mrb'>
        <div className="grid wide">
            <div className="row app-content">
                <div className="col l-6 m-12 c-12">
                    <form action="" className="form" onSubmit={formik.handleSubmit}>
                        <h2 className="heading heading-register">Đăng ký</h2>
                        <div className="form-group">
                                <label htmlFor="name" className="form-label">Tên đầy đủ</label>
                                <input id="name" name="name" type="text" onChange={formik.handleChange}  value={formik.values.name} placeholder="Kimthang" className="form-control"/>
                                {/* <span className="form-message"></span> */}
                                {/* touched dùng để check khi người dùng nhập xong(trong lúc nhập k hiển thị lỗi) errors dùng để hiện thị lỗi */}
                                {
                                      formik.errors.name && formik.touched.name && (<span className="form-message">{formik.errors.name}</span>)
                                }
                            </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} placeholder="Kimthang@gmai.com" className="form-control"/>
                           {/* <span className="form-message"></span> */}
                            {
                                formik.errors.email && formik.touched.email && (<span className="form-message">{formik.errors.email}</span>)
                            }

                        </div>
                        <div className="form-group">
                            <label htmlFor="password"  className="form-label">Mật khẩu</label>
                            <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} placeholder="Nhập mật khẩu" className="form-control"/>
                            {/* <span className="form-message"></span> */}

                            {
                                formik.errors.password && formik.touched.password && (<span className="form-message">{formik.errors.password}</span>)
                            }

                        </div>
                        <div className="form-group">
                            <label htmlFor="password_confirmation" className="form-label">Nhập lại mật khẩu</label>
                            <input id="password_confirmation" name="password_confirmation" type="password" onChange={formik.handleChange} value={formik.values.password_confirmation} placeholder="Nhập lại mật khẩu" className="form-control"/>
                            {/* <span className="form-message"></span> */}

                            {
                                formik.errors.password_confirmation && formik.touched.password_confirmation && (<span className="form-message">{formik.errors.password_confirmation}</span>)
                            }
                        </div>

                        <button className="btn form-submit btn-table-mobile">Đằng ký <i className="fas fa-arrow-right"></i></button>
                    </form>
                </div>
                <div className="col l-6 m-12 c-12">
                    <div className="reason">
                        <h2 className="heading">Tạo một tài khoản</h2>
                        <p className="desc">Đăng Nhập Chung sẽ giúp bạn truy cập:</p>
                        <div className="content">
                            <ul>
                                <li>
                                    <i className="fal fa-check"></i>
                                    <span>Một lần đăng nhập chung duy nhất để tương tác với các sản phẩm và dịch vụ của adidas</span> 
                                </li>
                                <li>
                                    <i className="fal fa-check"></i>
                                    <span>Thanh toán nhanh hơn</span> 
                                </li>
                                <li>
                                    <i className="fal fa-check"></i>
                                    <span>Xem lịch sử đặt hàng riêng của bạn</span> 
                                </li>
                                <li>
                                    <i className="fal fa-check"></i>
                                    <span>Thêm hoặc thay đổi tùy chọn email</span> 
                                </li>
                            </ul>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Register
