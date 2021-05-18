import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductAPI = () => {
	const [products, setProducts] = useState([]);
	const [callback, setCallback] = useState(false);
	const [category, setCategory] = useState('');
	const [sort, setSort] = useState('');

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

	const handleReset = () => {
		setSort('');
		setCategory('');
		setSearch('');
	};

	return {
		products: [products, setProducts],
		callback: [callback, setCallback],
		category: [category, setCategory],
		sort: [sort, setSort],
		search: [search, setSearch],
		page: [page, setPage],
		handleReset
	};
};

export default ProductAPI;
