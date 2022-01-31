import React from 'react';
import TrendingNftsList from '../components/TrendingNFTs/nft-card-list/nft-card-list';

const TrendingNFTsPage = () => {
    return (
        <div className="nft-page-container">
            <TrendingNftsList title={'Daily'} />            
            <TrendingNftsList title={'Weekly'} />            
            <TrendingNftsList title={'Monthly'} />            
        </div>
    );
}

export default TrendingNFTsPage;