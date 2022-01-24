import React from 'react';

export const NewsCard = (props) => (
    <div>
        <div>
            <h3>{props.news.name}</h3>
            <p>{props.news.title}</p>
        </div>
    </div>
);