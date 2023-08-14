import './App.css';
import { BrowserRouter } from "react-router-dom";
import { FakelandiaRouter } from './components/router/router';
  
function App() {
  
  return (
    <>
      <BrowserRouter>
        <FakelandiaRouter />
      </BrowserRouter>  
    </>
  );
}

export default App
