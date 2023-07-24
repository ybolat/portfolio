import {useEffect, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './navigation.style.css';
import logoPng from '../../assets/img/logo.png';
import SocialIcon from "../social-icon/social-icon.component";

const Navigation = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

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

    const setIsActiveLinkFunc = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="sm" className={isScrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logoPng} alt={""}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#banner"
                                  className={activeLink === 'banner' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => setIsActiveLinkFunc('banner')}>Banner</Nav.Link>
                        <Nav.Link href="#skills"
                                  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => setIsActiveLinkFunc('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects"
                                  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                  onClick={() => setIsActiveLinkFunc('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
              <SocialIcon/>
              <Nav.Link href='#contact'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </Nav.Link>
            </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;