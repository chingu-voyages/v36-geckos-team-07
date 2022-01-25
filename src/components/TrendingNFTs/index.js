import React from 'react';
import TrendingNftsList from './nft-card-list/nft-card-list';

const TrendingNFTs = () => {
   
    const sampleNFTs = [
        {
            "nft_name":"Citizen #703",
            "nft_url":"https://www.nft-stats.com/asset/0xb668beb1fa440f6cf2da0399f8c28cab993bdd65/703",
            "collection":"NeoTokyo Citizens",
            "collection_url":"https://www.nft-stats.com/collection/neotokyo-citizens",
            "date":"about 20 hours ago",
            "price":"$364k"
        },
        {
            "nft_name":"Citizen #1542", 
            "nft_url":"https://www.nft-stats.com/asset/0xb668beb1fa440f6cf2da0399f8c28cab993bdd65/1542",
            "collection":"NeoTokyo Citizens",
            "collection_url":"https://www.nft-stats.com/collection/neotokyo-citizens",
            "date":"about 6 hours ago",
            "price":"$327k"
        },
        {
            "nft_name":"CryptoPunk #3021",
            "nft_url":"https://www.nft-stats.com/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/3021",
            "collection":"CryptoPunks",
            "collection_url":"https://www.nft-stats.com/collection/cryptopunks",
            "date":"about 12 hours ago",
            "price":"$318k"
        },
        {
            "nft_name":"RAREPEPE Card 1, Series 1 - The Nakamoto Card",
            "nft_url":"https://www.nft-stats.com/asset/0x82c7a8f707110f5fbb16184a5933e9f78a34c6ab/7739844936979261",
            "collection":"Emblem Vault [Ethereum]",
            "collection_url":"https://www.nft-stats.com/collection/emblem-vault",
            "date":"about 16 hours ago",
            "price":"$289k"
        },
        {
            "nft_name":"CryptoPunk #2058",
            "nft_url":"https://www.nft-stats.com/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/2058",
            "collection":"CryptoPunks",
            "collection_url":"https://www.nft-stats.com/collection/cryptopunks",
            "date":"about 2 hours ago",
            "price":"$281k"
        },
        {
            "nft_name":"CryptoPunk #3737",
            "nft_url":"https://www.nft-stats.com/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/3737",
            "collection":"CryptoPunks",
            "collection_url":"https://www.nft-stats.com/collection/cryptopunks",
            "date":"about 2 hours ago",
            "price":"$274k"
        },
        {
            "nft_name":"Bored Ape Yacht Club",
            "nft_url":"https://www.nft-stats.com/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/6590",
            "collection":"Bored Ape Yacht Club",
            "collection_url":"https://www.nft-stats.com/collection/boredapeyachtclub",
            "date":"about 23 hours ago",
            "price":"$270k"
        },
        {
            "nft_name":"CryptoPunk #1007",
            "nft_url":"https://www.nft-stats.com/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1007",
            "collection":"CryptoPunks",
            "collection_url":"https://www.nft-stats.com/collection/cryptopunks",
            "date":"about 7 hours ago",
            "price":"$267k",
        }
    ]

    return (
        <div>
            <TrendingNftsList sampleNFTs={sampleNFTs}/>            
        </div>
    );
}

export default TrendingNFTs;