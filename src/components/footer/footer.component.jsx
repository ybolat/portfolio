import './footer.style.css';
import {Col, Container, Row} from "react-bootstrap";
import logoPng from '../../assets/img/logo.png';
import SocialIcon from "../social-icon/social-icon.component";

const Footer = () => {

    return (
        <footer className={"footer"}>
            <Container>
                <Row className={"align-items-center"}>
                    <Col size={12} sm={6}>
                        <img src={logoPng} alt={""}/>
                    </Col>
                    <Col size={12} sm={6} className={"text-center text-sm-end"}>
                        <SocialIcon/>
                        <p>Done by Yerassyl Bolat 2023.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;