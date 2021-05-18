import { useState, useEffect } from 'react';
import axios from 'axios';

const UserAPI = (token) => {
	const [callback, setCallback] = useState(false);
	const [cart, setCart] = useState([]);
	const [isLogged, setIsLogged] = useState(false);
	const [userInfo, setUserInfo] = useState([]);
	const [pro, setPro] = useState([]);
	const [history, setHistory] = useState([]);

	useEffect(() => {
		if (token) {
			const getUser = async () => {
				const res = await axios.get('/user/info', {
					headers: { Authorization: token }
				});
				// console.log(res);
				setUserInfo(res.data);
				setIsLogged(true);
				setCart([...cart, ...res.data.cart]);
			};
			getUser();
		}
		// eslint-disable-next-line
	}, [token]);

	useEffect(() => {
		const getProducts = async () => {
			const res = await axios.get('/api/products');
			// console.log(res.data.products);
			setPro(res.data.products);
		};
		getProducts();
	}, []);

	const addToCart = (id) => {
		const check = cart.every((item) => {
			return item._id !== id;
		});
		if (check) {
			const data = pro.filter((product) => {
				return product._id === id;
			});
			setCart([...cart, ...data]);
			setCallback(!callback);
		} else {
			alert('Sản phẩm đã có trong giỏ hàng.');
		}
	};

	useEffect(() => {
		const dataCart = JSON.parse(localStorage.getItem('dataCart'));
		if (dataCart) setCart([...cart, ...dataCart]);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		localStorage.setItem('dataCart', JSON.stringify(cart));
	}, [cart]);

	useEffect(() => {
		const cartLocal = JSON.parse(localStorage.getItem('dataCart'));
		// console.log(cartLocal);
		if (cartLocal) {
			let newArr = [];
			const updateCart = async () => {
				for (const item of cartLocal) {
					const res = await axios(`/api/product/${item._id}`);
					// console.log(res.data);
					newArr.push(res.data);
				}
				await axios.patch(
					'/user/addcart',
					{ cart: [...newArr] },
					{
						headers: { Authorization: token }
					}
				);
				// console.log(newArr);
			};

			updateCart();
		}
		// eslint-disable-next-line
	}, [callback]);

	return {
		isLogged: [isLogged, setIsLogged],
		userInfo: [userInfo, setUserInfo],
		cart: [cart, setCart],
		callback: [callback, setCallback],
		history: [history, setHistory],
		addToCart
	};
};

export default UserAPI;
