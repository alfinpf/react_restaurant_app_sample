import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Restaurants from './Restaurants';
import { getRestaurants } from '../redux/restaurantSlice';
import { useDispatch, useSelector } from 'react-redux';



function Home() {

    const dispatch = useDispatch();

    const restaurants = useSelector((state) => state.restaurants.data);

    useEffect(() => {

        fetch(`./restaurants.json`)
            .then((res) => res.json())
            .then((data) => dispatch(getRestaurants(data.restaurants)));
    }, []);

    return (
        <Container>
            <Row>
                {restaurants && (
                    restaurants.map((restaurant,index) => (
                        <Col className='py-3' md={3} key={index}>
                            <Restaurants restaurant={restaurant}/>
                        </Col>
                    ))
                )}
            </Row>
        </Container> 
    )











}

export default Home