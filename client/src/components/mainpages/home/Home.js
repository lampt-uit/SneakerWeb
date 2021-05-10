import React from 'react';
import Banner from '../../banner/Banner';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
	return (
		<div>
			<Banner />
			<div className='content'>
				<h2 className='heading'>Popular right now</h2>
				<ul className='list-item'>
					<li className='item'>
						<Link to='#'>Superstart</Link>
					</li>
					<li className='item'>
						<Link to='#'>Vans</Link>
					</li>
					<li className='item'>
						<Link to='#'>Adidas</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
