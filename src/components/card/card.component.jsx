import React from "react";
import './card.styles.css';
// export const Card = props=>(
//     <div className="card-container">
//         <img alt="humans" src={`https://robohash.org/${props.human.id}}?set=set5&size=200x200`}></img>
//         <h2>{props.human.name}</h2>
//         <p>{props.human.email}</p>
//     </div>
    
// )

export const Card = props=>(
    <div className="card-container">
        <img src={`https://robohash.org/${props.human.id}}?set=set5&size=200x200`} alt="human" />
        <h2>{props.human.name}</h2>
        <p>{props.human.email}</p>
    </div>
)