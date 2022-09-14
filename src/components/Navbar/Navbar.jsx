import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function Navbars() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link to='/'>
                    <Navbar.Brand>Mern Stack</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className='nav-link' to="/home">Home</NavLink>
                        <NavLink className='nav-link' to="/aboutme">About</NavLink>
                        <NavLink className='nav-link' to="/contact">Contact</NavLink>
                        <NavLink className='nav-link' to="/login">Login</NavLink>
                        <NavLink className='nav-link' to="/signup">Register</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;