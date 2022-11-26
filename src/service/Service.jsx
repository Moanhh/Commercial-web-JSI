import React from 'react'

import serviceData from "../assets/data/serviceData"
import { Container, Row, Col} from 'reactstrap';
import {motion} from 'framer-motion'

import './service.css'


function Service() {
  return (
    <>
    <section className="services">
        <Container>
            <Row>
                {serviceData.map((item,idex) =>(
                    <Col lg="3" md="4">
                    <motion.div whileHover={{scale:1.1}}
                     className="service_item" style={{background:`${item.bg}`}}> 
                        <span>
                        <i class={item.icon}></i>
                        </span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    </motion.div>
                </Col>
                )

                )
                    
                }
                
            </Row>
        </Container>

    </section>
    </>
  )
}

export default Service