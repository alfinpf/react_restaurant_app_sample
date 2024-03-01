import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



function RestaurantDetails() {

    const restaurants = useSelector((state) => state.restaurants.data); 

    const { id } = useParams();

    // eslint-disable-next-line
    const restaurant = restaurants.find((rest) => rest.id == id);


    return (
        <Container>

            {restaurant && (
                <Row>
                    <Col className='py-3' md={4}>
                        <Card>
                            <Card.Img variant="top" src={restaurant.photograph} />
                            <Card.Body>
                                <Card.Title>{restaurant.name}</Card.Title>
                                <Card.Text>{restaurant.address}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='py-3' md={8}>
                        <h4>Cuisine Type : {restaurant.cuisine_type}</h4>
                        <h5>Working Hours : </h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Sunday: {restaurant.operating_hours.Sunday}</ListGroup.Item>
                            <ListGroup.Item>Monday: {restaurant.operating_hours.Monday}</ListGroup.Item>
                            <ListGroup.Item>Tuesday: {restaurant.operating_hours.Tuesday}</ListGroup.Item>
                            <ListGroup.Item>Wednesday: {restaurant.operating_hours.Wednesday}</ListGroup.Item>
                            <ListGroup.Item>Thursday: {restaurant.operating_hours.Thursday}</ListGroup.Item>
                            <ListGroup.Item>Friday: {restaurant.operating_hours.Friday}</ListGroup.Item>
                            <ListGroup.Item>Saturday: {restaurant.operating_hours.Saturday}</ListGroup.Item>
                        </ListGroup>
                        <br/>

                        <h5>Reviews:</h5>

                        {restaurant && (
                            restaurant.reviews.map((review, index) => (
                                <Card>
                                <ListGroup variant="flush">
                                  <ListGroup.Item>Name : {review.name}</ListGroup.Item>
                                  <ListGroup.Item>Date : {review.date}</ListGroup.Item>
                                  <ListGroup.Item>Rating : {review.rating} / 5</ListGroup.Item>
                                  <ListGroup.Item>Comments : {review.comments}</ListGroup.Item>
                                </ListGroup>
                              </Card>
                            ))
                        )}

                    </Col>
                </Row>
            )}

        </Container>
    )
}

export default RestaurantDetails