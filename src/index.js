import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css";
import Navbar from "./components/nabvar/Navbar";
import Cards from "./components/nabvar/cards/cards";


const root = ReactDOM.createRoot(document.getElementById("root"));

function A() {
  return (
    <>
    
    </>
  );
}
root.render(
  <>
  <Navbar/>
  <Cards/>
  </>

);
