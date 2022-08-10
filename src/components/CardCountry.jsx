import React from 'react';

const CardCountry = ({ country }) => {
	return (
		<article className="card">
			<img
				clasName="card__img"
				src={country.flags.svg}
				alt={`${country.name.common} flag`}
			/>
			;<h2 className="card-title">{country.name.common}</h2>
		</article>
	);
};

export default CardCountry;
