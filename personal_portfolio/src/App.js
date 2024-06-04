import logo from './logo.svg'
import MyLogo from './MyLogo.png'
import MPROSolo from './MPROSolo.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <menu>
          <img className='MyLogo' src={MyLogo} alt="Logo" />
          <h3 className='menuItem'>Home</h3>
          <h3 className='menuItem'>About Me</h3>
          <h3 className='menuItem'>Resume</h3>
          <h3 className='menuItem'>Projects</h3>
        <img className='me' src={MPROSolo} alt="Roman" />
        </menu>
      </header>
    </div>
  );
}

export default App;
