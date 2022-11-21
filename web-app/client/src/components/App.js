import React from 'react';
import lightql, { LRUCache } from '../../../../npm-package/lightql';
import { Link, Route, Routes } from 'react-router-dom';
import '../styling/sitewide.scss';
import Homepage from './Homepage.js';
import Docs from './Docs.js';
import AboutUs from './AboutUs.js';

// import { motion } from 'framer-motion';
const logo = require('../../../assets/LightQL.png')

const App = () => {

   
	return (
		<>
			 <section id='navbar'>
				<section id='left-nav'>
					<img id='navbar-logo' src={logo.default} />
					<Link to='/'>
						<button id='home-btn' className='nav-btns'>
						Home
						</button>
					</Link>

					<Link to='/docs'>
						<button id='docs-btn' className='nav-btns'>
						Docs
						</button>
					</Link>

					<Link to='/aboutus'>
						<button id='aboutus-btn' className='nav-btns'>
						About Us
						</button>
					</Link>				
				</section>
				<section id='right-nav'>
					<Link to='https://github.com/oslabs-beta/LightQL'>
						{/* github icon image */}
						<div id='placeholder'></div>
					</Link>
					<Link to='https://www.npmjs.com/package/lightql-cache'>
						{/* npm icon image */}
						<div id='placeholder'></div>
					</Link>
				</section>
			 </section>
			<Routes>
				<Route 
					path='/'
					element={
						<Homepage 
						/* props placeholder */
						/* props placeholder */
						/* props placeholder */
						/>
					}
				/>
				<Route
					path='/docs'
					element={
						<Docs
						/* props placeholder */
						/* props placeholder */
						/* props placeholder */
						/>
					}
				/>
				<Route
					path='/aboutus'
					element={
						<AboutUs
						/* props placeholder */
						/* props placeholder */
						/* props placeholder */
						/>
					}
				/>
			</Routes>
		</>
	)

}

export default App;