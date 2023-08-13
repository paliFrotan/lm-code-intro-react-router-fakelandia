import './App.css';
// import Header from "./components/header/header";
// import Footer from "./components/footer/footer";
// import Home from "./components/home/home";
import { BrowserRouter } from "react-router-dom";
import { FakelandiaRouter } from './components/routes/router';



function App() {
  
  return (
    <>
      <BrowserRouter>
         

        <FakelandiaRouter />
          
      </BrowserRouter>  
    </>
  )
}

export default App
