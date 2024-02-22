import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function Restaurants({details, id}) {

  console.log(details);
  console.log(id)

  return (

    <Card>
      <Card.Img variant="top" src={details.photo} />
      <Card.Body>
        <Card.Title>{details.name}</Card.Title>
        <Card.Text>
          {details.about}
        </Card.Text>
        <Button as={Link} to={`/details/${id}`} variant="dark ">Know More</Button>
      </Card.Body>
    </Card>

  );
}

export default Restaurants;