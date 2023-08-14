import {Routes, Route} from "react-router-dom";
//import './App.css';
// import Header from './components/header/header';
// import Footer from './components/footer/footer';
// import Home from './components/home/home';

// const Home : React.FC = () => <>Home!</>;
// const Confession : React.FC = () => <>Confess To Us!</>;    
// const Misdemeanour : React.FC = () => <>Misdemeanours!</>;

import Home from "../home/home";
import Misdemeanour from "../misdemeanour/misdemeanour";
import Confession from "../confession/confession";

const NotFound : React.FC = () => 
    <div>
      <h1>Page not found</h1>
      <p>The page you are looking for could not be found. Please check the URL and try again.</p>
    </div>;

export const FakelandiaRouter : React.FC= () => (
    <Routes>
        <Route path='/' element={<Home /> } />    
        <Route path='/Misdemeanour' element = {<Misdemeanour />} />  
        <Route path='/Confession' element= {<Confession />} />
        <Route path="*" element={<NotFound />}/> 
    </Routes>
);

