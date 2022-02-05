import React from 'react';
import Card from 'react-bootstrap/Card';

const TrendingNftsCard = ({NFT}) => {

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{NFT.nft_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{NFT.collection}</Card.Subtitle>
                    <Card.Text> Price: {NFT.price} </Card.Text>
                    <Card.Text> Last update {NFT.date} </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default TrendingNftsCard;