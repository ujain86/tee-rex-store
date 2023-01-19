import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNavbar(props) {

  const handleCart = () => {
    props.setFlag(true);
  }

  const handleClick = () => {
    props.setFlag(false);
    props.setSearchInput('');
  }

  var cartTotal = 0;

  const cartSum = () => {
    props.cartItems.map((item) => {
      cartTotal += item.qty;
    })
  }

  cartSum();

  return (
    <Navbar bg='light' className='mb-5' fixed='top' >

      <Container>
        <Navbar.Brand className='fw-bold text-warning' onClick={handleClick}>
          <img src='https://cdn-icons-png.flaticon.com/128/2357/2357127.png' height='30' width='30' style={{marginTop: -10}} /> &nbsp;
          TeeRex Store
        </Navbar.Brand>
        {/* <Nav>
          <Nav.Link href='#' onClick={handleCart}>Cart qty: {cartTotal} </Nav.Link>
        </Nav> */}

        <div onClick={handleCart} style={{cursor: 'pointer'}} id='cartIconContainer'>
          <img id='cartIcon' src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="cart-icon" />
          <span id='cartCount'> {cartTotal} </span>
        </div>
        
        
      </Container>
      
    </Navbar>
  )
}

export default MyNavbar;