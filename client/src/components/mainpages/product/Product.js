import React, { useState, useRef, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './Product.css'
import Hinh from '../../../public/images/giay.jpg'
function Product() {


    const [isOpen, setIsOpen] = useState(false)
    const dropMenuRef = useRef(null)

    const onClickOpen = () => {
      setIsOpen(!isOpen)
    }
    useEffect(() => {
      const pageClickEvent = (e) => {
        if( dropMenuRef.current !== null && !dropMenuRef.current.contains(e.target)) {
          setIsOpen(!isOpen)
        }
      }
      if (isOpen) {
        window.addEventListener('click', pageClickEvent);
      }
      return () => {
        window.removeEventListener('click', pageClickEvent)
      }
    },[isOpen])

    return (
        <div className="home_product mrt mrb">
            <div className="grid wide">
                <div className="breadcrumb">
                    <Link to="#"><i className="fas fa-arrow-left"></i>Trở lại</Link>
                    <Link to="/">Trang Chủ</Link>
                </div>
                <h2>All Products</h2>
                <div className="home_filter">
                    <span className="home_filter_label">Sắp xếp theo </span>
                    <button className="home_filter-button">Mới nhất<i className="fas fa-chevron-down"></i></button>
                    <button className="home_filter-button">Bán chạy<i className="fas fa-chevron-down"></i></button>
                    <button className="home_filter-button">Phổ biến<i className="fas fa-chevron-down"></i></button>
                    <button className="select_price" onClick={onClickOpen}>
                        <span className="select_label">Giá</span>
                        <i class="fas fa-chevron-down"></i>

                        <ul ref={dropMenuRef} className={`price-list ${isOpen ? 'active' : ''}`}>
                          

                            <li className="price-item">
                                <Link to="" className="price-link">Thấp tới cao</Link>
                            </li>
                            <li className="price-item">
                                <Link to="" className="price-link">Cao tới thấp</Link>
                            </li>
                        </ul>
                    </button>
                </div>
                <div className="row sm-gutter">
                    <div className="col l-3 m-6 c-12">
                      <Link to="/detail" href="" className="home-product-item">
                            <img src={Hinh} alt="" className="home-product-item_img"/>
                            <div className="home-product-item_name">ZX 8000 W SUPEREARTH</div>
                            <div className="home-product-item_price">3.400.800đ</div>
                      </Link>
                    </div>
                    <div className="col l-3 m-6 c-12">
                      <Link to="/detail" href="" className="home-product-item">
                            <img src={Hinh} alt="" className="home-product-item_img"/>
                            <div className="home-product-item_name">ZX 8000 W SUPEREARTH</div>
                            <div className="home-product-item_price">3.400.800đ</div>
                      </Link>
                    </div>
                    <div className="col l-3 m-6 c-12">
                      <Link to="/detail" href="" className="home-product-item">
                            <img src={Hinh} alt="" className="home-product-item_img"/>
                            <div className="home-product-item_name">ZX 8000 W SUPEREARTH</div>
                            <div className="home-product-item_price">3.400.800đ</div>
                      </Link>
                    </div>
                    <div className="col l-3 m-6 c-12">
                      <Link to="/detail" href="" className="home-product-item">
                            <img src={Hinh} alt="" className="home-product-item_img"/>
                            <div className="home-product-item_name">ZX 8000 W SUPEREARTH</div>
                            <div className="home-product-item_price">3.400.800đ</div>
                      </Link>
                    </div>
                    <div className="col l-3 m-6 c-12">
                      <Link to="/detail" href="" className="home-product-item">
                            <img src={Hinh} alt="" className="home-product-item_img"/>
                            <div className="home-product-item_name">ZX 8000 W SUPEREARTH</div>
                            <div className="home-product-item_price">3.400.800đ</div>
                      </Link>
                    </div>
                    <div className="col l-3 m-6 c-12">
                      <Link to="/detail" href="" className="home-product-item">
                            <img src={Hinh} alt="" className="home-product-item_img"/>
                            <div className="home-product-item_name">ZX 8000 W SUPEREARTH</div>
                            <div className="home-product-item_price">3.400.800đ</div>
                      </Link>
                    </div>
                    <div className="col l-3 m-6 c-12">
                      <Link to="/detail" href="" className="home-product-item">
                            <img src={Hinh} alt="" className="home-product-item_img"/>
                            <div className="home-product-item_name">ZX 8000 W SUPEREARTH</div>
                            <div className="home-product-item_price">3.400.800đ</div>
                      </Link>
                    </div>
                    <div className="col l-3 m-6 c-12">
                      <Link to="/detail" href="" className="home-product-item">
                            <img src={Hinh} alt="" className="home-product-item_img"/>
                            <div className="home-product-item_name">ZX 8000 W SUPEREARTH</div>
                            <div className="home-product-item_price">3.400.800đ</div>
                      </Link>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Product

