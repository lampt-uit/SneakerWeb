import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import './OrderDetail.css';

function OrderDetails() {
	const params = useParams();
	const state = useContext(GlobalState);
	const [history] = state.userAPI.history;
	const [detailOrder, setDetailOrder] = useState([]);

	useEffect(() => {
		if (params.id)
			history.forEach((item) => {
				if (item._id === params.id) {
					setDetailOrder(item);
				}
			});
	}, [history, params.id]);
	if (detailOrder.length === 0) return null;

	const total = detailOrder.cart.reduce((prev, item) => {
		return prev + item.price * item.count;
	}, 0);

	const style = {
		color: !detailOrder.status ? 'red' : 'green'
	};

	return (
		<div className='history-detail'>
			<h1>Day la chi tiet don hang</h1>
			<table>
				<tr>
					<th>Tên người mua</th>
					<th>Điện thoại</th>
					<th>Địa chỉ nhận hàng</th>
					<th>Ngày mua</th>
					<th>Trạng thái đơn hàng</th>
				</tr>
				<tr>
					<td>{detailOrder.name}</td>
					<td>{detailOrder.phone}</td>
					<td>{detailOrder.address}</td>
					<td>{new Date(detailOrder.createdAt).toLocaleDateString()}</td>
					<td style={style}>
						{detailOrder.status ? 'Đã thanh toán' : 'Chưa thanh toán'}{' '}
					</td>
				</tr>
			</table>

			<table style={{ marginTop: '60px' }}>
				<tr>
					<th>Sản phẩm</th>
					<th>Tên</th>
					<th>Giá</th>
					<th>Số lượng</th>
					<th>Size</th>
				</tr>

				{detailOrder.cart.map((item) => (
					<tr style={{ backgroundColor: 'white' }}>
						<td>
							<img src={item.image[0]} alt='' />
						</td>
						<td>{item.title}</td>
						<td>$ {item.price}</td>
						<td>{item.count}</td>
						<td>{item.sizesl}</td>
					</tr>
				))}
				<tr>
					<td colSpan='4' style={{ fontSize: '20px', fontWeight: 700 }}>
						Tổng thanh toán
					</td>
					<td style={{ fontSize: '22px', fontWeight: 700, color: 'crimson' }}>
						$ {total}
					</td>
				</tr>
			</table>
		</div>
	);
}

export default OrderDetails;
