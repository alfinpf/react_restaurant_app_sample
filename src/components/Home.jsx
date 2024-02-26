import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Restaurants from './Restaurants';


function Home() {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {

        fetch(`./restaurants.json`)
            .then((res) => res.json())
            .then((data) => setRestaurants(data.restaurants));
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