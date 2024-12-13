export default function Achievement() {
    return (
        <div
            className="px-5 lg:px-24 mx-auto max-w-screen-2xl m-auto"
            id="achievement"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-48">
                <div className="flex flex-col justify-start items-center lg:items-start md:border-r-[1px] md:border-solid md:border-[#0DB760] text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary leading-[10px] md:leading-[48px]">
                        4+
                    </h1>
                    <p className="text-base md:text-[28px] leading-[28px] pt-5 capitalize">
                        Years of experience
                    </p>
                </div>
                <div className="flex flex-col justify-start items-center lg:items-start md:border-r-[1px] md:border-solid md:border-[#0DB760] text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary leading-[10px] md:leading-[48px]">
                        180+
                    </h1>
                    <p className="text-base md:text-[28px] leading-[28px] pt-5 capitalize">
                        Projects completed
                    </p>
                </div>
                <div className="flex flex-col justify-start items-center lg:items-start text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-primary leading-[10px] md:leading-[48px]">
                        100%
                    </h1>
                    <p className="text-base md:text-[28px] leading-[28px] pt-5 capitalize">
                        Clients satisfied
                    </p>
                </div>
            </div>
        </div>
    );
}
