import React from 'react';
import { NewsCard } from '../newsCard/newsCard';
import { DropDown, Option } from '../../dropdown/dropdown'


export const NewsCardList = (props) => (
    <div className='newsCardList'>
        <h1>News</h1>
        <DropDown
            formLabel="Choose news source"
            action="/"
        >
            <Option selected value="Click to see options" />
            <Option value="Option 1" />
            <Option value="Option 2" />
            
            {props.news.map((news, index) => (
                
                <Option key={index} value={news} />
                
            ))}
        </DropDown>
        <div className='news-container'>
            {props.news.map((news, index) => (
                <NewsCard key={index} news={news} />
            ))}
        </div>

    </div>
);