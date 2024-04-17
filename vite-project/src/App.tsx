import "./index.scss";
import Header from "./components/organisms/Header/Header";
import Hero from "./components/organisms/Hero/Hero";
import AboutMe from "./components/organisms/AboutMe/AboutMe";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
