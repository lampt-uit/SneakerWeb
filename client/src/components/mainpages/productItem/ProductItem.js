import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../utils/rating/Rating';
import './ProductItem.css';
function ProductItem({ product }) {
	return (
		<div className='col l-3 m-6 c-12'>
			<Link
				to={`/product/${product._id}`}
				href=''
				className='home-product-item'
			>
				<img src={product.image[0]} alt='' className='home-product-item_img' />
				<div className='detail'>
					<div className='row1'>
						<div className='home-product-item_name'>{product.title}</div>
						<div className='home-product-item_price'>$ {product.price}</div>
					</div>
					<div className='row2'>
						<div className='reviews'>
							<Rating />
							<div className='reviews_qty'>{product.numReviews} reviews</div>
						</div>
						<div className='buy'>Mua ngay</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ProductItem;
