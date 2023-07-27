import {Col, Nav} from 'react-bootstrap';
import './project-card.style.css';
import {useTranslation} from "react-i18next";

const ProjectCard = ({project}) => {

    const {t, i18n} = useTranslation();

    return (
        <Col size={12} sm={6} md={4}>
            <div className="project-card">
                <h4>{i18n.language === 'ru' ? project.titleRu: project.titleEn}</h4>
                <div>
                    {t('stack')}: {project.stack}
                </div>
                <div>{t('description')}: {i18n.language === 'ru' ? project.descriptionRu : project.descriptionEn}</div>
                <div className={"project-card-links"}>
                    <Nav.Link className={"project-card-link"} href={project.gitHubLink} target={"_blank"}>{t('view_code')}</Nav.Link>
                    <Nav.Link className={"project-card-link"} href={project.visitLink} target={"_blank"}>{t('visit_project')}</Nav.Link>
                </div>
            </div>
        </Col>
    );
}

export default ProjectCard;