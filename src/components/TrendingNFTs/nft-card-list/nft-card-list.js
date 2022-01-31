import React, { Component, useState, useEffect } from 'react';
import TrendingNftsCard from '../nftCard/nft-card';

const dailyNFTsSample = require('../NFTsDaily.json');
const weeklyNFTsSample = require('../NFTsWeekly.json');
const monthlyNFTsSample = require('../NFTsMonthly.json');

const TrendingNftsList = ({title}) => {
    
    const [NFTs, setNFTs] = useState([]);

    useEffect(()=> {
        if (title === 'Daily') {
            setNFTs(dailyNFTsSample);
        } else if (title === 'Weekly') {
            setNFTs(weeklyNFTsSample);
        } else if (title === 'Monthly') {
            setNFTs(monthlyNFTsSample);
        } else {
            console.log('time duration for trending NFTs invalid')
        }   
    }, [title])

    return (
        <div className="nft-list" >
            <h2 className="nft-list-title">{title} Trending NFTs</h2>    
            {NFTs.map((NFT, index) =>
                <TrendingNftsCard key={index} NFT={NFT}/> 
            )}
        </div>
    );
}

export default TrendingNftsList;