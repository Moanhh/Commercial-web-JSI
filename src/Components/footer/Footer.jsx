import React from 'react';
import './Footer.css';
import {Container, Row,Col, ListGroup,ListGroupItem} from 'reactstrap';
import {Link} from "react-router-dom";


function Footer() {
  return (
    <>
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
          <div className="logo">
         
              <div>
                <h1 className="text-white">Multimart</h1>
                <p>Since 1995</p>
              </div>
            </div>
          </Col>
          <Col lg="5">
            <div className="footer_link">
              <h4 className="quick_link-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 d-flex 
                align-items-center gap-2">
                  <Link to ="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to ="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to ="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to ="/signup">Signup</Link>
                </ListGroupItem>


              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
          <div className="footer_link ">
              <h4 className="quick_link-title">Useful Items</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to ="#">Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to ="#">Arm Chair</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
       
        </Row>
      </Container>
    </footer>
    </>
  )
}

export default Footer