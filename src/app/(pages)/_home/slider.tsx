export default function Slider() {
    return (
        <section className="w-full overflow-hidden whitespace-nowrap bg-green-500 py-4">
            <div className="marquee flex items-center space-x-8 text-white text-sm md:text-lg font-semibold">
                <span>✦ VISUAL DESIGN EXPERTISE</span>
                <span>✦ USER-INTERFACE</span>
                <span>✦ APP DESIGN</span>
                <span>✦ DESIGN THINKING</span>
                <span>✦ PRODUCT</span>
                {/* <!-- Duplicate content for seamless scrolling --> */}
                <span>✦ VISUAL DESIGN EXPERTISE</span>
                <span>✦ USER-INTERFACE</span>
                <span>✦ APP DESIGN</span>
                <span>✦ DESIGN THINKING</span>
                <span>✦ PRODUCT</span>
                {/* <!-- Duplicate content for seamless scrolling --> */}
                <span>✦ VISUAL DESIGN EXPERTISE</span>
                <span>✦ USER-INTERFACE</span>
                <span>✦ APP DESIGN</span>
                <span>✦ DESIGN THINKING</span>
                <span>✦ PRODUCT</span>
            </div>
        </section>
    );
}
