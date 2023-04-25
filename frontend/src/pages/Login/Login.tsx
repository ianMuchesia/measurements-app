import {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from '../../service';
import { useAppDispatch } from '../../hooks';
import { setLogin } from '../../store/authSlice';

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit =async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const { email , password} = loginForm
    if(!email || !password){
      toast.warn("Please provide all values")
      return;
    }
    try {
      toast.loading("loading...")
      const { data } = await axios.post(
        `${baseURL}auth/login`,
        {
          email: loginForm.email,
          password: loginForm.password,
        },
        { withCredentials: true }
      );
      console.log(data)
      if(data.success){
        toast.success("Logged in")
        dispatch(setLogin(data.user))
        navigate('/Measurements')
      }else{

      }
    } catch (error: any) {
      console.log(error)
      if(error.response.data){
       toast.error(error.response.data.msg)
        
      }else{
        toast.error("Something wrong happened, request was not successfully")

      }
    }
  }
  return (
    <section className="section-login">
      <ToastContainer />
      <div className="login-center">
        <form className="signup" onSubmit={handleSubmit}>
          <h1 className="login-title">Log In</h1>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="login-input"
            value={loginForm.email}
            onChange={handleChange}
          />

          <div className="passwordContainer">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input"
              value={loginForm.password}
            onChange={handleChange}
            />
            <h5>
              <Link to="/SignUp">Forgot Password?</Link>
            </h5>
          </div>

          <button>Log in</button>
          <h4>
            <Link to="/SignUp">
              Don't have an account?Click here to Sign Up
            </Link>
          </h4>
        </form>
      </div>
    </section>
  );
};

export default Login;
