import React from 'react';
import TrendingNftsCard from '../nftCard/nft-card';

const TrendingNftsList = ({dailyNFTs}) => {
    
    console.log('dailyNFTs', dailyNFTs)
    
    return (
        <div>
            <h2>Today's Trending NFTs</h2>    
            {dailyNFTs.map((dailyNFT, index) =>
                <TrendingNftsCard key={index} dailyNFT={dailyNFT}/> 
            )}
        </div>
    );
}

export default TrendingNftsList;