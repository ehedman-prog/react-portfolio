import animationAssignment from "../assets/animationAssignment.png";
import Project from "../components/Project.jsx"
function Portfolio() {
    return (
        <div>
            <h2>Portfolio</h2>
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
        </div>
    )
}

export default Portfolio;