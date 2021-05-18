import React from 'react';
import Banner from '../../banner/Banner';
import { Link } from 'react-router-dom';
import './Home.css';
import ImgGirl from '../../../public/images/girl.jpg'
import ImgMen from '../../../public/images/man.jpg'
import ImgKid from '../../../public/images/kid.jpg'
const Home = () => {
	return (
		<div>
			<Banner />
			<div className='home-content'>
				<div className="grid wide">
					<div className="home-age">
						<h2 className="home-title">Who are you shopping for?</h2>
						<div className="row">
							<div className="col l-4">
								<div className="card">
									<div className="card-img">
										<div className="card-bg"></div>
										<img src={ImgGirl} alt="" />
									</div>
									<div className="card-title">
										<p>WOMEN</p>
									</div>
								</div>
							</div>
							<div className="col l-4">
								<div className="card">						
									<div className="card-img">
										<div className="card-bg"></div>
										<img src={ImgMen} alt="" />
									</div>
									<div className="card-title">
										<p>MEN</p>
									</div>
								</div>
							</div>
							<div className="col l-4">
								<div className="card">
									<div className="card-img">
									<div className="card-bg"></div>
										<img src={ImgKid} alt="" />
									</div>
									<div className="card-title">
										<p>KIDS</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
