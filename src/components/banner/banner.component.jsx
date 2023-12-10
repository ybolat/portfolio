import './banner.style.css';
import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import myPhoto from '../../assets/img/my-photo.png';
import {useTranslation} from "react-i18next";

const period = 200;
const wordLoopEn = ["Web Developer ", "Software Engineer ", "Frontend Developer "];
const wordLoopRu = ["Вэб Разработчик ", "Инженер ПО ", "Фронтенд Разработчик "];

const Banner = () => {

    const [wordNumber, setWordNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [typingPeriod, setTypingPeriod] = useState(period);

    const {t, i18n} = useTranslation();

    useEffect(() => {

        let typeWord = setInterval(() => {
            typingFunc();
        }, typingPeriod);

        return () => {
            clearInterval(typeWord)
        }
    }, [text, typingPeriod]);

    const typingFunc = () => {
        let wordLoop;

        if (i18n.language === 'ru') {
            wordLoop = wordLoopRu;
        } else {
            wordLoop = wordLoopEn;
        }

        let i = wordNumber % wordLoop.length;
        let fullText = wordLoop[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTypingPeriod(prevState => prevState / 1.2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTypingPeriod(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setWordNumber(wordNumber + 1);
            setTypingPeriod(period);
        }
    }

    return (
        <section id={"banner"} className={"banner"}>
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">{t('welcome')}</span>
                        <h1 className={"hello-text"}>
                            {t('i_am')}&nbsp;
                            <span className="txt-rotate">
                                <span className="wrap">{text}</span>
                            </span>
                        </h1>
                        <div>
                            <p>
                                {t('banner-text-hello')}
                                <br/><br/>
                                {t('banner-text-passion')}
                                <br/><br/>
                                {t('banner-text-knowledge')}
                                <br/><br/>
                                {t('banner-text-plans')}
                                <br/><br/>
                                {t('banner-text-end')}
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5} className={"text-center"}>
                        <img className={"my-photo"} src={myPhoto} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;
