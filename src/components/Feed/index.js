import React, { Component } from 'react'
import { NewsCard } from './newsCard/newsCard';

class MainFeed extends Component {


    componentDidMount(){
        fetch("https://cryptocurrency-news-live1.p.rapidapi.com/NFT_DeFi", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "cryptocurrency-news-live1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
            }
        })
        .then(response => {
            console.log(response.json());
        })
        .catch(err => {
            console.error(err);
        });

       
    }

    render(){

        return(
            <div>
                <NewsCard></NewsCard>
            </div>
        )

    }
 
 

}

export default MainFeed;