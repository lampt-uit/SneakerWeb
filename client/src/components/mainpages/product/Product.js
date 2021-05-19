import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalState } from '../../../GlobalState';
import './Product.css';
import ProductItem from '../productItem/ProductItem';
import Pagination from '../pagination/Pagination';
function Product() {
	const state = useContext(GlobalState);
	const [products] = state.productAPI.products;
	// const [category, setCategory] = state.productAPI.category;
	const [sort, setSort] = state.productAPI.sort;
	// const [search, setSearch] = state.productAPI.search;

	// console.log(products);
	const handleReset = state.productAPI.handleReset;

	return (
		<>
			<div className='home_product mrt mrb'>
				<div className='grid wide'>
					<div className='breadcrumb'>
						<Link to='#'>
							<i className='fas fa-arrow-left'></i>
							Trở lại
						</Link>
						<Link to='/' onClick={() => handleReset()}>
							Trang Chủ
						</Link>
					</div>
					<div className='reset_sort_search'>
						<h2>All Products </h2>

						<button onClick={() => handleReset()} title='Reset Sort And Search'>
							<i class='fas fa-sync-alt'></i>
						</button>
					</div>
					<div className='home_filter'>
						<span className='home_filter_label'>Sắp xếp theo </span>
						<button
							className='home_filter-button'
							onClick={() => setSort('sort=updatedAt')}
						>
							Mới nhất
						</button>
						<button
							className='home_filter-button'
							onClick={() => setSort('sort=-sold')}
						>
							Bán chạy
						</button>
						<button
							className='home_filter-button'
							onClick={() => setSort('sort=-numReviews')}
						>
							Phổ biến
						</button>

						<select
							className='select_price'
							value={sort}
							onChange={(e) => setSort(e.target.value)}
						>
							<option value=''>Giá</option>
							<option value='sort=-price'>Cao tới thấp</option>
							<option value='sort=price'>Thấp tới cao</option>
						</select>
					</div>
					<div className='row sm-gutter'>
						{products.map((product) => {
							return (
								<ProductItem key={product._id} product={product}></ProductItem>
							);
						})}
					</div>
				</div>
			</div>

			{/* {products.length >= 12 && <Pagination />} */}
			<Pagination />
		</>
	);
}

export default Product;
