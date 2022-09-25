import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CategoryCard(props) {
    console.log({props})
  return (
    <Card>
      <Card.Header>Category Suggestions</Card.Header>
      <Card.Body>
        <Card.Title>{props.category.label}</Card.Title>
        <Card.Text>
            {props.category.score}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;