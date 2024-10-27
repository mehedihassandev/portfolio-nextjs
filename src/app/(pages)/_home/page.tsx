import About from "../about/page";
import Achievement from "./achievement";
import CaseStudy from "./case-study";
import Hero from "./hero";
import Project from "./project";
import Skills from "./skills";
import Slider from "./slider";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Achievement />
            <Skills />
            <About />
            <Slider />
            <CaseStudy />
            <Project />
        </>
    );
}
