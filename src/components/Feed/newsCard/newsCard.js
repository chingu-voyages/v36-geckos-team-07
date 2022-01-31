import React from 'react';

export const NewsCard = (props) => (
    <div className='news-card'>
        <a href={props.news.url}>
            <h3>{props.news.name}</h3>
            <p>{props.news.title}</p>
        </a>
    </div>
);