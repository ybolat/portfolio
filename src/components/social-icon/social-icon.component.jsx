import githubIcon from "../../assets/img/github.svg";
import linkedinIcon from "../../assets/img/linkedin.svg";
import './social-icon.style.css';

const SocialIcon = () => {

    return (
        <div className="social-icon">
            <a href="https://github.com/ybolat" target={"_blank"}><img src={githubIcon} alt=""/></a>
            <a href="https://www.linkedin.com/in/ерасыл-болат-a75338241/" target={"_blank"}><img src={linkedinIcon} alt=""/></a>
        </div>
    );
}

export default SocialIcon;