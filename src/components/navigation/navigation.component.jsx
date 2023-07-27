import {useEffect, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './navigation.style.css';
import globeSvg from '../../assets/img/globe.svg';
import SocialIcon from "../social-icon/social-icon.component";
import {useTranslation} from 'react-i18next';
import 'flag-icon-css/css/flag-icons.min.css';
import 'bootstrap/js/src/dropdown';

const languages = [
    {
        code: 'ru',
        name: 'Руский',
        country_code: 'ru'
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
];

const Navigation = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const {t, i18n} = useTranslation();

    useEffect(() => {

        const onScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const changeLanguage = async (lng) => {
        await i18n.changeLanguage(lng);
    };

    const setIsActiveLinkFunc = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="sm" className={isScrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <div className="dropdown">
                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            <img className={"globe"} src={globeSvg} alt={""}/>
                        </button>
                        <ul className={"dropdown-menu dropdown-menu-dark"}>
                            {languages.map(value => {
                                return <li key={value.country_code}>
                                    <button className={"dropdown-item"} onClick={() => changeLanguage(value.code)}>
                                        <span className={`flag-icon flag-icon-${value.country_code}`}></span>
                                        {value.name}
                                    </button>
                                </li>
                            })}
                        </ul>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#banner"
                                  className={activeLink === 'banner' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => setIsActiveLinkFunc('banner')}>{t('banner')}</Nav.Link>
                        <Nav.Link href="#skills"
                                  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => setIsActiveLinkFunc('skills')}>{t('skills')}</Nav.Link>
                        <Nav.Link href="#projects"
                                  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => setIsActiveLinkFunc('projects')}>{t('projects')}</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
              <SocialIcon/>
              <Nav.Link href='#contact'>
                <button className="vvd"><span>{t('connect')}</span></button>
              </Nav.Link>
            </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;