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
		<div className='cart-container'>
			<div className='grid wide'>
				<div className='row'>
					<div className='col l-8'>
						<div className='cart-title'>
							<h4>Giỏ hàng của bạn</h4>
							<Link to='/product'>Tiếp tục mua hàng</Link>
						</div>
						{cart.map((product) => (
							<div className='row cart-detail'>
								<div className='col l-2'>
									<div className='product_cart'>
										<img src={product.image[0]} alt='' className="cart_link"/>
									</div>
								</div>
								<div className='col l-10'>
									<div className='row'>
										<div className='col l-6 content'>
											<h3 className="content-title">{product.title}</h3>
											<span className="content-price">${product.price}</span>
											<div className="content-stock">Còn lại trong kho: {product.stock}</div>
										</div>

										<div className="col l-3 select">
		
											<div className='amount'>
												<Link onClick={() => decrease(product._id)}>-</Link>
												<span>{product.count}</span>
												<Link onClick={() => increase(product._id)}>+</Link>
											</div>

											<span>Chọn Size: </span>
											<select className='select-size'>
												{product.size.map((size) => (
													<option value={size}>{size}</option>
												))}
											</select>
										</div>
										<div className="col l-3 cart-price">
											<h3 className="total_price">$ {product.price * product.count}</h3>
											<span className='delete' onClick={() => remove(product._id)}>
												Remove
											</span>
										</div>
										
									</div>
								</div>
							
							</div>
						))}
					</div>
					<div className='col l-4'>
						<div className="cart-warpper">
							<h1>Thông tin nhận hàng </h1>
							<div className='address'>
							
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
											className='input'
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
											className='input'
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
											className='input'
										/>
									</div>
									<div className='form-group'>
										<label htmlFor='note' className='form-label'>
											Ghi chú
										</label>
										<textarea
											name='note'
											id='note'
											cols='1'
											rows='3'
										/>
									</div>
								</form>
							</div>
						</div>

						<div className='order'>
							<div className="cart-warpper">
							<h1>Thông tin đơn hàng</h1>
								<div className="order-content">
									<p>Tổng số sản phẩm: 8</p>
									<p>Hình thức thanh toán: Trục tiếp</p>
									<p>Hình thức giao hàng: Giao hành nhanh</p>
									<p>Chương trình khuyến mãi: Không</p>
									<h2>Tổng tiền: $ {total}</h2>
								</div>
							</div>
						</div>
						<Button text='Thanh toán' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
