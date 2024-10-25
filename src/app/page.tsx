import About from "./(pages)/_home/about";
import Achievement from "./(pages)/_home/achievement";
import CaseStudy from "./(pages)/_home/case-study";
import Hero from "./(pages)/_home/hero";
import Skills from "./(pages)/_home/skills";
import Slider from "./(pages)/_home/slider";

export default function Home() {
    return (
        <>
            <Hero />
            <Achievement />
            <Skills />
            <About />
            <Slider />
            <CaseStudy />
        </>
    );
}
