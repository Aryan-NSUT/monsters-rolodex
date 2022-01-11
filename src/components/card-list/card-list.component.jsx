import react from "react";
import './card-list.style.css';
import {Card} from '../card/card.component.jsx'
// export const Cardlist = props =>(
//     <div className="card-list">
//         {
//             props.people.map(human=>(
//               <Card key={human.id} human={human}/>
//             ))
//         }
//     </div>
// )

export const Cardlist = props => (
    <div className="card-list">
        {
            props.people.map(human=>(
                <Card key={human.id} human={human}/>
            ))
        }
    </div>
)