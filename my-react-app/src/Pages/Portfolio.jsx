import { useState } from "react";
import animationAssignment from "../assets/animationAssignment.png";
import Project from "../components/Project.jsx"

function UseState() {
    const [showProjects, setShowProjects] = useState(false);
    const toggleShowProjects = () => {
        if (showProjects) {
            setShowProjects(false);
        } else {
            setShowProjects(true);
        }
    }
    return (
        <div>
            <h2>Portfolio</h2>
            <button onClick={toggleShowProjects}>Preview Projects</button>
            <br />
            {showProjects ? (
                <>
                    <Project
                        title="Animation"
                        screenshot={animationAssignment}
                        details="tech used"
                        writeup="What does project do? What did I learn? My role role (if it was collaborative)? Challenges I solved?">
                    </Project>
                    <Project />
                    <Project />
                </>
            ) : null
            }

        </div>

    )
}

export default UseState;
