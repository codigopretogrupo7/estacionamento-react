
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ParkingList from '../List/List';
import './Search.css';



const ParkingSearch = () => {
    const[parkings, setParkings] = useState([]);
    const[search, setSearch] = useState('');

    useEffect(() => {
        const params ={};
        if(search){
            params.Nome_Estacionamento_like = search;
        }
        axios.get('http://localhost:5000/parkings',{params})
        .then((response) => {
          setParkings(response.data);
        });
    }, [search]);

    return(
        <div className="parking-search">
            <header className="parking-search__header">
                <h1>Estacionamentos</h1>
                <Link to="/create">Novo estacionamento</Link>
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