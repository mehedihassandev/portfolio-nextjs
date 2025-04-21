import Achievement from './achievement';
import Portfolio from './portfolio';
import Hero from './hero';
import Project from './project';
import Skills from './skills';
import About from './about';
import Review from './review';
import AchivementSlider from './achivementSlider';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Achievement />
      <Skills />
      <About />
      <AchivementSlider />
      <Portfolio />
      <Project />
      <Review />
    </>
  );
}
