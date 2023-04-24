import { Link } from "react-router-dom"
import "./login.css"

const Login = () => {
  return (
    <section className="section-login">
      <div className="login-center">
        <form className="signup">
          <h1 className="login-title">Log In</h1>
        
          <input type="email" name="email" placeholder="Email" 
          className="login-input"/>
          
          <div className="passwordContainer">
          <input type="password" name="password" placeholder="Password" className="login-input"/>
          <h5>
            <Link to="/SignUp">Forgot Password?</Link>
          </h5>
          </div>
       
          <button>Log in</button>
          <h4>
          <Link to="/SignUp">
            Don't have an account?Click here to Sign Up</Link>
          </h4>
        </form>
      </div>
    </section>
  )
}

export default Login