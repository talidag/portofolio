import "./index.scss";
import Header from "./components/organisms/Header/Header";
import Hero from "./components/organisms/Hero/Hero";
import AboutMe from "./components/organisms/AboutMe/AboutMe";
import Skills from "./components/organisms/Skills/Skills";
import Projects from "./components/organisms/Projects/Projects";
import Footer from "./components/organisms/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
