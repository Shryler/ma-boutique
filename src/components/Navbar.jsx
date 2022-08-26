import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TypeWriter from './animations/TypeWriter';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { BsBasket } from 'react-icons/bs';
import ToolTips from './animations/ToolTips';

function NavbarComponent() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' className="fixed-top navBar-container">
      <Container>
        <NavLink to="/">
          <div className='d-flex flex-column title-container-brand'>
            <span className='title-brand'>maBoutique</span>
            <span><TypeWriter /></span>
          </div>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0" navbarScroll>
            <NavDropdown title="Périphériques" id="navbarScrollingDropdown">
              <NavLink to="/ecran-PC" className="dropdown-item">Ecran PC</NavLink>
              <NavLink to="/clavier-souris-tapis" className="dropdown-item">Clavier/Souris/Tapis</NavLink>
              <NavLink to="/casque-micro" className="dropdown-item">Casque & micro</NavLink>
              <NavLink to="/webcam" className="dropdown-item">Webcam</NavLink>
            </NavDropdown>
            <NavLink to="/ordinateurs-portables" className="nav-link">Ordinateurs Portables</NavLink>
            <NavLink to="/ordinateurs-fixe" className="nav-link">Ordinateurs PC Fixe</NavLink>
            <NavDropdown title="Tablettes" id="navbarScrollingDropdown">
              <NavLink to="/tablette" className="dropdown-item">Tablette</NavLink>
              <NavLink to="/ipad" className="dropdown-item">Ipad</NavLink>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Recherche" aria-label="Search" />
          </Form>
          <div className='d-flex ms-2 navbar-nav d-flex text-light'>
            <ToolTips button={<FaRegUser size="25" />} text={"Se connecter / S'enregistrer"}></ToolTips>
            <ToolTips button={<BsBasket size="25" />} text={"Panier"}></ToolTips>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;