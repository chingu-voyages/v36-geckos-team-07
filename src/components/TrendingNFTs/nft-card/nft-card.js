import React from 'react';
import Card from 'react-bootstrap/Card';

const TrendingNftsCard = ({NFT}) => {

    return (
        <>
            <Card className="my-3 mx-4 nft-card" border="primary">
                <Card.Body>
                    <Card.Title>{NFT.nft_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Collection: {NFT.collection}</Card.Subtitle>
                    <Card.Text className="mb-0"> Price: {NFT.price} </Card.Text>
                    <Card.Text className="mb-0"> Last update: {NFT.date} </Card.Text>
                    <a href={NFT.nft_url} target="_blank" className="stretched-link"></a>
                </Card.Body>
            </Card>
        </>
    );
}

export default TrendingNftsCard;