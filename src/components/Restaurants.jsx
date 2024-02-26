import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function Restaurants({restaurant}) {

  return (

    <Card>
      <Card.Img variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>{restaurant.address}</Card.Text>
        <Button as={Link} to={`/details/${restaurant.id}`} variant="dark ">Know More</Button>
      </Card.Body>
    </Card>

  );
}

export default Restaurants