const HeroSection = ({
    title,
    subtitle
}: {
    title: string
    subtitle: string
}) => {
    return (
        <section className="flex w-full justify-center bg-gradient-to-l from-gray-200 via-white to-gray-100 py-16">
            <h2 className="flex w-full flex-col text-center text-3xl font-black">
                <span className="text-2xl uppercase text-black">
                    {subtitle}
                </span>
                <span className="animate-gradient relative z-10 flex self-center bg-gradient-to-l from-black via-gray-500 to-black bg-clip-text text-center text-5xl font-black text-transparent md:text-6xl lg:text-8xl">
                    {title}
                </span>
            </h2>
        </section>
    )
}

export default HeroSection
