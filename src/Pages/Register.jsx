import React from "react";
import Add from "../Pages/Images/add profile pic icon.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage} from "../firebase";
import { useState } from "react";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      


const storageRef = ref(storage, fullName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
  (error) => {
    setErr(true);
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
      await updateProfile(res.user,{
        fullName,
        photoURL: downloadURL,
      })
    });
  }
);
    }catch (err){
      setErr(true);
    }
  };
  return (
    <div className="formPage">
      <div className="formContainer">
        <div className="logo text-success">Timex Chat</div>
        <div className="pageTitle text-success">Register</div>
        <form onSubmit={handleSubmit}>
          <input className="form-control" type="text" placeholder="Fullname" />
          <input className="form-control" type="email" placeholder="Email" />
          <input className="form-control" type="password" placeholder="Password" />
          <input style={{display:"none"}} className="form-control" type="file" id="file"/>
          <label htmlFor="file">
            <img src={Add} alt="Add profile image" />
            <span>Add profile picture</span>
          </label>
          <button className="btn btn-success">Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p className="text-success">Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
