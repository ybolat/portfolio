import './footer.style.css';
import {Col, Container, Row} from "react-bootstrap";
import SocialIcon from "../social-icon/social-icon.component";
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation();

    return (
        <footer className={"footer"}>
            <Container>
                <Row className={"justify-content-end text-end"}>
                    <Col size={12} sm={6}>
                        <SocialIcon/>
                        <p>{t('footer')}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;