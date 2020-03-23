import React from 'react';
import ApartmentCard from '../ApartmentCard';

function ApartmentList(apartments){
    const apartmentList = apartments.apartments;
    if(apartmentList){
        return apartmentList.map(apartment => (
            <ApartmentCard 
                key={apartment.id} 
                name={apartment.details.name}
                location={apartment.location.name}
                price={apartment.price.total}
                currency={apartment.price.currency}
                image={apartment.photos[0].m}
                rating={apartment.rating.count}
                latitude={apartment.location.lat}
                longitude={apartment.location.lng}
                bedrooms={apartment.details.bedroomsCount}
                guests={apartment.details.guestsCount}
                title={apartment.details.apartmentTypeTitle}
                />
            ))
    }
}
export default ApartmentList;
