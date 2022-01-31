// MAY NOT NEED THIS FILE AFTER FETCH PROCESS IS MOVED INTO nft-card-list

import React, { Component } from 'react';
import TrendingNftsList from './nft-card-list/nft-card-list';

const dailyNFTsSample = require('./NFTsDaily.json');
const weeklyNFTsSample = require('./NFTsWeekly.json');
const monthlyNFTsSample = require('./NFTsMonthly.json');

class TrendingNFTs extends Component {

    constructor(){
        super();
        
        this.state = {
            dailyNFTs: dailyNFTsSample,
            weeklyNFTs: weeklyNFTsSample,
            monthlyNFTs: monthlyNFTsSample
        };
        
        // this.state = {
        //     dailyNFTs: [],
        //     weeklyNFTs: [],
        //     monthlyNFTs: []
        // };

    }


    componentDidMount() {
    
        // fetch("https://top-nft-sales.p.rapidapi.com/sales/1d", {
	    //     "method": "GET",
	    //     "headers": {
		//         "x-rapidapi-host": "top-nft-sales.p.rapidapi.com",
		//         "x-rapidapi-key": "1d90138037mshd72dce2bb152a40p19e98ajsn12ed41b42bf2"
	    //     }
        // })
        // .then(response => {
        //     if (response.ok && response.headers.get('Content-Type').includes('application/json')) {
        //         return response.json();
        //     } else {
        //         throw new Error('Something went wrong')
        //     }
        // })
        // .then(data => {
        //     this.setState({ dailyNFTs: data })
        // })
        // .catch(err => {
	    //     console.error(err);
        // });
    }
    
    render() {
        return (
            <div>
                <TrendingNftsList title={'Daily'} NFTs={this.state.dailyNFTs}/>            
                <TrendingNftsList title={'Weekly'} NFTs={this.state.weeklyNFTs}/>            
                <TrendingNftsList title={'Monthly'} NFTs={this.state.monthlyNFTs}/>            
            </div>
        );    
    }
}

export default TrendingNFTs;