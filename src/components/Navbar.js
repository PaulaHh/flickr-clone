import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function NavBar () {
    return (
        <Navbar bg="light" expand="lg">
          <Container fluid>
            {/* logo */}
            <Navbar.Brand href="#">
                <div id="logo-container">
                    <img id="logo-image" width="20px" src="/logo.png" alt="Flickr logo" />
                    <span className='logo'>flickr</span> 
                </div>           
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll> </Nav>
              <Form className="d-flex form">
                {/* input field */}
                {/* <div className='input-box'>
                  <span className="fa-solid fa-magnifying-glass icon"></span>
                  <Form.Control type="search" placeholder="Photos, people, or groups" className='input-search' aria-label="Search" />
                </div> */}
                <InputGroup size="md" className="mb-3" style={{marginBlockStart: '15px', marginLeft: '100px', marginRight: '100px'}}>
                  <InputGroup.Text className='border-right-0 border-radius icon height' id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                  <Form.Control className='border-left-0 border-radius height' placeholder="Photos, people, or groups" aria-label="Username" aria-describedby="basic-addon1" />
                </InputGroup>
                {/* buttons */}
                <div className='buttons'>
                  <Button className='login-button'>Log In</Button>
                  <Button className='signup-button'>Sign Up</Button>
                </div>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}