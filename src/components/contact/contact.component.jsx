import './contact.style.css';
import {useState} from "react";
import {useTranslation} from "react-i18next";
import emailjs from '@emailjs/browser';
import {Col, Container, Row} from "react-bootstrap";
import contactSvg from '../../assets/img/contact-img.svg';
import {message} from 'antd';

const INITIAL_FORM_DATA = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
}

const Contact = () => {

    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [loading, setLoading] = useState(false);

    const {t} = useTranslation();

    const setFormDataFunc = (field, value) => {
        setFormData({...formData, [field]: value});
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            await emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formData,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

            setLoading(false);
            setFormData(INITIAL_FORM_DATA);
            message.open({
                type: 'success',
                content: t('success'),
                className: 'custom-class',
                style: {
                    marginTop: '40px',
                },
            });
        } catch (e) {
            message.open({
                type: 'error',
                content: t('error'),
                style: {
                    left: 0,
                },
            });
            console.log(e);
        }
    };

    return (
        <section id={"contact"} className={"contact"}>
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <img src={contactSvg} alt={""}/>
                    </Col>
                    <Col size={12} md={6}>
                        <h2>{t('get_in_touch')}</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type={"text"} placeholder={t('first_name')} value={formData.firstName}
                                           required
                                           onChange={(e) => setFormDataFunc('firstName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type={"text"} placeholder={t('last_name')} value={formData.lastName}
                                           onChange={(e) => setFormDataFunc('lastName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type={"email"} placeholder={t('email_address')} value={formData.email}
                                           required
                                           onChange={(e) => setFormDataFunc('email', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type={"tel"} placeholder={t('phone')} value={formData.phone}
                                           onChange={(e) => setFormDataFunc('phone', e.target.value)}/>
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea rows={6} placeholder={t('message')} value={formData.message}
                                              onChange={(e) => setFormDataFunc('message', e.target.value)}/>
                                    <button type="submit"><span>{loading ? t('sending') : t('send')}</span></button>
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