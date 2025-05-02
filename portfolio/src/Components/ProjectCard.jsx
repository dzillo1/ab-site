import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import orderOptionsImage from '../assets/order-options.webp';

function ProjectCard(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
        <Card 
        className="project-card">
          <a onClick={handleShow}>
            <Card.Img 
            classname="card-img" 
            variant="top" 
            src={orderOptionsImage} />
            <Card.Body>
              <Card.Title>Order Options</Card.Title>
              <Card.Text>
                Order options component made with VUE.js
              </Card.Text>
              <Button variant="success w-100">View</Button>
            </Card.Body>
          </a>
        </Card>

        <Modal 
        size="lg"
        show={show} 
        onHide={handleClose}
        aria-labelledby="order-options-vue"
        >
        <Modal.Header closeButton>
          <Modal.Title>'Order Options' component made with VUE.js</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img 
          src={orderOptionsImage} 
          className="img-fluid mb-3"/>
        <a href="https://github.com/dzillo1/ns-code/blob/main/VUE-comp/order-options.php" 
        target="_blank" 
        className="text-align-center">Code</a>
        </Modal.Body>
        </Modal>
      </>

      );
}

export default ProjectCard