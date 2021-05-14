import { React, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import { GlobalState } from '../../../GlobalState';
import Button from '../utils/Button//Button';
import './DetailProduct.css';
function DetailProduct() {
	const state = useContext(GlobalState);
	// console.log(state);
	const [products] = state.productAPI.products;
	const addToCart = state.productAPI.addToCart;
	const { id } = useParams();

	const details = products.filter((product) => {
		return product._id === id;
	});
	return (
		<>
			{details.map((product) => (
				<div className='home-detail mrt mrb'>
					<div className='grid wide'>
						<div className='row'>
							<div className='col l-8 m-12 c-12'>
								<div className='breadcrumb'>
									<Link to='#'>
										<i className='fas fa-arrow-left'></i>Trở lại
									</Link>
								</div>
								<div className='home-detail-content'>
									<div className='home-detail-item'>
										<div className='home-detail-img'>
											<img src={product.image[0]} alt='' />
										</div>
									</div>
									<div className='home-detail-description'>
										<div className='row sm-gutter'>
											<div className='col l-12'>
												<h2 className='title'>Mô tả</h2>
											</div>

											<div className='col l-6'>
												<div className='text-content'>
													<h2 className='name'>{product.title}</h2>
													<p className='text'>{product.description}</p>
												</div>
											</div>
											<div className='col l-6'>
												<img
													src={product.image[1]}
													className='thumb_img'
													alt=''
												/>
											</div>
										</div>
									</div>

									<div className='home-detail-description'>
										<div className='row sm-gutter'>
											<div className='col l-12'>
												<h2 className='title'>thông số</h2>
											</div>

											<div className='col l-6'>
												<ul className='list-parameters'>
													<li>Vừa vặn như đi tất</li>

													<li>Có dây giày</li>

													<li>Lớp lót bằng vải dệt</li>
												</ul>
											</div>
											<div className='col l-6'>
												<ul className='list-parameters'>
													<li>Trọng lượng: 340 g</li>
													<li>Đệm gót giày hình chữ S</li>
													<li>Primeblue</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col l-4 m-0 c-0'>
								<div className='detail-slidebar'>
									<h2 className='detail-name'>{product.title}</h2>
									<p className='detail-price'>$ {product.price}</p>
									<div className='detail-size'>
										<h3 className='name-size'>Size có sẳn</h3>
										<div className='container-size'>
											{product.size.map((size, index) => (
												<button key={index}>{size}</button>
											))}
										</div>
									</div>
									<Link to='/cart' onClick={() => addToCart(product._id)}>
										<Button text='Thêm vào giỏ hàng' />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default DetailProduct;
