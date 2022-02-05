import React from "react";

import '../../sass/components/_dropdown.scss';

export const DropDown = (props) => (
    <form 
        action={props.action}
        onChange={props.onChange}
    >
        <label htmlFor="newsSites">{props.formLabel}</label>
        <select id="newsSites">
            {props.children}
        </select>
    </form>
)

export const Option = (props) => (
    <option value={props.selected}>
        {props.value}
    </option>
) 