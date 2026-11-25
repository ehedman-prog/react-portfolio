import { useState } from "react";
import animationAssignment from "../assets/animationAssignment.png";
import Project from "../components/Project.jsx";
import PopUp from "../components/PopUp.jsx";

function UseState() {
    const [showProjects, setShowProjects] = useState(false);
    const [search, setSearch] = useState("");
    const toggleShowProjects = () => {
        if (showProjects) {
            setShowProjects(false);
        } else {
            setShowProjects(true);
        }
    }

    const projects = [
        {
            title: "Animation",
            screenshot: animationAssignment,
            details: "HTML, CSS",
            writeup: "A Halloween card with CSS animations.",
            link: "insert link"
        },

        {
            title: "Title 1",
            screenshot: " insert image",
            details: " insert details",
            writeup: "insert writeup",
            link: "insert link"
        },

        {
            title: "Title 2",
            screenshot: " insert image",
            details: " insert details",
            writeup: "insert writeup",
            link: "insert link"
        },
    ];

    return (
        <div className="portfolio__content">
            <h2>Portfolio</h2>
            <input
                className="portfolio__search"
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <br />
            <button onClick={toggleShowProjects}>
                {showProjects ? "Hide Projects" : "Preview Projects"}
            </button>
            <br />
            {showProjects ? (
                <>
                    {projects.filter((project) => (project.title.toLocaleLowerCase().includes(search.toLowerCase())))
                    
                    .map((project) => (
                        <Project
                            key={project.title}
                            title={project.title}
                            screenshot={project.screenshot}
                            details={project.details}
                            writeup={project.writeup}
                            link={project.link}
                        />
                    ))}
                </>
            ) : null
            }

        </div>

    )
}

export default UseState;
