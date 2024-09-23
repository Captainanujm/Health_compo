import react from "react";
import './Healthcompo.css';
function HealthCompo(props){
    return (<div className="health-card">
        <div className="content">
            <h1>{props.service}</h1>
            <h2>{props.price}</h2>
            <p>{props.description}</p>
        </div>
            <div className="edit-delete">
                <button className="edit">Edit</button>
                <button onClick={props.onClick} className="delete">Delete</button>
            </div>
        </div>)
}
export default HealthCompo;