import React from 'react';
import { Card, Rating, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './card.css'

function ApartmentCard({   
        name, 
        location, 
        price, 
        currency,
        image,
        rating,
        bedrooms,
        guests,
        title
    }){
        return (
            <Card>
                <Image src={image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header className="cardHeader">{name}</Card.Header>

                    <Card.Description>
                        <h5 className='location'>
                            {location}
                            <br/>
                            {currency} {price}
                            <br/> <br/>
                            {title} | No. of Bedrooms: {bedrooms} | No. of Guests: {guests}
                            <br /><br/>
                            <Rating defaultRating={rating} maxRating={5} disabled />
                        </h5>
                        
                    </Card.Description>
                </Card.Content>
                <Card.Content extra >
                    <Link href="/apartment" className="view">
                        View Details
                    </Link>
                </Card.Content>
            </Card>
        );
}

export default ApartmentCard;