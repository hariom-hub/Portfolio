import { Header } from "./Components/Header";
import {Footer} from "./Components/Footer";
import { AppRoutes } from "./routes/AppRoutes";
import { Link } from "react-router";

function App() {
  return (
    <div className="div">
      <h1>homepage</h1>
      <Link to = "/about">About</Link>
    </div>

  );
}

export default App;