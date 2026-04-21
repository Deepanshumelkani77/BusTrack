
import axios from "axios";
import {useState} from "react";

import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {


    // Restore user from localStorage (shared across frontend and shop on same domain)
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");

  const initialUser = storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
  const initialToken = storedToken || null;

  const [user, setUser] = useState(initialUser);
  const [token, setToken] = useState(initialToken);



  // Signup
  const signup = async (name, email, password) => {
    
    try {
      const res = await axios.post(`http://localhost:5000/user/signup`, {
        name,  // Map fullName to username for backend
        email,
        password,
        
      });
       alert("Signup successful! Please login.");
    } catch (error) {
       alert(error.response?.data?.message || "Signup failed");
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const response = await axios.post(`http://localhost:5000/user/login`, {
        email,
        password,
      });
      
      // Save to localStorage (automatically syncs to shop app)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
      setUser(response.data.user);
      setToken(response.data.token);
     alert(`Welcome back, ${response.data.user.name}`);
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };


// Signup
  const driverSignup = async (name, email, password, licenseNumber) => {
    
    try {
      const res = await axios.post(`http://localhost:5000/driver/signup`, {
        name,  // Map fullName to username for backend
        email,
        password,
        
      });
       alert("Signup successful! Please login.");
    } catch (error) {
       alert(error.response?.data?.message || "Signup failed");
    }
  };


  // Login
  const driverLogin = async (email, password) => {
    try {
      const response = await axios.post(`http://localhost:5000/driver/login`, {
        email,
        password,
      });
      
      // Save to localStorage (automatically syncs to shop app)
      localStorage.setItem("driverToken", response.data.driverToken);
      localStorage.setItem("driver", JSON.stringify(response.data.driver));
      
      setUser(response.data.driver);
      setToken(response.data.driverToken);
     alert(`Welcome back, ${response.data.driver.name}`);
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };



      const value = {
   
   user,
   setUser,
   signup,
   login,
   token,
   setToken,
   driverSignup,
    driverLogin
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;