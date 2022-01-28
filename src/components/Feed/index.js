import React, { Component } from 'react'
import { NewsCardList } from './news-card-list/news-card-list';


class MainFeed extends Component {
    constructor(){
        super()

        this.state = {
            news: [],
            dropdown: ''
        }
    }

    componentDidMount(){
        fetch("https://cryptocurrency-news-live1.p.rapidapi.com/news", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "cryptocurrency-news-live1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
            }
        })
        .then(response => {
            if(
                // check if response's status is 200
                response.ok && 
                // check if API return data is in JSON format
                response.headers.get('Content-Type').includes('application/json')
            ){
                return response.json()
            } else {
                throw new Error('somehting went wrong')
            }
        })
        .then(data => {
            this.setState({ news: data })
        })
        .catch(err => {
            console.error(err);
        });

   
    }

    handleChange = (e) => {
        this.setState({ dropdown: e.target.value })
    }

    render(){

        return(
            <>
                <NewsCardList news={this.state.news}>

                </NewsCardList>
            
            </>
        )

    }
 
 

}

export default MainFeed;