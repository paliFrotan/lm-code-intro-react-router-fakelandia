import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
 


export const MainLayout: React.FC = () => (
    <>
        <Header />
        <main className= "p-6" style={{flex: "1"}}>
            <Outlet />
        </main>
        <Footer />
    </>
);
