import logo from "./logo.svg";
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
        <h3 className="menuItem">Home</h3>
        <h3 className="menuItem">About Me</h3>
        <h3 className="menuItem">Resume</h3>
        <h3 className="menuItem">Projects</h3>
      </menu>
        <img className="menuItem" id="myLogo" src={MyLogo} alt="Logo" />
    </div>
  );
}

export default App;
