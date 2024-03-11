// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import GridExample from './components/Home';
import BasicExample from './components/Customerdetailes';
import Customerdata from './components/Customerdata';
import EditDetails from './components/Editdata';


function App() {
  return (
    <Router>
      <div className='main'>
      <div>
    <Navbar expand="lg" className="bg-success">
      <Container>
        
        <Navbar.Brand href="#home" className='text-white fs-2'>Fertilizers & Co.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" position-absolute top-50 start-50 translate-middle gap-4 fs-5">
            <Nav.Link href="/home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="/custd"className='text-light '>Add- Customer-Details</Nav.Link>
            <Nav.Link href="/custdata"className='text-light '>Customer-Data</Nav.Link>
            <Nav.Link href="/edit"className='text-light '></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    <Routes>
    <Route exact path="/home" element={<GridExample/>} />
    <Route exact path="/custd" element={<BasicExample/>}/>
    <Route exact path="/custdata" element={<Customerdata/>}/>
    <Route exact path="/edit/:id" element={<EditDetails/>}/>

    </Routes>
    </div>
    </div>
    </Router>
    
  );
}

export default App;
