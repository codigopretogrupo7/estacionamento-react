import React from 'react';
import ParkingCard from '../Card2/Card';
/*import './List.css';*/

const ParkingList = ({loading, parkings})  =>{
    if (loading){
        return (
            <div>Carregando...</div>
        )
    }
    return (
        <div className="parking-list">
            {parkings.map((parking)=>(
                <ParkingCard key={parking.id} parking ={parking}/>
            ))}
        </div>
    )
}

export default ParkingList;