import './skill-card.style.css';

const SkillCard = ({skill}) => {

    return (
        <div className={"item"}>
            <img src={skill.imgUrl} alt={""}/>
            <h5>{skill.skillName}</h5>
        </div>
    );
}

export default SkillCard;