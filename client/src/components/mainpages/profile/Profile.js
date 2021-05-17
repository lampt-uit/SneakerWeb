import React, {useContext} from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
function Profile() {

    const state = useContext(GlobalState)
    const [userInfo] = state.userAPI.userInfo
    console.log(userInfo)
    return (
        <div>
            <div className="profile mrt">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-3">
                            <div className="userpage-sliderbar">
                                <div className="user-page-avatar">
                                    <img src={userInfo.avatar} alt="" height="45px" width="45px" className="user-page-avatar-img"/>
                                    <div className="info">
                                        <p className="">Tài khoản của</p>
                                        <strong>{userInfo.name}</strong>
                                    </div>
                                </div>
                                <div className="user-page-menu">
                                    <ul className="page-menu-list">
                                        <li className="page-menu-item">
                                            <Link to="#" className="page-menu-link">
                                                <i class="fas fa-user"></i>
                                                <span>Thông tin tài khoản</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col l-9">
                            <div className="my-account">
                                <div className="my-account-header">
                                    <p>Thông tin tài khoản</p>
                                </div>


                                <div className="my-account-profile">
                                    <form className='form-profile'>
                                        <div className='form-group-profile'>
                                            <label htmlFor='name' className="label">
                                                Họ và tên 
                                            </label>
                                            <div className="form-group-input">
                                                <input
                                                    id='name'
                                                    name='name'
                                                    type='text'
                                                    defaultValue={userInfo.name}
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group-profile'>
                                            <label htmlFor='phone' className="label">
                                                Số điện thoại 
                                            </label>
                                            <div className="form-group-input">
                                                <input
                                                    id='name'
                                                    name='name'
                                                    type='text'
                                                    defaultValue={userInfo.phone}
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group-profile'>
                                            <label htmlFor='phone' className="label">
                                                Số điện thoại 
                                            </label>
                                            <div className="form-group-input">
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
                                            <div className="form-group-input">
                                                <input
                                                    id='name'
                                                    name='name'
                                                    type='text'
                                                    defaultValue={userInfo.address}
                                                />
                                            </div>
                                        </div>
                                        <div className="btn">Cập nhật</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
