import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet/Greet';
import { Application } from './components/application/Application';
import Skills from './components/skills/Skills';
import { Counter } from './components/counter/Counter';
import { MuiMode } from './components/mui/MuiModes';
import { AppProviders } from './providers/AppProviders';

function App() {
	return (
		<AppProviders>
			<div className="App">
				{/* <Application />
			<Skills skills={['HTML', 'CSS']} />
			<Counter /> */}

				<MuiMode />
			</div>
		</AppProviders>
	);
}

export default App;
