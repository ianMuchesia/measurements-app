import { Link } from "react-router-dom";
import "./login.css";

const SignUp = () => {
  return (
    <section className="section-login">
      <div className="login-center">
        <form className="signup">
          <h1 className="login-title">Sign Up</h1>
          <input type="text" name="txt" placeholder="User name"
          className="signup-input" />
          <input type="email" name="email" placeholder="Email" className="signup-input"/>
          <input type="password" name="pswd" placeholder="Password" className="signup-input"/>
          <button>Sign up</button>
          <h4>
          <Link to="/Login">
            Already have an account?Click here to Login</Link>
          </h4>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
