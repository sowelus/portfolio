import HeroSection from '../../components/organisms/HeroSection';
import AboutSection from '../../components/organisms/AboutSection';
import SkillsSection from '../../components/organisms/SkillsSection';
import ProjectsSection from '../../components/organisms/ProjectsSection';
import ContactSection from '../../components/organisms/ContactSection';

const Home = ({ language }) => {
  return (
    <>
      <HeroSection language={language} />
      <AboutSection language={language} />
      <SkillsSection />
      <ProjectsSection language={language} />
      <ContactSection language={language} />
    </>
  );
};

export default Home;