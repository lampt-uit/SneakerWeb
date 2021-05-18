import React, { useEffect, useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';
import './OrderHistory.css';
import axios from 'axios';

function OrderHistory() {
	const state = useContext(GlobalState);
	const [history, setHistory] = state.userAPI.history;
	const [token] = state.token;

	useEffect(() => {
		if (token) {
			const getHistory = async () => {
				const res = await axios.get('/user/history', {
					headers: { Authorization: token }
				});
				setHistory(res.data);
			};
			getHistory();
		}
	}, [token, setHistory]);

	if (history.length === 0)
		return (
			<h2
				style={{ textAlign: 'center', fontSize: '5rem', paddingTop: '100px' }}
			>
				Bạn chưa mua hàng
			</h2>
		);

	return (
		<div className='history'>
			<div className='history-content'>
				<h2>Cảm ơn bạn đã mua hàng của chúng tôi.</h2>
			</div>

			<div className='history-page'>
				<h2>Lịch sử đơn hàng</h2>
				<h4>Bạn đã có {history.length} đơn hàng</h4>
				<table>
					<thead>
						<tr>
							<th>Mã đơn</th>
							<th>Ngày mua</th>
							<th>Chi tiết</th>
						</tr>
					</thead>
					<tbody>
						{history.map((items) => (
							<tr key={items._id}>
								<td>{items._id}</td>
								<td>{new Date(items.createdAt).toLocaleDateString()}</td>
								<td>
									<Link to={`/history/${items._id}`}>Xem</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default OrderHistory;
