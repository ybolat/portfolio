import 'react-multi-carousel/lib/styles.css';
import './skills.style.css';
import Carousel from 'react-multi-carousel';
import ReactLogo from '../../assets/img/react.svg';
import ReduxLogo from '../../assets/img/redux.svg';
import GraphQLLogo from '../../assets/img/graphql.svg';
import JavaScriptLogo from '../../assets/img/javascript.svg';
import TypeScriptLogo from '../../assets/img/typescript.svg';
import TailwindCSSLogo from '../../assets/img/tailwindcss.svg';
import AndDesignLogo from '../../assets/img/ant-design.svg';
import JavaLogo from '../../assets/img/java.svg';
import SpringLogo from '../../assets/img/spring.svg';
import PostgreSQLLogo from '../../assets/img/postgresql.svg';
import SkillCard from "../skill-card/skill-card.component";

const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

const skillsArray = [
    {
        "skillName": "React",
        "imgUrl": ReactLogo,
    },
    {
        "skillName": "Redux",
        "imgUrl": ReduxLogo,
    },
    {
        "skillName": "GraphQL",
        "imgUrl": GraphQLLogo,
    },
    {
        "skillName": "JavaScript",
        "imgUrl": JavaScriptLogo,
    },
    {
        "skillName": "TypeScript",
        "imgUrl": TypeScriptLogo,
    },
    {
        "skillName": "TailwindCSS",
        "imgUrl": TailwindCSSLogo,
    },
    {
        "skillName": "And design",
        "imgUrl": AndDesignLogo,
    },
    {
        "skillName": "Java",
        "imgUrl": JavaLogo,
    },
    {
        "skillName": "Spring",
        "imgUrl": SpringLogo,
    },
    {
        "skillName": "PostgreSQL",
        "imgUrl": PostgreSQLLogo,
    },
];

const Skills = () => {

    return (
        <section id={"skills"} className={"skill"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-12"}>
                        <div className={"skill-bx wow zoomIn"}>
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true}
                                      className={"owl-carousel owl-theme skill-slider"}>
                                {skillsArray.map((v, index) => <SkillCard key={index} skill={v}/>)}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;