import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import CardCountry from './components/CardCountry';

function App() {
	const [countries, setCountries] = useState();

	useEffect(() => {
		const URL = 'https://restcountries.com/v3.1/lang/spanish';
		axios
			.get(URL)
			.then((res) => {
				const startWithB = res.data.filter((country) =>
					country.name.common.startsWith('E')
				);
				setCountries(startWithB);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="App">
			<h1 className="general-title">
				Countries {countries && Object.values(countries[0].languages)[0]}
			</h1>
			<div className="card-container">
				{countries?.map((country) => (
					<CardCountry
						key={`${country.area}-${country.population}-${country.name.official}`}
						country={country}
					/>
				))}
			</div>
		</div>
	);
}

export default App;

// instalar axios
// useState
//useEffect(callback y un arreglo de dependencias vacio)
