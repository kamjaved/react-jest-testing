// this component will create authprovider or context setup

import {
	ReactNode,
	createContext,
	Dispatch,
	SetStateAction,
	useState,
} from 'react';

export type User = {
	name: string;
	email: string;
};

export interface AuthContextInterface {
	user: User;
	setUser: Dispatch<SetStateAction<User>>;
}
const initialState = {
	user: {
		name: '',
		email: '',
	},
	setUser: (user: User) => {},
} as AuthContextInterface;

export const AuthContext = createContext(initialState);

type AuthProviderProps = {
	children: ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User>({
		name: '',
		email: '',
	});

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}
