import Achievement from "./achievement";
import Portfolio from "./portfolio";
import Hero from "./hero";
import Project from "./project";
import Skills from "./skills";
import Slider from "./slider";
import About from "./about";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Achievement />
            <Skills />
            <About />
            <Slider />
            <Portfolio />
            <Project />
        </>
    );
}
