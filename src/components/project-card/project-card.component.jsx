import {Col, Nav} from 'react-bootstrap';
import './project-card.style.css';

const ProjectCard = ({project}) => {

    return (
        <Col size={12} sm={6} md={4}>
            <div className="project-card">
                <h4>{project.title}</h4>
                <div>
                    Stack: {project.stack}
                </div>
                <div>Description: {project.description}</div>
                <div className={"project-card-links"}>
                    <Nav.Link className={"project-card-link"} href={project.gitHubLink} target={"_blank"}>View code</Nav.Link>
                    <Nav.Link className={"project-card-link"} href={project.visitLink} target={"_blank"}>Visit project</Nav.Link>
                </div>
            </div>
        </Col>
    );
}

export default ProjectCard;