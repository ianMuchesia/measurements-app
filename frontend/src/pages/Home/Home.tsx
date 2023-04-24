import './home.css'
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
const Home = () => {
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
        <div className="measurements-card">
          <h4>Name: Blah Blah Blah</h4>
          <div className="measurements-container">
          <div className="measurements">
          <h5>Width: <span>70</span> </h5>
          <h5>Width: <span>70</span></h5>
          <h5>Width: <span>70</span></h5>
          </div>
        
          <div className="measurements-calculation">
          <h4>Surface Area: <span>70</span></h4>
          <h4>Volume: <span>70</span></h4>
          </div>
          </div>
          <div className="measurements-date">
          <h5>Date created: <span> 00/008/00</span></h5>
          <h5>Date mofified:<span> 00/008/00</span></h5>
          </div>
        <div className="measurements-action">
        <AiOutlineEdit className="measurements-icon edit"/>
          <AiOutlineDelete className="measurements-icon delete"/>
        
        </div>
          
        </div>
      </div>
      </div>
     
   
    </section>
  )
}

export default Home