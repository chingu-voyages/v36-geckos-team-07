import React, { Component } from 'react';
import TrendingNftsList from './nft-card-list/nft-card-list';

class TrendingNFTs extends Component {

    constructor(){
        super();
        
        this.state = {
            dailyNFTs: []
        };
    }

    componentDidMount() {
        fetch("https://top-nft-sales.p.rapidapi.com/sales/1d", {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "top-nft-sales.p.rapidapi.com",
		        "x-rapidapi-key": "1d90138037mshd72dce2bb152a40p19e98ajsn12ed41b42bf2"
	        }
        })
        .then(response => {
            if (response.ok && response.headers.get('Content-Type').includes('application/json')) {
                return response.json();
            } else {
                throw new Error('Something went wrong')
            }
        })
        .then(data => {
            this.setState({ dailyNFTs: data })
        })
        .catch(err => {
	        console.error(err);
        });
    }
    
    render() {
        return (
            <div>
                <TrendingNftsList dailyNFTs={this.state.dailyNFTs}/>            
            </div>
        );    
    }
}

export default TrendingNFTs;