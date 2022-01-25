import React from 'react';
import Card from 'react-bootstrap/Card';

const TrendingNftsCard = ({nft_name, nft_url, collection, collection_url, date, price}) => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{nft_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{collection}</Card.Subtitle>
                    <Card.Text> Price: {price} </Card.Text>
                    <Card.Text> Last update {date} </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default TrendingNftsCard;