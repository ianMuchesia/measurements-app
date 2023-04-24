import "./addnew.css";
const AddNew = () => {
  return (
    <section>
      <div className="addnew-title">
        <h2>Add New Measurements</h2>
      </div>
      <form>
       
      <h3>Cone</h3>
        <img src="" alt="" />
        <div className="cone-radius">
        
        <label htmlFor="cone-radius">Radius</label>
        <input type="text" name="coneRadius" id="cone-radius" />
        </div>
        <div className="cone-height">
        <label htmlFor="coneHeight">Height</label>
        <input type="text" name="coneHeight" id="coneHeight" />
        </div>


        <div className="cylinder">
            <h3>Cylinder</h3>
        <img src="" alt="" />
        <div className="cylinder-radius">
        
        <label htmlFor="cylinder-radius">Radius</label>
        <input type="text" name="cylinderRadius" id="cylinder-radius" />
        </div>
        <div className="cylinder-height">
        <label htmlFor="cylinderHeight">Height</label>
        <input type="text" name="cylinderHeight" id="cylinderHeight" />
        </div>
        </div>
      </form>
    </section>
  );
};

export default AddNew;
