import {Routes, Route} from "react-router-dom";

const Home : React.FC = () => <>Home!</>;
const Confession : React.FC = () => <>Confess To Us!</>;    
const Misdemeanour : React.FC = () => <>Misdemeanours!</>;
const NotFound : React.FC = () => 
    <div>
      <h1>Page not found</h1>
      <p>The page you are looking for could not be found. Please check the URL and try again.</p>
    </div>;

export const FakelandiaRouter : React.FC= () => (
    <Routes>;
        <Route path='/' element={<Home /> } />    
        <Route path='/Misdemeanour' element = {<Misdemeanour />} />  
        <Route path='/Confession' element= {<Confession />} />
        <Route path="*" element={<NotFound />}/> 
    </Routes>
);
