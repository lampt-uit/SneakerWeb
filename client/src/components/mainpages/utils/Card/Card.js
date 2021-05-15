import React from 'react'
import './Card.css'
import Rating from '../rating/Rating';
import { Link } from 'react-router-dom'
function Card({ name, imageUrl, price, reviews }) {
    return (
        <div className='card-container'>
            <Link to='/detail' className='card-link'>
                <img src={imageUrl} alt=""  className='card-link-img'/>
            </Link>
            <div className="card-detail">
                <div className="row1">
                    <div className='card-item_name'>
                        {name}
				    </div>
				    <div className='card-item_price'>{price}</div>
                </div>
                
                <div className="row2">
                    <div className='reviews'>
						<Rating />
						<div className='reviews_qty'>{reviews}</div>
					</div>
				<Link to= '#' className='buy'>Mua ngay</Link>
                </div>

            </div>
        </div>
    )
}

export default Card
