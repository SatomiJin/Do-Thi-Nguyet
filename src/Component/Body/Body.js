import About from "./About/About";
import Activities from "./Activevity/Activities";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Introduce from "./introduce/Introduce";

function Body() {
  return (
    <div className="body-container">
      <Introduce />
      <About />
      <Experience />
      <Activities />
      <Contact />
    </div>
  );
}

export default Body;
