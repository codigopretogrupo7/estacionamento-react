
import React, { useEffect, useState } from 'react';
import ParkingList from '../List/List';
import './Search.css';


import api from '../../api'

const ParkingSearch = () => {
    const[parkings, setParkings] = useState([]);
    const[search, setSearch] = useState('');

    useEffect(() => {
        const params ={};

        if(search){
            params.Nome_Estacionamento_like = search;
        }
        
        api.get('/parkings',{params})
        .then((response) => {
          setParkings(response.data);
        });
    }, [search]);

    return(
        <div className="parking-search">
            <header className="parking-search__header">
                <h1>Estacionamentos Parceiros</h1>
            </header>
          
            <input 
            type="search" 
            className="parking-search__input"
            placeholder="Buscar.."
            value={search}
            onChange={(event) =>setSearch(event.target.value)} 
            />
           
                <ParkingList parkings={parkings} loading={!parkings.length}/>
            
        </div>
        
        
    );
};

export default ParkingSearch;