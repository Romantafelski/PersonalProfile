
import Background from "./Background.jpg";
import MyLogo from "./MyLogo.png";
import MPROSolo from "./MPROSolo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="background" src={Background} />
      <div className="circle"></div>
      <img className="me" src={MPROSolo} alt="Roman" />
      <menu>
        <button className="menuItem" id="home">Home</button>
        <button className="menuItem">About Me</button>
        <button className="menuItem">Resume</button>
        <button className="menuItem">Projects</button>
      </menu>
      <img className="menuItem" id="myLogo" src={MyLogo} alt="Logo" />
    </div>
  );
}

export default App;
