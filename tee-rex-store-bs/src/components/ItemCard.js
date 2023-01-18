import React from 'react';
import {Button, Card, Col, Row} from 'react-bootstrap';

 
function ItemCard(props) {
  
  const {id, imageURL, name, price, quantity} = props.data;

  const handleAdd = () => {

    var flag =  true;

    const obj = {
      id,
      imageURL,
      name,
      price,
      maxQuantity: quantity,
      qty: 1
    }
    
    var newCartItems = [...props.cartItems];

    newCartItems.filter((item) => {
      if(item.id == obj.id){
        if(item.qty < quantity){
          item.qty++;
          flag = false;
          return;
        }
        else{
          alert('Sorry, no nore stock available');
          flag = false;
          return;
        }
        
      }
      
    })

    if(flag){
      if(quantity > 0){
        newCartItems.push(obj);
      }

      else{
        alert('Out of Stock');
      }
      
    }
    
    
    
    props.setCartItems(newCartItems);

    console.log(props.cartItems);

  }

  return ( 
      
        <Col lg={4} className='mb-4' >
          <Card >
              <Card.Img src={imageURL} height='400' width='400' />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Rs {price}</Card.Subtitle>

                <div className='d-grid'>
                  <Button variant='success' className='mt-3' onClick={handleAdd} >Add To Cart</Button>
                </div>
                
              </Card.Body>
          </Card>
        </Col>
      
        
    
  )
}

export default ItemCard;