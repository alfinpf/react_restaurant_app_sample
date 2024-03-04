import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function AddRestaurant() {

    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantAddress, setRestaurantAddress]= useState('');
    const [restaurantNeighbourhood, setRestaurantNeighbourhood] = useState('');

    const [validated, setValidated] = useState(false);

    const handleRestaurantName = (e)=>{
        setRestaurantName(e.target.value);
    }

    const handleRestaurantAddress = (e)=>{
        setRestaurantAddress(e.target.value);
    }

    const handleRestaurantNeighbourhood = (e)=>{
        setRestaurantNeighbourhood(e.target.value);
    }

    console.log("Name of the restaurant is", restaurantName);
    console.log("Address:" ,restaurantAddress);
    console.log("Neighbourhood" ,restaurantNeighbourhood);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        setValidated(true);
      };

    return (

        <Container>
            <Row>
                <Col className='mt-3'>
                    <h4>Add New Restaurant</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Name of the Restaurant</Form.Label>
                            <Form.Control type="text" placeholder="Enter Restaurant Name" required onKeyUp={handleRestaurantName}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" required onKeyUp={handleRestaurantAddress}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Neighbourhood</Form.Label>
                            <Form.Control type="text" placeholder="Enter Neighbourhood" required onKeyUp={handleRestaurantNeighbourhood}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridState" >
                            <Form.Label>Cuisine Type</Form.Label>
                            <Form.Select defaultValue="Choose..." required>
                                <option>American</option>
                                <option>Indian</option>
                                <option>Chinese</option>
                                <option>European</option>
                                <option>Italian</option>
                                <option>Mexican</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Restaurant Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Button variant="dark" type="submit">Add Restaurant Details</Button>
                        <br/>
                    </Form>
                    <br/>
                </Col>
            </Row>
        </Container>

    )
}

export default AddRestaurant