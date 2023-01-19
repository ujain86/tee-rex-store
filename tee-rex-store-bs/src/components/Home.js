import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCard from './ItemCard';
import MyNavbar from './MyNavbar';
import SearchBar from './SearchBar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';

function Home() {

    const [APIdata, setAPIdata] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [flag, setFlag] = useState(false);

    // console.log('cartitems', cartItems);
    

    useEffect(() => {
        const APIcall = async () => {
            const url = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';
            const data = await fetch(url);
            const parsedData = await data.json();
            setAPIdata(parsedData);
        }

        APIcall();
        
    }, []);

  return (
    <>  
        <MyNavbar setFlag={setFlag} setSearchInput={setSearchInput} cartItems={cartItems}/>
        <div style={{height: 100}}></div>
        
        {flag?
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
            :
            <>
                <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
                <Container>
                    <Row>
                        <Col lg={{span: 2}} style={{border: '1px solid black', height: 400}}>
                            <form>
                                <label>Colour</label> <br/>
                                <input type='checkbox' checked='true' />Red <br/>
                                <input type='checkbox' />Blue <br/>
                                <input type='checkbox' />Black
                        
                            </form>
                        </Col>
                        <Col>
                            <Row>
                                {APIdata.filter((item) => {
                                    if(searchInput == ""){
                                        return item;
                                    }
                                    else if(item.name.toLowerCase().includes(searchInput)){
                                        return item;
                                    }
                                })
                                .map((item, index) => {
                                    return <ItemCard data={item} key={index} cartItems={cartItems} setCartItems={setCartItems} />
                                })}
                            </Row>
                        </Col>
                    </Row>
                    
                </Container>
            </>
            
        }
    </>
  )
}

export default Home