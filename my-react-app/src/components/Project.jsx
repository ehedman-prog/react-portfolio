import "../styles/Project.css";
import PopUp from "./PopUp.jsx";
import { useState } from "react";

function Project(props) {
  const [isOpen, setIsOpen] = useState(false);
  const closePopUp = () => {
    setIsOpen(false);
  };

  return (
    <div className="project">
      <h2 className="projectTitle">{props.title}</h2>
      <img src={props.screenshot} alt="screenshot" className="img" />
      <br />
      <button onClick={() => setIsOpen(true)}>Project Details</button>
      {isOpen && (
        <PopUp 
        title = {props.title} 
        link = {props.link} 
        details = {props.details} 
        writeup = {props.writeup} 
        onClose = {() => setIsOpen(false)}
        onClick={closePopUp}
        />
      )}
    </div>
  )
}

export default Project;