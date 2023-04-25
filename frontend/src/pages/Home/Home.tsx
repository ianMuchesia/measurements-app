import { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

import { Measurement } from "../../@types/types";
import { baseURL } from "../../service";
import MeasurementCard from "./MeasurementCard";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
const Home = () => {
  const [measurements, setMeasurements] = useState<Measurement[]>([]);

  const [loading , setLoading ] = useState(false)


  const handleDelete = async(id:string)=>{
    try {
        const {data} = await axios.delete(`${baseURL}measurements/${id}`,{withCredentials: true})
        if(data.success){
            toast.success("Measurement deleted")
            setMeasurements(prevMeasurements => prevMeasurements.filter(item=>item._id !== id))
        }
    } catch (error:any) {
      if(error.response.data){
        toast.error(error.response.data.msg)
      }else{
      toast.error("Request was not successful, please try again later")
      }
        
    }
}
  useEffect(() => {
    let isMounted = true;
    const fetchMeasurements = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(`${baseURL}measurements`, {
          withCredentials: true,
        });
        if (isMounted) {
          setMeasurements(data.measurements);
          setLoading(false)
          if(measurements.length === 0){
            return (<div className="zero"><h1>There are zero measurements as of now </h1>
            </div>)
          }
        }
      } catch (error) {
        console.log(error);
       setLoading(false)
        return(
          <h1>Something Wrong happened ,please try again later</h1>
        )
      }
    };
    fetchMeasurements();
    return () => {
      isMounted = false;
    };
  }, []);

console.log(loading)
 

  return (
    <section>
      <ToastContainer/>
      <div className="home-center">
        <div className="home-title">
          <h1>Welcome Name</h1>
          <h3>These are your measurements</h3>
        </div>
        <div className="home-container">
         {loading && <Loader/>}
          {measurements.length > 0 &&
            measurements.map((item) => {
              return <MeasurementCard measurement={item} handleDelete={handleDelete} key={item._id} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Home;
