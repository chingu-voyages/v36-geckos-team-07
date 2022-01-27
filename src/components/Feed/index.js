import React, { Component } from 'react'
import { NewsCardList } from './news-card-list/news-card-list';
import { DropDown, Option } from './main-feed-dropdown/main-feed-dropdown'

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
            <div>
                <DropDown 
                    formLabel="Choose News Source"
                >
                    <Option selected value="click to see options" />
                    <Option value="Option 1"/>
                    <Option value="option 2"/>
                    <Option value="Option 3"/>
                </DropDown>

                <NewsCardList news={this.state.news}>

                </NewsCardList>
            
            </div>
        )

    }
 
 

}

export default MainFeed;