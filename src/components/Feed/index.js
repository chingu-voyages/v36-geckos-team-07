import React, { Component } from 'react'
import { NewsCardList } from './news-card-list/news-card-list';
import { DropDown, Option} from '../Dropdown';
import TrendingNftsList from '../TrendingNFTs/nft-card-list/nft-card-list';   

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
                throw new Error('something went wrong')
            }
        })
        .then(data => {
            this.setState({ news: data })
        })
        .catch(err => {
            console.error(err);
        });

   
    }



    render(){
        const { news, dropdown } = this.state;
        const nameArray = []
        // filters the news array by name into new array filteredNews
        const filteredNews = news.filter(news => news.name.toLowerCase().includes(dropdown.toLowerCase()))
        

        const newsNames = (names) => {
    
            // takes the "names" array object and removes all the duplicates and enters it into a new array
            let noDuplicateNames = Array.from(new Set(names))   
        
            // with all the duplicates removed we return the remainder names by maping through it and entering the names into our imported Options tag
            return noDuplicateNames.map((name, index) => (
              <Option key={index} value={name} />
                
            ))
        }  

        const handleSelect = (e) => {
            this.setState({ dropdown: e.target.value })
        }

        return(
            <>
                {/* page header */}
                <div className="news-body">
                    <div className="daily-news">

                        {/* page header */}
                        <div className="page-head-container">
                            <div>
                                <h1>News Source</h1>
                                <p>Your Daily news source for all things crypto, blockchain, and NFTs</p>
                            </div>
                            <DropDown
                                formLabel="Choose news source"
                                onChange={handleSelect}
                            >
                                
                                {
                                    // maps through crypto news api and pushes the news api names to the created empty nameArray 
                                    news.map((news) => (
                            
                                        nameArray.push(news.name)
                                        
                                    ))
                                }
                                {
                                    // calls the function newsNames and enters nameArray as the object
                                    newsNames(nameArray)
                                }
                            </DropDown>


                        </div>
                        <hr
                            style={{
                            color: '#000000',
                            height: 5,
                            borderColor: '#000000'
                            }}
                        />
                        <NewsCardList news={filteredNews} />

                    </div>

                    <TrendingNftsList title={'Daily'} className="nft-list"/>
                
                </div>
            
            </div>
        )

    }
 
 

}

export default MainFeed;