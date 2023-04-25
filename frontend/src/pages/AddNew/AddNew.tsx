import React, { useState } from "react";
import axios from 'axios'
import { cloneImage, cylinderImage } from "../../assets";
import "./addnew.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../service";

interface formState {
  coneRadius?: number;
  coneHeight?: number;
  title:string;
  cylinderHeight?: number;
  numberOfCylinders?: number;
}

const AddNew = () => {
  const navigate = useNavigate()

  const [formState, setFormState] = useState<formState>({
    coneRadius: undefined,
    coneHeight: undefined,
    title:"",
    cylinderHeight: undefined,
    numberOfCylinders: 1,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const [formResults, setFormResults] = useState({
    surfaceArea: 0,
    volume: 0,
  });

  const calculationOfVolume = (
    radius?: number,
    height?: number,
    numberOfCylinders?: number
  ) => {
    if (radius && height && numberOfCylinders) {
      const pie = 22 / 7;
      const volumeOfCylinder = pie * radius * radius * height * numberOfCylinders;
      const volumeOfCone = ((pie * 1) / 3) * radius * radius * height;

      setFormResults((prevResults) => ({
        ...prevResults,
        volume: volumeOfCone + volumeOfCylinder,
      }));
    }
  };

  const calculationOfArea = (
    radius?: number,
    height?: number,
    numberOfCylinders?: number
  ) => {
    if (radius && height && numberOfCylinders) {
      const pie = 22 / 7;
      const areaOfCylinder =
        pie * radius * 2 * numberOfCylinders * height + pie * radius * radius;
      const areaOfCone = pie * radius * height + pie * radius * radius;

      setFormResults((prevResults) => ({
        ...prevResults,
        surfaceArea: areaOfCylinder + areaOfCone,
      }));
    }
  };

  const handleCalculation = () => {
    calculationOfVolume(
      Number(formState.coneRadius),
      Number(formState.coneHeight),
      Number(formState.numberOfCylinders)
    );
    calculationOfArea(
      Number(formState.coneRadius),
      Number(formState.coneHeight),
      Number(formState.numberOfCylinders)
    );
  };


  
  const handleSubmit=async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
   
    
    const toastId = toast.loading("Please wait...")
    try {
     
      const {data} = await axios.post(`${baseURL}measurements/`,
      {
        radius: formState.coneRadius,
        coneHeight: formState.coneHeight,
        cylinderHeight: formState.cylinderHeight,
        numberOfCylinders: formState.numberOfCylinders,
        title:formState.title,
        volume:formResults.volume,
        surfaceArea: formResults.surfaceArea

      },
      {withCredentials: true})

      if(data.success){
        toast.update(toastId,{render:"Update Done!", type:"success", isLoading:false})
        navigate("/Measurements")
      }else{
        toast.update(toastId,{isLoading:false})
      }
      

        
    } catch (error:any) {
      console.log(error)
      toast.update(toastId,{isLoading:false})
      if(error.response.data){
        toast.error(error.response.data.msg)
      }else{
        toast.error("Request was not successful, please try again later")
      }
        
    }
  }

  return (
    <section className="addnew-section">
      <ToastContainer/>
      <div className="addnew-center">
        <h2 className="addnew-title">Add New Measurements</h2>

        <form className="addnew-form" onSubmit={handleSubmit}>
          <div className="cone">
            <h3>Cone</h3>
            <img src={cloneImage} alt="cone image" className="addnew-img" />
            <div className="radiusHeight">
              <label htmlFor="cone-radius">Radius</label>
              <input
                type="number"
                name="coneRadius"
                id="cone-radius"
                value={formState.coneRadius || ""}
                onChange={handleChange}
              />
            </div>
            <div className="radiusHeight">
              <label htmlFor="coneHeight">Height</label>
              <input
                type="number"
                name="coneHeight"
                id="coneHeight"
                value={formState.coneHeight || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="cylinder">
            <h3>Cylinder</h3>
            <img
              src={cylinderImage}
              alt="cylinder image"
              className="addnew-img"
            />
           
            <div className="radiusHeight">
              <label htmlFor="cylinderHeight">Height</label>
              <input
                type="number"
                name="cylinderHeight"
                id="cylinderHeight"
                value={formState.cylinderHeight || ""}
                onChange={handleChange}
              />
            </div>
            <div className="radiusHeight">
              <label htmlFor="numberOfCylinders">Number of Cylinders</label>
              <input
                type="number"
                name="numberOfCylinders"
                id="numberOfCylinders"
                value={formState.numberOfCylinders}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="addnew-results">
            <button type="button" className="calculate-btn" onClick={handleCalculation}>
              Calculate
            </button>
            <h3>
              Surface Area: <span>{formResults.surfaceArea.toFixed(2)}</span>
            </h3>
            <h3>
              Volume: <span>{formResults.volume.toFixed(2)}</span>
            </h3>
          </div>
          <div className="radiusHeight">
              <label htmlFor="cylinderHeight">Title/Name</label>
            <input
                type="text"
                name="title"
                id="title"
                value={formState.title || ""}
                onChange={handleChange}
              />
              </div>
          <button>SAVE</button>
        </form>
      </div>
    </section>
  );
};

export default AddNew;
