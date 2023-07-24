import './banner.style.css';
import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import myPhoto from '../../assets/img/my-photo.png';
import {ArrowRightCircle} from 'react-bootstrap-icons';

const period = 400;
const wordLoop = ["Web Developer", "Software Engineer", "Frontend Developer"];

const Banner = () => {

    const [wordNumber, setWordNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [typingPeriod, setTypingPeriod] = useState(period);

    useEffect(() => {

        let typeWord = setInterval(() => {
            typingFunc();
        }, typingPeriod);

        return () => {
            clearInterval(typeWord)
        }
    }, [text]);

    const typingFunc = () => {
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
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Yerassyl`} <span className="txt-rotate">
                            <span className="wrap">{text}</span></span></h1>
                        <div>
                            <p>
                                Now I am a Full-Stack developer, but I have a strong desire to become a Fronted
                                developer.
                            </p>
                            <p>
                                During school time, I took places in regional Olympiads in computer science.
                            </p>
                            <p>
                                I graduated with honors from one of the best universities of the country.
                            </p>
                            <p>
                                Participated in an international hackathon.
                            </p>
                            <p>
                                I lead an active social life.
                            </p>
                            <p>
                                At my new job I will definitely be a responsible, communicative and eager to develop
                                employee
                            </p>
                            <div className={"cv-links"}>
                                <button onClick={() => alert("not ready yet")}>Download CV in Russian<ArrowRightCircle/>
                                </button>
                                <button onClick={() => alert("not ready yet")}>Download CV in English<ArrowRightCircle/>
                                </button>
                            </div>
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