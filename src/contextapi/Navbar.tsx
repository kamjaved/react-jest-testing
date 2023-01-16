//  this is c component where user details is needed and displayed and to do this we need to get user from auth context

import React, { useContext } from 'react';
import { AuthContext } from './UserContext';

const Navbar = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	return (
		<>
			------------------------------------------
			<h4>
				<strong>Name:</strong>
				{user.name}
			</h4>
			<h4>
				<strong>Email:</strong>
				{user.email}
			</h4>
			<p>Navbar Component where user details have to be Displayed</p>
		</>
	);
};

export default Navbar;
