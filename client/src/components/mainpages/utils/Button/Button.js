import React from 'react';
import '../Base.css';

function Button({ text }) {
	return (
		<button className='btn form-submit btn-table-mobile' type='submit'>
			{text}
			<i className='fas fa-arrow-right'></i>
		</button>
	);
}

export default Button;
