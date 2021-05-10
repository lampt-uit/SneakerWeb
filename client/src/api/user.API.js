import { useState, useEffect } from 'react';
import axios from 'axios';

const UserAPI = (token) => {
	const [callback, setCallback] = useState(false);
	const [isLogged, setIsLogged] = useState(false);
	const [userInfo, setUserInfo] = useState([]);

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

	return {
		isLogged: [isLogged, setIsLogged],
		userInfo: [userInfo, setUserInfo],
		callback: [callback, setCallback]
	};
};

export default UserAPI;
