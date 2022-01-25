import React from 'react';
import TrendingNftsCard from '../nftCard/nft-card';

const TrendingNftsList = ({sampleNFTs}) => {

    return (
        <div>
            <h1>Trending NFT List</h1>    
            {sampleNFTs.map(NFT =>
                <TrendingNftsCard nft_name={NFT.nft_name} nft_url={NFT.nft_url} collection={NFT.collection} collection_url={NFT.collection_url} date={NFT.date} price={NFT.price} /> 
            )}
        </div>
    );
}

export default TrendingNftsList;