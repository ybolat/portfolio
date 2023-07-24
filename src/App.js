import './App.css';
import Navigation from "./components/navigation/navigation.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/banner/banner.component";
import Skills from "./components/skills/skills.component";
import Project from "./components/projects/project.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

function App() {
    return (
        <div className={"main-app"}>
            <Navigation/>
            <Banner/>
            <Skills/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
