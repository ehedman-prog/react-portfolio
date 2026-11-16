
import animationAssignment from "./assets/animationAssignment.png";
import Project from "./components/Project.jsx"
function App() {
  return [
    <>
    <Project 
    title = "Animation" 
    screenshot = {animationAssignment} 
    details = "tech used"
    writeup = "What does project do? What did I learn? My role role (if it was collaborative)? Challenges I solved?">
    </Project> 
    <Project />
    <Project />
    
    </>
  ]
}

export default App;
