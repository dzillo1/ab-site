import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import orderOptionsImage from '../assets/order-options.webp';

function ProjectCard(){
    return (
        <Card className="project-card">
          <Card.Img variant="top" src={orderOptionsImage} />
          <Card.Body>
            <Card.Title>Order Options</Card.Title>
            <Card.Text>
              Order options component made with VUE.js
            </Card.Text>
            <Button variant="success">View</Button>
          </Card.Body>
        </Card>
      );
}

export default ProjectCard