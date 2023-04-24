import React, { useState } from "react";
import { cloneImage, cylinderImage } from "../../assets";
import "./addnew.css";

interface formState {
  coneRadius: number;
  coneHeight: number;
  cylinderRadius: number;
  cylinderHeight: number;
  numberOfCylinders: number;
}

const AddNew = () => {


  const [formState, setFormState] = useState<formState>({
    coneRadius: 0,
    coneHeight: 0,
    cylinderRadius: 0,
    cylinderHeight: 0,
    numberOfCylinders: 1,
  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevFormState) => {
      const { name, value } = event.target;
      return {
        ...prevFormState,
        [name]: value,
      };
    });
  };


  const [formResults, setFormResults] = useState({
    surfaceArea: 0,
    volume: 0,
  });



  const calculationOfVolume = (
    radius: number,
    height: number,
    numberOfCylinders: number
  ) => {
    const pie = 22 / 7;
    const volumeOfCylinder = pie * radius * radius * height * numberOfCylinders;
    const volumeOfCone = ((pie * 1) / 3) * radius * radius * height;

    setFormResults((prevResults) => {
      return {
        ...prevResults,
        volume: volumeOfCone + volumeOfCylinder,
      };
    });
  };



  const calculationOfArea = (
    radius: number,
    height: number,
    numberOfCylinders: number
  ) => {
    const pie = 22 / 7;
    const areaOfCylinder =
      pie * radius * 2 * numberOfCylinders * height + pie * radius * radius;
    const areaOfCone = pie * radius * height + pie * radius * radius;

    setFormResults((prevResults) => {
      return {
        ...prevResults,
        surfaceArea: areaOfCylinder + areaOfCone,
      };
    });
  };




  const handleCalculation = () => {
    calculationOfVolume(
      formState.coneRadius,
      formState.coneHeight,
      formState.numberOfCylinders
    );
    calculationOfArea(
        formState.coneRadius,
        formState.coneHeight,
        formState.numberOfCylinders
      );
  };


  

  return (
    <section className="addnew-section">
      <div className="addnew-center">
        <h2 className="addnew-title">Add New Measurements</h2>

        <form className="addnew-form">
          <div className="cone">
            <h3>Cone</h3>
            <img src={cloneImage} alt="cone image" className="addnew-img" />
            <div className="radiusHeight">
              <label htmlFor="cone-radius">Radius</label>
              <input
                type="number"
                name="coneRadius"
                id="cone-radius"
                value={formState.coneRadius}
                onChange={handleChange}
              />
            </div>
            <div className="radiusHeight">
              <label htmlFor="coneHeight">Height</label>
              <input
                type="number"
                name="coneHeight"
                id="coneHeight"
                value={formState.coneHeight}
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
              <label htmlFor="cylinder-radius">Radius</label>
              <input
                type="number"
                name="cylinderRadius"
                id="cylinder-radius"
                value={formState.cylinderRadius}
                onChange={handleChange}
              />
            </div>
            <div className="radiusHeight">
              <label htmlFor="cylinderHeight">Height</label>
              <input
                type="number"
                name="cylinderHeight"
                id="cylinderHeight"
                value={formState.cylinderHeight}
                onChange={handleChange}
              />
            </div>
            <div className="radiusHeight">
              <label htmlFor="cylinderHeight">Number of Cylinders</label>
              <input
                type="number"
                name="cylinderHeight"
                id="cylinderHeight"
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
              Surface Area: <span>{formResults.surfaceArea}</span>
            </h3>
            <h3>
              Volume: <span>{formResults.volume}</span>
            </h3>
          </div>
          <button>SAVE</button>
        </form>
      </div>
    </section>
  );
};

export default AddNew;
