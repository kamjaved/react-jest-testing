// this is the componenet where we we may call API to fecth user details and set user details

import React, { useContext, useEffect } from 'react';
import { AuthContext } from './UserContext';

const AuthComponent = () => {
	const { user, setUser } = useContext(AuthContext);

	useEffect(() => {
		setUser({ name: 'Kamran', email: 'kamranjaved@abcd.com' });
	}, []);

	console.log({ user });
	return <div>AuthComponent</div>;
};

export default AuthComponent;
