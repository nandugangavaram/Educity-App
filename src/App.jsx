import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import "./App.css";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What we offer" subTitle="Our Program" />
        <Programs />
        <About />
        <Title title="Campus Photos" subTitle="Gallery" />
        <Campus />
        <Title title="What Student Says" subTitle="Testimonials" />
        <Testimonials />
        <Title title="Get in Touch" subTitle="Contact Us" />
        <Contact />
      </div>
    </>
  );
}

export default App;
