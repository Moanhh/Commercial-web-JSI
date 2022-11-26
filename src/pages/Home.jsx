import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'

import {Container, Row, Col} from 'reactstrap';

import products from '../assets/data/products'

import Helmet from '../Components/helmet/Helmet';
import Service from '../service/Service';
import ProductsList from '../Components/UI/ProductsList';

import heroImg from '../assets/images/hero-img.png';

import '../styles/home.css';
//import { data } from 'autoprefixer';
function Home() {

    const year = new Date().getFullYear;

    const [trendingProducts, settrendingProducts] = useState([]);
    const [bestSaleProducts, setbestSaleProducts] = useState([]);

    useEffect(() => {
        const filterProducts = products.filter(
            (item) => item.category === "chair");
        
            const filterbestSaleProducts = products.filter(
                (item) => item.category === "sofa");
    

            settrendingProducts(filterProducts);
            setbestSaleProducts(filterbestSaleProducts)
    },[])

  return (
    <Helmet title={"Home"}>
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg='6' md ='6'>
                        <div className="hero_content">
                        <p className="hero_subtitle">
                                Trending product in {year}
                            </p>
                            <h2>
                                Make more MInimalistic and Modern
                            </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Delectus cumque, vero, numquam reprehenderit dolorum culpa sit temporibus dicta rem nemo ipsa doloremque!
                                Natus animi quae dolores provident laboriosam exercitationem sapiente?
                            </p>
                            <motion.button whileTap={{ sacle: 1.2}} 
                            className="buy_btn" >
                                <Link to="/shop">SHOP NOW</Link>
                            </motion.button>
                        </div>
                    </Col>

                    <Col lg='6' md ='6'>
                        <div className="hero_img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>

        <Service/>
        
        <section className="trending_product">
            <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section_title">
                            Trending Product
                        </h2>
                    </Col>
                <ProductsList data={trendingProducts}/>
                </Row>
            </Container>
        </section>

        <section className="best_sales">
        <Container>
                <Row>
                    <Col lg='12' className="text-center">
                        <h2 className="section_title">
                            Best Sales
                        </h2>
                    </Col>
                <ProductsList data={bestSaleProducts}/>
                </Row>
            </Container>
        </section>

    </Helmet>
  )
}

export default Home