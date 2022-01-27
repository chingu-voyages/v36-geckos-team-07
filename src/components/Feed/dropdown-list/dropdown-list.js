import React from 'react';
import { Option } from '../main-feed-dropdown/main-feed-dropdown';

export const DropdownList = (props) => (
    <div>

        {
            props.news.map((news, index) => (
                <Option key={index} value={news.title} />
            ))
        }
    </div>
)