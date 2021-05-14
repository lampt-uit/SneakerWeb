import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductAPI = () => {
	const [products, setProducts] = useState([]);
	const [callback, setCallback] = useState(false);
	const [cart, setCart] = useState([]);
	const [category, setCategory] = useState('');
	const [sort, setSort] = useState('');
	// console.log(sort);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);

	useEffect(() => {
		const getProducts = async () => {
			const res = await axios.get(
				`/api/products?limit=${
					page * 30
				}&${category}&${sort}&title[regex]=${search}`
			);
			// console.log(res.data);
			setProducts(res.data.products);
		};
		getProducts();
	}, [callback, page, category, sort, search]);

	const addToCart = (id) => {
		const check = cart.every((item) => {
			return item._id !== id;
		});
		if (check) {
			const data = products.filter((product) => {
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

	return {
		products: [products, setProducts],
		callback: [callback, setCallback],
		category: [category, setCategory],
		cart: [cart, setCart],
		sort: [sort, setSort],
		search: [search, setSearch],
		page: [page, setPage],
		addToCart
	};
};

export default ProductAPI;
