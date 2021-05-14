import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalState } from '../../../GlobalState';
import Button from '../utils/Button/Button';
import './Cart.css';

function Cart() {
	const state = useContext(GlobalState);
	const [cart] = state.productAPI.cart;
	// console.log(cart);
	const [userInfo] = state.userAPI.userInfo;
	console.log(userInfo);
	return (
		<div className='detail_cart'>
			<div className='grid wide'>
				<div className='title'>
					<h4>Giỏ hàng của bạn</h4>
					<Link to='/product'>Tiếp tục mua hàng</Link>
				</div>
				<div className='row'>
					<div className='col l-8'>
						{cart.map((product) => (
							<div
								className='row'
								style={{ border: '1px solid #bdc3c7', marginBottom: '5px' }}
							>
								<div className='col l-6'>
									<div className='product_cart'>
										<img src={product.image[0]} alt='' />
										<div className='content'>
											<h3>{product.title}</h3>
											<span>${product.price}</span>
											<div>Còn lại trong kho: {product.stock}</div>
										</div>
									</div>
								</div>
								<div className='col l-6'>
									<div className='product_cart2'>
										<span>Chon size</span>
										<select>
											{product.size.map((size) => (
												<option value={size}>{size}</option>
											))}
										</select>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className='col l-4'>
						<div className='address'>
							<h1>Thông tin nhận hàng </h1>
							<form className='form'>
								<div className='form-group'>
									<label htmlFor='name' className='form-label'>
										Họ và tên
									</label>
									<input
										id='name'
										name='name'
										type='text'
										value={userInfo.name}
										className='form-control'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='phone' className='form-label'>
										Số điện thoại
									</label>
									<input
										id='phone'
										name='phone'
										type='text'
										value={userInfo.phone}
										className='form-control'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='address' className='form-label'>
										Địa chỉ
									</label>
									<input
										id='address'
										name='name'
										type='address'
										value={userInfo.address}
										className='form-control'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='note' className='form-label'>
										Ghi chú
									</label>
									<textarea
										name='note'
										id='note'
										cols='10'
										rows='20'
										className='form-control'
									/>
								</div>
							</form>
						</div>
						<div className='order'>
							<h1>Thông tin đơn hàng</h1>
							<p>Tổng số sản phẩm: 8</p>
							<p>Hình thức thanh toán: Trục tiếp</p>
							<p>Hình thức giao hàng: Giao hành nhanh</p>
							<p>Chương trình khuyến mãi: Không</p>

							<h2>Tổng tiền: $ 999</h2>
						</div>
						<Button text='Thanh toán' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
