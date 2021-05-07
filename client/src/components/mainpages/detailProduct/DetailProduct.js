import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Hinh from '../../../public/images/giay.jpg'
import './DetailProduct.css'
function DetailProduct() {

    const [isButtonVisible, setIsButtonVisible] = useState({
        activeObject: null,
        objects: [
            {
                id: 1,
                arr: 28
            },
            {
                id: 2,
                arr: 29
            },
            {
                id: 3,
                arr: 30
            },
            {
                id: 4,
                arr: 31
            },
            {
                id: 5,
                arr: 32
            },
            {
                id: 6,
                arr: 33
            },
        ]
    })

    // Click -> dữ nguyên object, thay đổi activeObject
    const toggleActive = (index) => {
        setIsButtonVisible({...isButtonVisible, activeObject: isButtonVisible.objects[index]})
    }

    // Nếu vị trí activeObject trùng với vị trí khi Click vào
   const toggleActiveStyle = (index) => {
        if(isButtonVisible.objects[index] === isButtonVisible.activeObject) {
            return 'size active box'
        }
        else return 'size'
    }
    return (
            <div className="home-detail mrt mrb">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-8 m-12 c-12">
                            <div className="breadcrumb">
                                <Link to="#"><i className="fas fa-arrow-left"></i>Trở lại</Link>           
                            </div>
                            <div className="home-detail-content">
                                <div className="home-detail-item">
                                    <div className="home-detail-img">
                                        <img src={Hinh} alt=""/>
                                    </div>
                                </div>
                                <div className="home-detail-description">
                                    <div className="row sm-gutter">
                                        <div className="col l-12">
                                            <h2 className="title">Mô tả</h2>
                                        </div>

                                        <div className="col l-6">
                                          <div className="text-content">
                                            <h2 className="name">ZX 8000 W SUPEREARTH</h2>
                                            <p className="text">
                                                Nâng tầm cuộc chơi của riêng bạn. Phiên bản này có sử dụng chất liệu tái chế, là một phần cam kết của adidas hướng tới chấm dứt rác thải nhựa.Sản phẩm này may bằng vải công nghệ Primeblue, chất liệu tái chế hiệu năng cao có sử dụng sợi Parley Ocean Plastic. 50% thân giày làm bằng vải dệt, 92% vải dệt bằng sợi Primeblue. Không sử dụng polyester nguyên sinh.
                                            </p>
                                          </div>
                                            
                                        </div>
                                        <div className="col l-6">
                                            <img src={Hinh} alt=""/>
                                        </div>
                                    </div>
                                
                                </div>


                                <div className="home-detail-description">
                                    <div className="row sm-gutter">
                                        <div className="col l-12">
                                            <h2 className="title">thông số</h2>
                                        </div>

                                        <div className="col l-6">
                                            <ul className="list-parameters">
                                                <li>Vừa vặn như đi tất</li>
                                                
                                                <li>Có dây giày</li>
                                                
                                                <li>Lớp lót bằng vải dệt</li>
                                            </ul>
                                        </div>
                                        <div className="col l-6">
                                            <ul className="list-parameters">
                                                <li>Trọng lượng: 340 g</li>
                                                <li>Đệm gót giày hình chữ S</li>
                                                <li>Primeblue</li>
                                            </ul>
                                        </div>
                                    </div>
                                
                                </div>
                                
                            </div>                                                            
                        </div>
                        <div className="col l-4 m-0 c-0">
                           
                                <div className="detail-slidebar">
                                    <h2 className="detail-name">ZX 8000 W SUPEREARTH</h2> 
                                    <p className="detail-price">2.300.000₫</p>
                                    <div className="detail-size">
                                        <h3 className="name-size">Chọn size</h3>
                                            <div className="container-size">
                                            {
                                                // element là từng phần tử, index là key
                                                isButtonVisible.objects.map((element, index) => (
                                                    <button className={toggleActiveStyle(index)} key={index} onClick={() => toggleActive(index)}>{element.arr}</button>
                                            ))
                                            }
                                            </div>
                                    </div>

                                    <div className="btn btn-add-cart">Thêm vào giỏ hàng<i className="fas fa-arrow-right"></i></div>
                                </div>
                        
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default DetailProduct
