import { Container, Navbar, Nav } from "react-bootstrap";



const Menu = () => {

    return (

        <>
        
            <Navbar className="navbar">
            
                <Container>
            
                    <Navbar.Brand>
                        <a href="#home">
                            <img src="logo.svg" alt="Lindsay" />
                        </a>
                    </Navbar.Brand>

                    <img src="morison.svg" alt="Morison" />

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link href="#servicios">      servicios       </Nav.Link>
                            <Nav.Link href="#nosotros">       nosotros        </Nav.Link>
                            <Nav.Link href="#funcionamiento"> ¿cómo funciona? </Nav.Link>
                            <Nav.Link href="#testimonios">    testimonios     </Nav.Link>
                            <a className="btn" href="#contactanos">contáctanos</a>
                        </Nav>
                    </Navbar.Collapse>
                
                </Container>
            
                <a className="btn mt-3 d-block d-md-none" href="#contactanos">contáctanos</a>

            </Navbar>

        </>

    )

}



export default Menu;
