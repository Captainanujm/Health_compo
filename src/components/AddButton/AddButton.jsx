import react from "react";
import  img from './download.png';
import './AddButton.css';
function AddButton(props){
    return(
        <div className="add-img">
            <img  onClick={props.onClick} className="img" src={img} alt="button-img"/>
        </div>
    )
}
export default AddButton;