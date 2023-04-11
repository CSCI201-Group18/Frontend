import "./App.css";

import "bootstrap";
import LoginBox from "./components/LoginBox";
import LoginBanner from "./components/LoginBanner";

function App() {
  return (
    <>
      <LoginBanner />
      <div className="page-container">
        <LoginBox />
      </div>
    </>
    
  );
}

export default App;
