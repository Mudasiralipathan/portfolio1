
import Contact from "./components/Contact/Contact.jsx";
import Project from "./components/Project/Project.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Records from "./components/Records/Records.jsx";
import Footer from "./components/Footer/Footer.jsx";




const App = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Records />
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;