import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import './project.style.css';
import ProjectCard from "../project-card/project-card.component";
import {useTranslation} from "react-i18next";

const projectsReact = [
    {
        titleEn: "Online Shop",
        titleRu: "Онлайн магазин",
        stack: "Redux, Redux-Saga, Firebase, CSS-IN-JS, SCSS",
        descriptionEn: "A regular online store. You can authorize through mail or through google account. There are also 5 different categories. You can add clothes to your cart, and pay for all products that are in your cart.",
        descriptionRu: "Обычный интернет-магазин. Можно авторизоваться через почту или через google аккаунт. Также есть 5 различных категорий. Вы можете добавлять одежду в корзину и оплачивать все товары.",
        gitHubLink: "https://github.com/ybolat/online-shop",
        visitLink: "https://online-shop-react-ybolat.netlify.app"
    },
    {
        titleEn: "GitHub Api",
        titleRu: "GitHub Api",
        stack: "ReduxToolKit, RTKQuery, TailwindCSS, Typescript",
        descriptionEn: "In this project, you can search for github accounts. You will also see all open repositories of this account and can add them to your favorites. Also by clicking on them you will be able to open that git repositories",
        descriptionRu: "В этом проекте вы можете искать аккаунты на github. Вы также увидите все открытые репозитории этого аккаунта и сможете добавить их в избранное. Также, щелкнув на них, вы сможете открыть этот git",
        gitHubLink: "https://github.com/ybolat/github-api",
        visitLink: "https://githubapi-ybolat.netlify.app"
    }
];

const projectsVue = [
    {
        titleEn: "Vue title",
        titleRu: "Онлайн магазин",
        stack: "Vue",
        descriptionEn: "Vue description",
        gitHubLink: "Vue github",
        visitLink: "Vue visit"
    }
];

const projectsAngular = [
    {
        titleEn: "Angular title",
        titleRu: "Онлайн магазин",
        stack: "Angular",
        descriptionEn: "Angular description",
        gitHubLink: "Angular github",
        visitLink: "Angular visit"
    }
];

const Project = () => {

    const {t} = useTranslation();

    return (
        <section id={"projects"} className={"project"}>
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>{t('projects')}</h2>
                        <Tab.Container id={"projects-tabs"} defaultActiveKey={"first"}>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center"
                                 id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">React</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Vue</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Angular</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id={"slideInUp"}>
                                <Tab.Pane eventKey={"first"}>
                                    <Row>
                                        {projectsReact.map((project, index) => <ProjectCard key={index}
                                                                                            project={project}/>)}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"second"}>
                                    <Row>
                                        {projectsVue.map((project, index) => <ProjectCard key={index}
                                                                                          project={project}/>)}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"third"}>
                                    <Row>
                                        {projectsAngular.map((project, index) => <ProjectCard key={index}
                                                                                              project={project}/>)}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Project;