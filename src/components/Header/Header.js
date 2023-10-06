import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import logo from './logo.png'

export default function Header() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Navbar.Brand href='#' className='ms-2'>
        <img src={logo} alt='news' style={{width: '100px'}} />
      </Navbar.Brand> 
      <Navbar.Toggle aria-controls='my-navbar' />
      <Navbar.Collapse id='my-navbar'>
        <Nav className='me-auto'>
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
        </Nav>

        <div className='ml-auto d-flex'>
          <Form className='d-flex'>
            <FormControl type="text" placeholder='Search' className='me-2' />
            <Button variant='outline-success' className='me-xs-1 me-sm-2 me-md-3 me-lg-5'>Search</Button>
            <Button variant='primary' className='me-2'>Login</Button>
            <Button variant='secondary' className='me-2'>Register</Button>
          </Form>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}