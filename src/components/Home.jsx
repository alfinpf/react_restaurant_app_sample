import React,{useState} from 'react'
import { Container, Row, Col,Card, Button } from 'react-bootstrap'
import Restaurants from './Restaurants'

function Home() {

    const [menu, setMenu]= useState(7);

    const restaurant =  {
        name:"The New Hotel",
        place:"Wayanad",
        photo:"./images/1.jpg",
        about:"The Best Hotel of the city."
    }

    const menuAdd = ()=>{
        setMenu(menu + 1);
    }

    const menuSubtract = ()=>{
        setMenu(menu - 1);
    }    

    return (
 
        <Container> 
            <Row>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Restaurants details = {restaurant} id={2} />
                </Col>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Card>
                        <Card.Img variant="top" src="/images/2.jpg"/>
                        <Card.Body>
                            <Card.Title>Disfrutar</Card.Title>
                            <Card.Text>
                            Barcelona
                            </Card.Text>
                            <Button variant="dark ">Know More  </Button>
                            <Button className='ms-3' variant="dark " onClick={menuAdd}>+  </Button> {menu}
                            <Button className='ms-3' variant="dark " onClick={menuSubtract}>-  </Button>
                            

                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Card>
                        <Card.Img variant="top" src="/images/3.jpg"/>
                        <Card.Body>
                            <Card.Title>Diverxo</Card.Title>
                            <Card.Text>
                            Madrid
                            </Card.Text>
                            <Button variant="dark ">Know More  </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Card>
                        <Card.Img variant="top" src="/images/4.jpg"/>
                        <Card.Body>
                            <Card.Title>Asador Etxebarri</Card.Title>
                            <Card.Text>
                            Atxondo
                            </Card.Text>
                            <Button variant="dark ">Know More  </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Card>
                        <Card.Img variant="top" src="/images/5.jpg"/>
                        <Card.Body>
                            <Card.Title>Alchemist</Card.Title>
                            <Card.Text>
                            Copenhagen
                            </Card.Text>
                            <Button variant="dark ">Know More  </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Card>
                        <Card.Img variant="top" src="/images/6.jpg"/>
                        <Card.Body>
                            <Card.Title>Maido</Card.Title>
                            <Card.Text>
                            Lima
                            </Card.Text>
                            <Button variant="dark ">Know More  </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Card>
                        <Card.Img variant="top" src="/images/7.jpg"/>
                        <Card.Body>
                            <Card.Title>Lido 84</Card.Title>
                            <Card.Text>
                            Gardone Riviera
                            </Card.Text>
                            <Button variant="dark ">Know More  </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Card>
                        <Card.Img variant="top" src="/images/8.jpg"/>
                        <Card.Body>
                            <Card.Title>Atomix</Card.Title>
                            <Card.Text>
                            New York
                            </Card.Text>
                            <Button variant="dark ">Know More  </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Card>
                        <Card.Img variant="top" src="/images/9.jpg"/>
                        <Card.Body>
                            <Card.Title>Quintonil</Card.Title>
                            <Card.Text>
                            Mexico City
                            </Card.Text>
                            <Button variant="dark ">Know More  </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Card>
                        <Card.Img variant="top" src="/images/10.jpg"/>
                        <Card.Body>
                            <Card.Title>Table by Bruno Verjus</Card.Title>
                            <Card.Text>
                            Paris
                            </Card.Text>
                            <Button variant="dark ">Know More  </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Card>
                        <Card.Img variant="top" src="/images/11.jpg"/>
                        <Card.Body>
                            <Card.Title>Trèsind Studio</Card.Title>
                            <Card.Text>
                            Dubai
                            </Card.Text>
                            <Button variant="dark ">Know More  </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='py-3' md={6} lg={4} xxl={3}>
                    <Card>
                        <Card.Img variant="top" src="/images/12.jpg"/>
                        <Card.Body>
                            <Card.Title>A Casa do Porco</Card.Title>
                            <Card.Text>
                            São Paulo
                            </Card.Text>
                            <Button variant="dark ">Know More  </Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>

  
    )
}

export default Home