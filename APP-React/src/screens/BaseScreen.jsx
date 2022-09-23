import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import ReseauxSociaux from "../components/ReseauxSociaux";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import ReturnTop from "../components/animations/ReturnTop";
import ScrollToTop from "../components/animations/ScrollToTop";

const BaseScreen = () => {
    return (<>
         <ScrollToTop />  {/* Permet le scroll automatique */}
        <NavbarComponent />
        <ReseauxSociaux />
        <ReturnTop />
        <Container fluid>
            <main className="container fluid p-0">
                <Outlet />
            </main>
        </Container>
        <Footer />
    </>);
};
export default BaseScreen;