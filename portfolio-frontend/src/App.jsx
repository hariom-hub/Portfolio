import { Header } from "./Components/Header";
import {Footer} from "./Components/Footer";
import { AppRoutes } from "./routes/AppRoutes";
import { Link } from "react-router";
import { MainSection } from "./Components/MainSection";

function App() {
  return (
    <div className>
      <Header />
      <MainSection/>
      <Footer/>
    </div>

  );
}

export default App;