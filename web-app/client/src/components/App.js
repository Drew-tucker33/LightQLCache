import React, { Component, useEffect, useState } from 'react';
import lightql, { LRUCache } from '../../../../npm-package/lightql';
import '../styles.scss'
// const db = require('../../../simulation/models');

const App = () => {

    // if error, check this line
    const [pulledData, setPulledData] = useState([]);
	const [user, setUser] = useState('');
    
	//Wednesday the 16th Notes (Day Before MVP)
		//modify the cache logic constructor to accept the endpoint. cache.get to check if the key exists and if so return it, if not then go to the graphql endpoint  
    
	
	

	// let favData = [];

	const setFavData = () => {
		console.log('favData:' + JSON.stringify(favData));
		// setPulledData(favData);
		//console.log('pulledData: ' + pulledData);
		//return JSON.stringify(favData);
	}

    // need to do classic JS fetch request 
	useEffect(() => { //same as component did mount and component did update aggregated
		const fetchData = () => {
			console.log('user: ' + user);
			
			//import the lighql cache add the endpoint into Lrucache 
			// const clientSideCache = new LRUCache(5, 'http://localhost:3000/graphql');
			// console.log('clientSideCache: ' + JSON.stringify(clientSideCache));
			// console.log('lightql: ' + JSON.stringify(lightql));
			//const query = function buildQuery('name front frend"  ex: cyrus, rhea);
			// const query = 
			//  	`\n`
			// 	`   query{ \n` +
			// 	`		 (${user}) {\n` +
			// 	`	}\n` +
			// 	`	}`;	
			//const dataWeFeedToFrontEnd = lightql.get(query);
			fetch('http://localhost:3000/graphql', {
				method: 'POST',
				headers: {'Content-type' : 'application/json',
					'Accept' : 'application/json',
			},
				body: JSON.stringify({query: `{
					user{
						user_name
						song_name
						movie_name
					}
				}`})
			})
			.then((res) => res.json())
			.then((data) => {
				const favData = data.data.user;
				console.log(favData)
				setPulledData(favData);
				
			})
			.catch((err) => console.log(`Error in useEffect fetch: ` + err))
			//setPulledData(dataWeFeedToFrontEnd);
			// console.log('dataWeFeedToFrontEnd: ' + JSON.stringify(dataWeFeedToFrontEnd));
			// console.log('dataWeFeedToFrontEnd: ' + dataWeFeedToFrontEnd);
			// console.log("gqldata: " + JSON.stringify(gqlData));
			// console.log('gqlData.data: ' + gqlData.data)
		};
		fetchData();
	}, [])
    	console.log(pulledData);

	
	// function fetchData() {
	// 	fetch('http://localhost:3')
	// 	  .then((response) => response.json())
	// 	  .then((data) => {
	// 		//whatever you want to do with data:
	// 		for (const m of data) {
	// 		 console.log(m.title)
	// 		}
	// 	  });
	//   }
	//   fetchData();

	
	

    // need invoke our cache passing in the query we are after


// also we display our retrieved data (object) in the return statement below
// just an idea: we could have two boxes here: one showing data in cache, and one showing data in database for demo purpose (one will be slower without eviction policy and larger)
	return (
		<div id='demo-body'> 
			<h1 id='page-title'>Welcome to LightQL</h1>
			<form>
				<select 
				name='user'
				id='input-box'
				type='text'
				value={user}
				onChange={(e) => {
					setUser(e.target.value);
					// console.log('e.target.value: ' + e.target.value)
				}}
				>
					<option value='' hidden default disabled>
						Whose favorites would you like to see?
					</option>
					<option value='Drew'>Drew</option>
					<option value='Cyrus'>Cyrus</option>
					<option value='Rhea'>Rhea</option>
					<option value='Pierce'>Pierce</option>
					<option value='Cassidy'>Cassidy</option>
				</select>
			</form>
			<section id='result-boxes'>
				<section id='cache' className='data-box'>
					<h2>Cache</h2>
				</section>
				<section id='database' className='data-box'>
					<h2>Database</h2>
					{pulledData.map((data, i) => {
						return <ul><li key={i}>{JSON.stringify(data)}</li></ul>
					})}
				</section>
			</section>
		</div>
	)

}

//buildquery function (Compiles a GraphQL query string tailored to the engine it's intended for)
			//input are the cache and any extrafields 




export default App;




