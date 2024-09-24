import react from "react";
import { useState ,useEffect} from "react";
import './App.css'
import HealthCompo from "./components/HealthCompo/Healthcompo";
import AddButton from "./components/AddButton/AddButton";
import Form from "./components/Form/Form";
function App(){
  const [clicked,setClicked]=useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const[servicelist,setserviceList]=useState([
    {
      service:"Endoscopy",
      price:"12$",
       description:"Examines the digestive tract using a flexible tube with a light and camera."
  },
  {
      service:"Ultrasound",
       price:"15$",
        description:"Uses high-frequency sound waves to create images of the inside of the body.."
  },
  {
      service:"MRI (Magnetic Resonance Imaging)", 
      price:"17$" ,
      description:"Uses magnets and radio waves to produce detailed images of organs and tissues."
  },
  {
      service:"ECG (Electrocardiogram)", 
      price:"14$" ,
      description:"Measures the electrical activity of the heart."
  },
  {
      service:"Mammography" ,
      price:"14$", 
      description:"X-ray imaging of the breasts."
  },
  {
      service:"Colonoscopy" ,
      price:"14$",
       description:"Examines the colon and rectum using a long, flexible tube."
  }
  ]);
  function handleClick(){
    setClicked(true);
    setIsEditing(false);
  }
  function editCardInfo(key) {
    setClicked(true);
    setIsEditing(true);
    setEditIndex(key);
  }

  function deleteCardInfo(key){
    const updatedList = servicelist.filter((serviceAPI, index) => index !== key);
    setserviceList(updatedList);
  }
  function perAddFunction(newserviceAPI){
    if (isEditing) {
      const updatedList = [...servicelist];
      updatedList[editIndex] = newserviceAPI;
      setserviceList(updatedList);
      setEditIndex(null);
    } else{
    setserviceList((prevServices)=>{
      return [...prevServices,newserviceAPI];
    })
    setClicked(false);
  }
  }
  function handleEdit(index) {
    setClicked(true); 
    setEditIndex(index);
  }
  return(<div className="App">
    {clicked==false?
   <div className="App-item">
    {servicelist.map((serviceAPI,index)=>{
      return(
        <HealthCompo key={index} onEdit={() => editCardInfo(index)}  onClick={()=>{deleteCardInfo(index)}} service={serviceAPI.service} description={serviceAPI.description} price={serviceAPI.price} />
      )
    })}
   </div>
    :null}
      
      <div className="Add-button">
      <AddButton onClick={handleClick}/>
      </div>
      {clicked==true?<Form performAdd={perAddFunction} isEdit={isEditing} serviceData={isEditing ? servicelist[editIndex] : null}/>:null}
    
  </div>)
}
export default App;
