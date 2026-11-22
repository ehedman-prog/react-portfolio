import "../styles/Project.css";
function PopUp(props) {

    return (
        <div className="pop-up">
            <div className="pop-up__content">
                <h1 className="pop-up__projectTitle">{props.title}</h1>
                <a className="pop-up__projectLink" href={props.link}></a>
                <p className="pop-up__projectDetails">
                    {props.details}
                </p>
                <p className="pop-up__projectText">
                    {props.writeup}
                </p>
                <button className="pop-up__close-button" onClick={props.onClick}>
                    Close
                </button>
            </div>
        </div>

    )
}

export default PopUp;