import { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'

import { Measurement } from '../../@types/types'
import { baseURL } from '../../service'
import MeasurementCard from './MeasurementCard'
const Home = () => {

  const [ measurements , setMeasurements] = useState<Measurement[]>([])


  useEffect(()=>{
    let isMounted = true
    const fetchMeasurements = async()=>{
      try {
        const {data} = await axios.get(`${baseURL}measurements`,{withCredentials: true})
        if(isMounted){
          setMeasurements(data.measurements)
        }

     
      } catch (error) {
        console.log(error)
      }
    } 
    fetchMeasurements()
    return ()=>{isMounted = false}

  }, [])
  return (
    <section>
      <div className="home-center">
      <div className="home-title">
      <h1>
        Welcome Name
      </h1>
      <h3>These are your measurements</h3>
      </div>
      <div className="home-container">
     {measurements.length>0 && measurements.map(item=>{
      return(
        <MeasurementCard measurement={item} key={item._id} />
      )
     })}
      </div>
      </div>
     
   
    </section>
  )
}

export default Home