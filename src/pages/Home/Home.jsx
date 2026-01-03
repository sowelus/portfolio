import Hero from '/src/components/organisms/Hero';
import About from '/src/components/organisms/About';
import Skills from '/src/components/organisms/Skills';
import Projects from '/src/components/organisms/Projects';
import Contact from '/src/components/organisms/Contact';

const Home = ({ language }) => {
  return (
    <>
      <Hero language={language} />
      <About language={language} />
      <Skills language={language}/>
      <Projects language={language} />
      <Contact language={language} />
    </>
  );
};

export default Home;