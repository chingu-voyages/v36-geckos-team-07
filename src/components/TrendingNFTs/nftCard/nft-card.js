import React from 'react';
import Card from 'react-bootstrap/Card';

const TrendingNftsCard = ({dailyNFT}) => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{dailyNFT.nft_name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{dailyNFT.collection}</Card.Subtitle>
                    <Card.Text> Price: {dailyNFT.price} </Card.Text>
                    <Card.Text> Last update {dailyNFT.date} </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default TrendingNftsCard;

// const sampleNFTs = [
//     {
//         "nft_name":"Citizen #703",
//         "nft_url":"https://www.nft-stats.com/asset/0xb668beb1fa440f6cf2da0399f8c28cab993bdd65/703",
//         "collection":"NeoTokyo Citizens",
//         "collection_url":"https://www.nft-stats.com/collection/neotokyo-citizens",
//         "date":"about 20 hours ago",
//         "price":"$364k"
//     }
// ]