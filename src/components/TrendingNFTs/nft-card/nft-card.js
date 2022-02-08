import React from 'react';
import Card from 'react-bootstrap/Card';

const TrendingNftsCard = ({NFT}) => {

    return (
        <>
            <Card className="mb-3 mx-3 nft-card" border="primary">
                <Card.Body>
                    <Card.Title>{NFT.nft_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Collection: {NFT.collection}</Card.Subtitle>
                    <Card.Text> Price: {NFT.price} </Card.Text>
                    <Card.Text> Last update: {NFT.date} </Card.Text>
                    <a href={NFT.nft_url} target="_blank" class="stretched-link"></a>
                </Card.Body>
            </Card>
        </>
    );
}

export default TrendingNftsCard;