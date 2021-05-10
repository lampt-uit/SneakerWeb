import React from 'react';
import video from '../../public/video/videoBanner.mp4';
import { Link } from 'react-router-dom';
import Button from '../../components/mainpages/utils/Button/Button';
import './Banner.css';
function Banner() {
	return (
		<div className='container'>
			<video autoPlay loop muted>
				<source src={video} type='video/mp4' />
			</video>
			<div className='content'>
				<img
					src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/viVN/Images/originals-ss21-stansmith-drop2-Launch-Sustain-hp-mh-large-1-v1-logo_tcm337-648781.png'
					alt=''
					className='logo'
				/>
				<h2>STAN SMITH, MÃI MÃI</h2>
				<p>
					Phiên bản bền vững từ giày Stan Smith biểu tượng, lấy cảm hứng từ chú
					ếch Kermit.
				</p>
				<Link to='/product'>
					<Button text='Mua ngay' />
				</Link>
			</div>
		</div>
	);
}

export default Banner;
