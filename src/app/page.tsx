import About from "./(pages)/_home/about";
import Achievement from "./(pages)/_home/achievement";
import Hero from "./(pages)/_home/hero";
import Skills from "./(pages)/_home/skills";

export default function Home() {
    return (
        <>
            <Hero />
            <Achievement />
            <Skills />
            <About />
        </>
    );
}
