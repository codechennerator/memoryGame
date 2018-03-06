import React from 'react';

export const Card = props => (
    <div className = "col-sm-2">
        <img alt = {props.name} src = {props.img} className = "img-thumbnail" onClick = {props.onClick}/>
    </div>
);