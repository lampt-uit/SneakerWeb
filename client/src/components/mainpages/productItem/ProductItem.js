import React, {useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import Rating from '../utils/rating/Rating';
import './ProductItem.css';
function ProductItem({ product }) {

	const state = useContext(GlobalState)
	const addToCart = state.userAPI.addToCart

	return (
		<div className='col l-3 m-6 c-12'>
			<div className='card-container'>
            	<Link to={`/product/${product._id}`} className='card-link'>
                	<img src={product.image[0]} alt=""  className='card-link-img'/>
           		</Link>
            	<div className="card-detail">
                	<div className="row1">
                    	<div className='card-item_title'>{product.title}</div>
				    	<div className='card-item_price'>$ {product.price}</div>
                	</div> 
				
               		<div className="row2">
                    	<div className='reviews'>
							<Rating />
							<div className='reviews_qty'>{product.numReviews} reviews</div>
						</div>
						<Link to= '#' onClick={() => addToCart(product._id)} className='buy'>Mua ngay</Link>
                	</div>

           		</div>
        	</div>
		</div>
	);
}

export default ProductItem;
