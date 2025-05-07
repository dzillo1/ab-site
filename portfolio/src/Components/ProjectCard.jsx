import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import data from "../data/projects.json";

function ProjectCard() {
  const [show, setShow] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setActiveProject(project);
    setShow(true);
  };

  return (
    <>
      {data.map((project, index) => (
        <Card key={index} className="project-card">
          <a onClick={() => handleShow(project)}>
            <Card.Img
              className="card-img img-fluid"
              variant="top"
              src={project.image}
            />
            <Card.Body>
              <Card.Title className="card-title">{project.title}</Card.Title>
              <Card.Text className="card-text mb-3">{project.description}</Card.Text>
              <Button variant="w-100">View</Button>
            </Card.Body>
          </a>

          <Modal
            size="lg"
            show={show && activeProject === project}
            onHide={handleClose}
            aria-labelledby="project-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-title text-white">{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img
                src={project.image}
                className="img-fluid card-img"
                alt={project.title}
              />
            </Modal.Body>
            <Modal.Footer className="d-flex flex-column">
              <p className="description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-align-center code-link"
              >
                Code
              </a>
              <a
                href={project.published}
                target="_blank"
                rel="noopener noreferrer"
                className={`${project.published ? "link-published" : "link-unpublished"} text-align-center code-link`}
              >
                {project.published ? "View Published Project" : "Not Published"}
              </a>
            </Modal.Footer>
          </Modal>
        </Card>
      ))}
      
    </>
  );
}

export default ProjectCard;