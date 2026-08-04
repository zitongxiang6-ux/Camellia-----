import Layout from './components/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import VibecodingWorks from './sections/VibecodingWorks';
import Contact from './sections/Contact';

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <VibecodingWorks />
      <Contact />
    </Layout>
  );
}
