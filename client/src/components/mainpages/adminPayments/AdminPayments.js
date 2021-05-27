import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import './AdminPayments.css';
import { GlobalState } from '../../../GlobalState';
import Toast from '../utils/Toast/Toast';

function AdminPayments() {
	const state = useContext(GlobalState);
	const [token] = state.token;
	const [payments, setPayments] = useState([]);
	const [callback, setCallback] = useState(false);
	const [status, setStatus] = useState({ err: '', success: '' });

	useEffect(() => {
		if (token) {
			const getPayments = async () => {
				const res = await axios.get('/api/payments', {
					headers: { Authorization: token }
				});
				setPayments(res.data);
			};

			getPayments();
		}
	}, [setPayments, token, callback]);

	const unPaid = payments.filter((payment) => {
		return payment.status === false;
	});
	const paid = payments.filter((payment) => {
		return payment.status === true;
	});

	const handlePaid = async (id) => {
		try {
			const res = await axios.patch(
				`/api/payment/${id}`,
				{
					status: 1
				},
				{
					headers: { Authorization: token }
				}
			);
			setStatus({ ...status, err: '', success: res.data.msg });
			setCallback(!callback);
		} catch (error) {
			error.response.data.msg &&
				setStatus({ ...status, success: '', err: error.response.data.msg });
		}
	};

	const handleDelete = async (id) => {
		try {
			if (window.confirm('Are you sure want to delete this product ?')) {
				const res = await axios.delete(`/api/payment/${id}`, {
					headers: { Authorization: token }
				});
				setStatus({ ...status, err: '', success: res.data.msg });
				setCallback(!callback);
			}
		} catch (error) {
			error.response.data.msg &&
				setStatus({ ...status, success: '', err: error.response.data.msg });
		}
	};

	return (
		<>
			{status.success && <Toast type='success' msg={status.success} />}
			<div className='admin-payments mrt mrb'>
				<h1>Orders Management</h1>
				<div className='grid wide'>
					<div className='row'>
						<div className='col l-3'>
							<div className="row">
								<div className="col l-12 result">
									<span className="title1">Total Paymnents</span>
									<p className="text">{payments.length}</p>
								</div>
								<div className="col l-12 result">
									<span className="title1">Unpaid Paymnents</span>
									<p className="text">{unPaid.length}</p>
								</div>
								<div className="col l-12 result">
									<span className="title1">Paid Paymnents</span>
									<p className="text">{paid.length}</p>
								</div>
							</div>
						</div>
						<div className='col l-9'>
							<table>
								<thead>
									<tr
										style={{
											fontSize: '12px'
										}}
									>
										<th>Ordinal numbers</th>
										<th>Order's code</th>
										<th>Customer's code</th>
										<th>Status</th>
										<th>Option</th>
									</tr>
								</thead>
								<tbody>
									{payments.map((item, index) => (
										<tr key={item._id}>
											<td style={{ fontWeight: '700' }}>{index + 1}</td>
											<td>{item._id}</td>
											<td> {item.user_id ? item.user_id : 'Passing guests'}</td>
											<td style={{ fontWeight: '700' }}>
												{' '}
												{item.status ? 'Paid' : 'Unpaid'}{' '}
												{item.status === false ? (
													<button className="btn-paid"
														onClick={() => handlePaid(item._id)}
													>
														Paid
													</button>
												) : (
													''
												)}
											</td>
											<td>
												<i class='fas fa-edit'></i>&nbsp;
												<i
													class='fas fa-trash-alt'
													onClick={() => handleDelete(item._id)}
												></i>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminPayments;
