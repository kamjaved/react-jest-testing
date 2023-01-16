import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet/Greet';
import { Application } from './components/application/Application';
import Skills from './components/skills/Skills';
import { Counter } from './components/counter/Counter';
import { MuiMode } from './components/mui/MuiModes';
import { AppProviders } from './providers/AppProviders';
import Navbar from './contextapi/Navbar';
import AuthProvider from './contextapi/UserContext';
import AuthComponent from './contextapi/AuthComponent';

function App() {
	return (
		<AuthProvider>
			<AppProviders>
				<div className="App">
					{/* <Application />
			<Skills skills={['HTML', 'CSS']} />
			<Counter /> */}

					<MuiMode />

					{/* demo: Context API With Typescript not releated to testing */}
					<AuthComponent />
					<Navbar />
				</div>
			</AppProviders>
		</AuthProvider>
	);
}

export default App;
