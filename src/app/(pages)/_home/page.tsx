import {
    About,
    Achievement,
    CaseStudy,
    Hero,
    Portfolio,
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
            <Portfolio />
        </>
    );
}
