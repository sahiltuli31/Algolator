import React from 'react'
import image from "./home_gif.gif";
import {FaReact,FaLinkedin,FaGithub,FaInstagram} from "react-icons/fa";
import {GiBrain} from "react-icons/gi";

function Home() {
    return (
        <div className = "content">
           <img className= "home-img" src={image} alt="loading..." /> 
            <h1 className = "introo" > <span className = "HomeIcon" ><FaReact/></span> This Website helps you Understand  and Calculate Answers <br />
              <span className="space"></span>for 
            different Standard  Algorithms for different Contraints. <br />
             <span className = "HomeIcon" ><FaReact/></span> Made with ReactJS, JavaScript, HTML and  CSS.</h1>
             <p>Made with <GiBrain/> | Sahil Tuli  <span className = "contact_icons"> <a href="https://www.linkedin.com/in/sahil-tuli-96222a195/"> 
             <FaLinkedin size={25} /> </a> <a href="https://github.com/sahiltuli31/sahiltuli31.github.io"> 
             <FaGithub size={25}/> </a> <a href="https://www.instagram.com/sahiltuli_31/"> 
             <FaInstagram size={25}/> </a> </span> </p>
        </div>
    )
}

export default Home
