import {
    About,
    Achievement,
    CaseStudy,
    Hero,
    Project,
    Skills,
    Slider,
} from "@app/(pages)/_home";

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
