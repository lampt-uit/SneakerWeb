import React from 'react';
import Banner from '../../banner/Banner';
import Slider from "react-slick";
import './Home.css';
import Carousel from '../utils/Carousel/Carousel'

import ImgGirl from '../../../public/images/girl.jpg'
import ImgMen from '../../../public/images/man.jpg'
import ImgKid from '../../../public/images/kid.jpg'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Image1 from '../../../public/images/Image1.jpg'
import Image2 from '../../../public/images/Image2.jpg'
import Image3 from '../../../public/images/Image3.jpg'
import Image4 from '../../../public/images/Image4.jpg'
import Image5 from '../../../public/images/Image5.jpg'
import Image6 from '../../../public/images/Image6.jpg'
import Image7 from '../../../public/images/Image7.jpg'
import Image8 from '../../../public/images/Image8.jpg'
import Image9 from '../../../public/images/Image9.jpg'
import Image10 from '../../../public/images/Image10.jpg'
const Home = () => {

	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  initialSlide: 2
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };

	return (
		<div>
			<Banner />
			<div className='home-content'>
				<div className="grid wide">
					<div className="home-sale">
						<div className="home-title">Sale product</div>

						<Slider {...settings}>
							<div>
						
								<Carousel image={Image1} title="Converse high 2" price='$12'/>
							
							</div>
							<div>
								<Carousel image={Image2} title="Archive flames chuck 70" price='$89'/>
							</div>
							<div>
								<Carousel image={Image3} title="Hu NND" price='$20'/>
							</div>
							<div>
								<Carousel image={Image4} title="XZ 8000 W superarth" price='$79'/>
							</div>
						
							<div>
								<Carousel image={Image5} title="lace-up front mesh trainers " price='$19'/>
							</div>
							<div>
								<Carousel image={Image6} title="SHOES ATHLETIC" price='$26'/>
							</div>
							<div>
								<Carousel image={Image7} title="FASHION ADIDAS SHOES" price='$21'/>
							</div>
							<div>
								<Carousel image={Image8} title="ozweego" price='$32'/>
							</div>
							<div>
								<Carousel image={Image9} title="response sr" price='$12'/>
							</div>
							<div>
								<Carousel image={Image10} title="grand court se" price='$52'/>
							</div>
						</Slider>	
					</div>



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
