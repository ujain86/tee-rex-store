import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

function Cart(props) {

    // const {cartItems, setCartItems} = props;
    // console.log('props', setCartItems);
    console.log("cart: ", props.cartItems)

    const handleAdd = (item) => {

        var cartItemsCopy = [...props.cartItems];

        cartItemsCopy.filter((i) => {
            if(i.id == item.id){
                item.qty++;
            }
        });

        props.setCartItems(cartItemsCopy);
    }

    const handleSubtract = (item) => {

        var cartItemsCopy = [...props.cartItems];

        cartItemsCopy.filter((i) => {
            if(i.id == item.id){
                item.qty--;
            }
        });

        props.setCartItems(cartItemsCopy);
    }

    const handleDelete = (item) => {

        var cartItemsCopy = [...props.cartItems];

        cartItemsCopy = cartItemsCopy.filter((i) => {
            if(i.id != item.id){
                 return item;
            }
        });

        props.setCartItems(cartItemsCopy);
    }
    
  return (
    <div>
        Cart
        {/* {props.cartItems[0]?(props.cartItems.map((item) => {
           return <h2> {item.name} </h2>
        })):""} */}
        <Row>
            {props.cartItems?(props.cartItems.map((item) => {
                // const [name, imageURL, price] = item;
            return (
                <Col lg={12} >
                    <Card style={{ width: 400}}>
                        <Card.Img src={item.imageURL} />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle>Rs. {item.price}</Card.Subtitle>
                            
                            Qty: <button onClick={ () => handleSubtract(item)}>-</button>
                            &nbsp; {item.qty} &nbsp;
                            <button onClick={() => handleAdd(item)}>+</button>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => handleDelete(item)}>Delete</button>
                        </Card.Body>
                    </Card>
                </Col>
            )
            })):""}
        </Row>
    </div>
  )
}

export default Cart;