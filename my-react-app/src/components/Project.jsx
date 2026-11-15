import "./Project.css";
function Project(props){
  
     return (
    <div className="project">
      <h2 className="projectTitle">{props.title}</h2>
      <img src= {props.screenshot} alt="screenshot" className="img" />
      <a className="projectLink" href={props.link}></a>
      <p className="projectDetails">
        {props.details}
      </p>
      <p className="projectText">
        {props.writeup}
      </p>
    </div>
  )
}

export default Project;