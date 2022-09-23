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
import { useEffect, useState } from 'react';

function NavbarComponent() {

  const [category, setCategory] = useState([]);
<<<<<<< HEAD

  useEffect(() => {
    fetch("http://maboutique.api/category/" + 0, {
      method: "POST",
      body: JSON.stringify({ with: ['category'] })
    })
      .then(resp => resp.json())
      .then(json => setCategory(json));
=======
  useEffect(() => {
      fetch("http://maboutique.api/category")
          .then(resp => resp.json())
          .then(json => setCategory(json));
>>>>>>> 479cdf03e2e405e92c5af87b499cb06cfc039c70
  }, [])

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
          <Nav className="m-auto my-2 my-lg-0 text-wrap" navbarScroll>
            <NavDropdown title="Périphériques" id="navbarScrollingDropdown">
              {category.filter(cat => cat.Id_category <= 4).map(cat => {
<<<<<<< HEAD
                return (
                  <NavLink key={cat.Id_category} to={`/categorie/${cat.Id_category}`} className="dropdown-item">{cat.category}</NavLink>
                );
              })}
            </NavDropdown>
            {category.filter(cat => cat.Id_category >= 5 && cat.Id_category <= 6).map(cat => {
              return (
                <NavLink key={cat.Id_category} to={`/categorie/${cat.Id_category}`} className="nav-link">{cat.category}</NavLink>
              );
            })}
            <NavDropdown title="Tablettes" id="navbarScrollingDropdown">
              {category.filter(cat => cat.Id_category >= 7 && cat.Id_category <= 8).map(cat => {
                return (
                  <NavLink key={cat.Id_category} to={`/categorie/${cat.Id_category}`} className="dropdown-item">{cat.category}</NavLink>
                );
              })}
=======
                    return (
                            <NavLink to={`/category/${cat.category}`} className="dropdown-item">{cat.category}</NavLink>
                    );
                })}
            </NavDropdown>
            {category.filter(cat => cat.Id_category >= 5 && cat.Id_category <= 6).map(cat => {
                    return (
                            <NavLink to={`/category/${cat.category}`} className="nav-link">{cat.category}</NavLink>
                    );
                })}
            <NavDropdown title="Tablettes" id="navbarScrollingDropdown">
            {category.filter(cat => cat.Id_category >= 7 && cat.Id_category <= 8).map(cat => {
                    return (
                            <NavLink to={`/category/${cat.category}`} className="dropdown-item">{cat.category}</NavLink>
                    );
                })}
>>>>>>> 479cdf03e2e405e92c5af87b499cb06cfc039c70
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Recherche" aria-label="Search" />
          </Form>
          <div className='d-flex ms-2 navbar-nav d-flex text-light'>
            <NavLink to="/connexion">
              <ToolTips button={<FaRegUser size="25" />} text={"Se connecter / S'enregistrer"} classSelect={"me-2 navbar-btn"} offsetSelect={[0, 13]}></ToolTips>
            </NavLink>
            <ToolTips button={<BsBasket size="25" />} text={"Panier"} classSelect={"me-2 navbar-btn"} offsetSelect={[0, 13]}></ToolTips>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;