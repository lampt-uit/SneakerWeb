import React from 'react'
import Button from '../Button/Button'
import './Modal.css'
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

function Modal({show}) {

    // const formik = useFormik({
    //     initialValues: {
    //       email: ""
    //     },
    //     validationSchema: Yup.object({
    //       email: Yup.string()
    //         .required("Required!")
    //         .email("Invalid email format")
    //     }),
      
    //     onSubmit: values => {
    //         console.log(values)
    //     }
    //     });

    return (
        <div className="modal-wrapper"
            style={{
                opacity: show ? '1' : '0',
                visibility: show ? '' : 'hidden'
            }}
        >
            <div className="modal-header">
                <h3>Bạn quên mật khẩu?</h3>
                <p>Nhập địa chỉ email của bạn phía dưới, và nếu tài khoản tồn tại, chúng tôi sẽ gửi cho bạn một đường dẫn để đặt lại mật khẩu.</p>
            </div>
            <div className="modal-content">
                <form className="form-modal">
                    <div className='form-group'>
						<label htmlFor='email' className='form-label'>
							Email
						</label>
						<input
							id='email'
							name='email'
							type='email'
							placeholder=''
							className='form-control'  
						/>
                    </div> 
                    <Button text="Đặt lại mật khẩu"></Button>
                 </form>
            </div>
        
        </div>
    )
}

export default Modal
