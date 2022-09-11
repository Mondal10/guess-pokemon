import { Link } from "react-router-dom";
import { RouterElement } from "./routes";
import "./App.css";

function App() {
  return (
    <div className="p-2 sm:p4">
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="game">Game</Link>
          <Link to="setting">Setting</Link>
        </nav>
      </div>
      <RouterElement />
    </div>
  );
}

export default App;
