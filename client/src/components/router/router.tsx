import {Routes, Route} from "react-router-dom";
import MisdemeanoursProvider from "../context/misdemeanours_context";
import Home from "../home/home";
import Misdemeanour from "../misdemeanour/misdemeanours";
import Confession from "../confession/confession";
import {MainLayout} from "../layouts/main_layouts";

const NotFound : React.FC = () => 
    <div>
      <h1>Page not found</h1>
      <p>The page you are looking for could not be found. Please check the URL and try again.</p>
    </div>;

export const FakelandiaRouter : React.FC= () => (
    <MisdemeanoursProvider>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home /> } />    
                <Route path='Misdemeanour' element = {<Misdemeanour />} />  
                <Route path='Confession' element= {<Confession />} />
                <Route path="*" element={<NotFound />}/> 
            </Route>
        </Routes>
    </MisdemeanoursProvider>
);

