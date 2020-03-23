import React from 'react';
import ApartmentCard from '../ApartmentCard';

function ApartmentList(apartments){
    
    return (
        <ApartmentCard />
        // apartments && apartments.length > 0 && apartments.map(apartment => {
        //     <ApartmentCard name={apartment.id} />
        // })
    )
}
export default ApartmentList;
