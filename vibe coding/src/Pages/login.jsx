import React, { useState } from "react";
import useStore from "../zustand/store";
import { useNavigate } from "react-router-dom";

function Login() {
  const {setUser ,user}=useStore()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    let obj = {
      email: email,
      password: password
    }
    console.log(obj);
    if(email=="admin@gmail.com" && password=="admin123") {
        alert("Login successful!");
        localStorage.setItem("user", JSON.stringify(obj))
        setUser(obj)
    } else {
        alert("Invalid credentials");
        setUser(null)
  
    }
    

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <span className="text-blue-600 cursor-pointer">
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;