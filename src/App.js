import "./style.css";
import Logo from "./assats/logo-social.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="main-wrapper">
        <Header/>
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
          <div className="info-content">
              <h1>HelloWorld</h1>
          </div>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
