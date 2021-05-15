import { useState, useEffect } from 'react';
import axios from 'axios';

const UserAPI = (token) => {
	const [callback, setCallback] = useState(false);
	const [cart, setCart] = useState([]);
	const [isLogged, setIsLogged] = useState(false);
	const [userInfo, setUserInfo] = useState([]);
	const [pro, setPro] = useState([]);
	useEffect(() => {
		if (token) {
			const getUser = async () => {
				const res = await axios.get('/user/info', {
					headers: { Authorization: token }
				});
				// console.log(res);
				setUserInfo(res.data);
				setIsLogged(true);
			};
			getUser();
		}
	}, [token, callback]);

	useEffect(() => {
		const getProducts = async () => {
			const res = await axios.get('/api/products');
			// console.log(res.data.products);
			setPro(res.data.products);
		};
		getProducts();
	}, [callback]);

	const addToCart = (id) => {
		const check = cart.every((item) => {
			return item._id !== id;
		});
		if (check) {
			const data = pro.filter((product) => {
				return product._id === id;
			});
			setCart([...cart, ...data]);
		} else {
			alert('San pham da them vao gio hang');
		}
	};

	useEffect(() => {
		const dataCart = JSON.parse(localStorage.getItem('dataCart'));
		if (dataCart) setCart(dataCart);
	}, []);

	useEffect(() => {
		localStorage.setItem('dataCart', JSON.stringify(cart));
	}, [cart]);

	useEffect(() => {
		const cartLocal = JSON.parse(localStorage.getItem('dataCart'));
		// console.log(cartLocal);
		if (cartLocal && cartLocal.length > 0) {
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
	}, [token, cart]);

	return {
		isLogged: [isLogged, setIsLogged],
		userInfo: [userInfo, setUserInfo],
		cart: [cart, setCart],
		callback: [callback, setCallback],
		addToCart
	};
};

export default UserAPI;
