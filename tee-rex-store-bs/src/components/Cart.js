import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

function Cart(props) {

    const totalAmount = () => {
        var sum = 0;
        props.cartItems.map((item) => {
            sum += item.price * item.qty ;
        });

        return sum;
    }

    const handleAdd = (item) => {

        var cartItemsCopy = [...props.cartItems];

        cartItemsCopy.filter((i) => {
            if(i.id == item.id){
                if(item.qty < item.maxQuantity){
                    item.qty++;
                    return;
                }
                else{
                    alert('Sorry, no more stock available');
                    return;
                }
                
            }
            
        });

        props.setCartItems(cartItemsCopy);
    }

    const handleSubtract = (item) => {

        var cartItemsCopy = [...props.cartItems];

        cartItemsCopy.filter((i) => {
            if(i.id == item.id){
                if(item.qty > 1){
                    item.qty--;
                }
                
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
        <Row>

            {props.cartItems.length > 0 ?
                <>
                <Col lg={{offset: 1, span: 10}}>
                    <h2 className='mb-5 text-success'> Shopping Cart</h2>
                </Col>
                {props.cartItems.map((item) => {
                    return (
                        <Col lg={{offset: 1, span: 10}} >
                            <div className='cart-div'>
                                <div className='cart-img'>
                                    <img src={item.imageURL} height='70' width='70'></img>
                                </div>

                                <div className='cart-details'>
                                    <h5>{item.name}</h5>
                                    <h6>Rs. {item.price}</h6>
                                    Qty: <button className='qty-btn' onClick={ () => handleSubtract(item)}>-</button>
                                        &nbsp; {item.qty} &nbsp;
                                        <button className='qty-btn' onClick={() => handleAdd(item)}>+</button>
                                        &nbsp;&nbsp;&nbsp;
                                        <button className='delete-btn' onClick={() => handleDelete(item)}><img src='https://cdn-icons-png.flaticon.com/512/6861/6861362.png' height={30} width='30' /></button>

                                </div>
                                
                            </div>
                        </Col>
                    )
            })}
                <Col lg={{offset: 1, span: 10}}>
                <h2 className='mb-5 text-success'> Total: Rs. {totalAmount()} </h2>
                </Col>
            </>
            :
            <Col lg={{offset: 5}}>
                <h1>Cart is Empty!!</h1>
            </Col>}

        </Row>
    </div>
  )
}

export default Cart;