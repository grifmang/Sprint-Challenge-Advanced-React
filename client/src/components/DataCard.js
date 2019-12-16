import React from "react";

const DataCard = (props) => {

    return (
        <div className='card'>
            <h2>{props.name}</h2>
            <p>{props.country}</p>
            <p>{props.searches}</p>
        </div>
    )
}

export default DataCard;