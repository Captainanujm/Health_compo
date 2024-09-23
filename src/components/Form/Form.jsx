import react from "react";
import { useState } from "react";
import './Form.css';
function Form(props){
    const [service,setService]=useState("");
    const [serviceDes,setServiceDes]=useState("");
    const [price,setPrice]=useState("");
    function handleSubmit(event){
        event.preventDefault();
        const newService={
            service:service,
            description:serviceDes,
            price:price,
        }
        props.performAdd(newService);
        setService("");
        setServiceDes("");
        setPrice("");
    }
    return (<form onSubmit={handleSubmit}className="form">
            <div className="service-name">
                <h2>Service Name</h2>
                <input onChange={(event)=>{
                    setService(event.target.value);
                }}type="text" placeholder="enter the service name..."></input>
            </div>
            <div className="service-des">
                <h2>Service Description</h2>
                <input onChange={(event)=>{
                    setServiceDes(event.target.value);
                }}type="text" placeholder="enter the service description..."></input>
            </div>
            <div className="service-name">
                <h2>Service Price</h2>
                <input onChange={(event)=>{
                    setPrice(event.target.value);
                }} type="text" placeholder="enter the service price..."></input>
            </div>
            <div className="submit">
               <button className="submit-button"> Submit</button> 
            </div>
    </form>)
}
export default Form;