import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Contato from './pages/Contato';
import Hero from './pages/Hero';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';

function App() {  
	return (
		<div className="min-h-screen w-full max-w-screen-2xl font-DMSans">
			<BrowserRouter>
				<Hero/>
				<Servicos/>
				<Sobre/>
				<Contato/>
				<Footer/>
			</BrowserRouter>
		</div>
	);
	}

export default App;
