import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

const NavbarComponent = () => {
    let navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" onClick={()=>{
                        navigate('/')
                    }}>Home</Nav.Link>

                    <Nav.Link href="#home" onClick={()=>{
                        navigate('/lists')
                    }}>lists</Nav.Link>

                    <Nav.Link href="#home" onClick={()=>{
                        navigate('/detail')
                    }}>detail</Nav.Link>


                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
