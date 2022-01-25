import React from 'react';
import { NewsCard } from '../newsCard/newsCard';

export const NewsCardList = (props) => (
     <div>
        <h1>News</h1>
        {props.news.map((news, index) => (
            <NewsCard key={index} news={news} />
        ))}
    </div>
);