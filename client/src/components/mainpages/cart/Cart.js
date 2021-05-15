import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { GlobalState } from '../../../GlobalState';
import Button from '../utils/Button/Button';
import './Cart.css';

function Cart() {
	const state = useContext(GlobalState);
	const [cart, setCart] = state.userAPI.cart;
	const [userInfo] = state.userAPI.userInfo;
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const getTotal = () => {
			const total = cart.reduce((prev, item) => {
				return prev + item.price * item.count;
			}, 0);
			setTotal(total);
		};
		getTotal();
	}, [cart]);

	const increase = (id) => {
		cart.forEach((item) => {
			if (item._id === id) {
				item.count += 1;
			}
		});
		setCart([...cart]);
	};

	const decrease = (id) => {
		cart.forEach((item) => {
			if (item._id === id) {
				item.count === 1 ? (item.count = 1) : (item.count -= 1);
			}
		});
		setCart([...cart]);
	};

	const remove = (id) => {
		if (window.confirm('Bạn có muốn xóa sản phẩm này khỏi giỏ hàng ?')) {
			cart.forEach((item, index) => {
				if (item._id === id) {
					cart.splice(index, 1);
				}
			});
			setCart([...cart]);
		}
	};

	if (cart.length === 0) {
		return (
			<h2
				style={{ textAlign: 'center', fontSize: '5rem', paddingTop: '100px' }}
			>
				CART EMPTY
			</h2>
		);
	}
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
								className='row detail'
								style={{ border: '1px solid #bdc3c7', marginBottom: '5px' }}
							>
								<div className='col l-8'>
									<div className='product_cart'>
										<img src={product.image[0]} alt='' />
										<div className='content'>
											<h3>{product.title}</h3>
											<span>${product.price}</span>
											<div>Còn lại trong kho: {product.stock}</div>
										</div>
									</div>
								</div>
								<div className='col l-4'>
									<div className='product_cart2'>
										<span>Chọn Size: </span>
										<select className='select'>
											{product.size.map((size) => (
												<option value={size}>{size}</option>
											))}
										</select>
										<div className='amount'>
											<button onClick={() => decrease(product._id)}>-</button>
											<span>{product.count}</span>
											<button onClick={() => increase(product._id)}>+</button>
										</div>
										<h3>$ {product.price * product.count}</h3>
									</div>
								</div>
								<span className='delete' onClick={() => remove(product._id)}>
									X
								</span>
							</div>
						))}
					</div>
					<div className='col l-4'>
						<div className='address'>
							<h1>Thông tin nhận hàng </h1>
							<form className='form'>
								<div className='form-group'>
									<label htmlFor='name' className='form-label'>
										Họ và tên <span style={{ color: 'crimson' }}>*</span>
									</label>
									<input
										id='name'
										name='name'
										type='text'
										defaultValue={userInfo.name}
										className='form-control'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='phone' className='form-label'>
										Số điện thoại <span style={{ color: 'crimson' }}>*</span>
									</label>
									<input
										id='phone'
										name='phone'
										type='text'
										defaultValue={userInfo.phone}
										className='form-control'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='address' className='form-label'>
										Địa chỉ <span style={{ color: 'crimson' }}>*</span>
									</label>
									<input
										id='address'
										name='name'
										type='address'
										defaultValue={userInfo.address}
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

							<h2>Tổng tiền: $ {total}</h2>
						</div>
						<Button text='Thanh toán' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
