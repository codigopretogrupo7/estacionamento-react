import React, { useEffect, useState } from 'react';
import ParkingList from '../List/List';
import './Search.css';

import api from '../../api';

const ParkingSearch = () => {
	const [parkings, setParkings] = useState([]);

	useEffect(() => {
		try{
			api.get('/api/estacionamentos/list').then((response) => {
				setParkings(response.data);
			});

		}catch(e){
			console.log(e)
		}
	}, [parkings]);

	return (
		<div className='parking-search'>
			<header className='parking-search__header'>
				<h1>Estacionamentos Parceiross</h1>
			</header>

			<ParkingList parkings={parkings} loading={!parkings.length} />
		</div>
	);
};

export default ParkingSearch;
