import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./home.css";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Measurement } from "../../@types/types";
import { Link } from "react-router-dom";


interface Props {
  measurement: Measurement;
  handleDelete: (id: string) => Promise<void>;
}

const MeasurementCard = ({ measurement, handleDelete }: Props) => {

    
  return (
    <div className="measurements-card">
      <h4>Name: {measurement.title}</h4>
      <div className="measurements-container">
        <div className="measurements">
          <h5>
            Cone Height: <span>{measurement.coneHeight}</span>{" "}
          </h5>
          <h5>
            Cylinder Height: <span>{measurement.cylinderHeight}</span>
          </h5>
          <h5>
            Radius: <span>{measurement.radius}</span>
          </h5>
        </div>

        <div className="measurements-calculation">
          <h4>
            Surface Area: <span>{measurement.surfaceArea.toFixed(2)}</span>
          </h4>
          <h4>
            Volume: <span>{measurement.volume.toFixed(2)}</span>
          </h4>
        </div>
      </div>
      <div className="measurements-date">
        <h5>
          Date created:{" "}
          <span> {new Date(measurement.createdAt).toLocaleDateString()}</span>
        </h5>
        <h5>
          Date mofified:
          <span> {new Date(measurement.updatedAt).toLocaleDateString()}</span>
        </h5>
      </div>
      <div className="measurements-action">
        <Link to={`/Measurements/${measurement._id}`}>
          <Tippy
            content={
              <span className="tool-tip">
                Update
              </span>
            }
          >
            <span>
              <AiOutlineEdit className="measurements-icon edit" />
            </span>
          </Tippy>
        </Link>
        <Tippy
          content={
            <span className="tool-tip-delete">Delete</span>
          }
        >
          <span onClick={()=>handleDelete(measurement._id)}>
            <AiOutlineDelete className="measurements-icon delete" />
          </span>
        </Tippy>
      </div>
    </div>
  );
};

export default MeasurementCard;
