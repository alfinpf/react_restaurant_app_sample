import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function RestaurantDetails() {
    return (
        <Container>
            <Row>
                <Col className='py-3' md={8}>
                    <Card>
                        <Card.Img variant="top" src="../images/1.jpg" />
                        <Card.Body>
                            <Card.Title>Lima</Card.Title>
                            <Card.Text>
                            The World's Best Restaurant 2023, sponsored by S.Pellegrino & Acqua Panna
                            The Best Restaurant in South America 2023   
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Peruvian extravaganza conquers the world</Card.Title>
                            <Card.Text>
                            In 2008, Virgilio Martínez opened Central in Lima with a vision to create a fine dining experience rooted in Peruvian ingredients and cooking techniques. Intrigued by what was then an extravagant idea, Pía León joined in 2009 – then went on to become Martínez’s head chef and wife, laying the foundations of what would become the Central experience.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RestaurantDetails