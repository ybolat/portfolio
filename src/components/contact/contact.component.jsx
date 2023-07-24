import {Col, Container, Row} from "react-bootstrap";
import contactSvg from '../../assets/img/contact-img.svg';
import './contact.style.css';
import {useState} from "react";

const INITIAL_FORM_DATA = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
}

const Contact = () => {

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);

    const setFormDataFunc = (field, value) => {
        setFormData({...formData, [field]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section id={"contact"} className={"contact"}>
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={contactSvg} alt={""}/>
                    </Col>
                    <Col size={12} md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type={"text"} placeholder="First Name" value={formData.firstName}
                                           onChange={(e) => setFormDataFunc('firstName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type={"text"} placeholder="Last Name" value={formData.lastName}
                                           onChange={(e) => setFormDataFunc('lastName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type={"email"} placeholder="Email Address" value={formData.email}
                                           onChange={(e) => setFormDataFunc('email', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type={"tel"} placeholder="Phone number" value={formData.phone}
                                           onChange={(e) => setFormDataFunc('phone', e.target.value)}/>
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows={6} placeholder="Message" value={formData.message}
                                              onChange={(e) => setFormDataFunc('message', e.target.value)}/>
                                    <button type="submit"><span>Send</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;