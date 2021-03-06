import React from 'react';
import { NewsCard } from '../newsCard/newsCard';

export const NewsCardList = (props) => (

    <div className='newsCardList'>

        <div className='news-container'>
            {props.news.map((news, index) => (
                <NewsCard key={index} news={news} />
            ))}
        </div>

    </div>
);