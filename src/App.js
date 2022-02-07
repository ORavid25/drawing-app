import "./style.css";
import Logo from "./assats/logo.jpg";

function App() {
  return (
      <div className="main-wrapper">
        <div className="header-container"></div>
        <div className="main-container">
          <div className="logo-container">
              <img src={Logo} width="800"/>
          </div>
          <div className="info-container">
          <h1 className="">Welcome to our social drawing App</h1>
          <h2>Collaborative drawing board with rooms and chat abilities.</h2>
          <p>invite friends and family and start the fun!</p>

          <button type="button" className="startNowBtn">Start Now!</button>

          </div>

        </div>
        <div className="container">

        </div>
      </div>
  );
}

export default App;
