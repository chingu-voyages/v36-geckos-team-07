import React, { Component } from 'react'
import { NewsCard } from './newsCard/newsCard';

class MainFeed extends Component {

    constructor(){
        super();

    }

    componentDidMount(){
        fetch("https://blockchain-news1.p.rapidapi.com/news", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "blockchain-news1.p.rapidapi.com",
                "x-rapidapi-key": "35574a9721msh4f07d22f672145ep1c8069jsneb18644463b1"
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