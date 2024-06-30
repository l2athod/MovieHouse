import { Helmet } from 'react-helmet'
import HeroSection from '../components/HeroSection'

const About = () => {
    return (
        <>
            <Helmet>
                <title>MovieHouse - About</title>
                <meta
                    name="description"
                    content="The about page of the movie collection."
                />
            </Helmet>
            <HeroSection title="About MovieHouse" subtitle="Who We Are" />

            <section className="container mx-auto flex max-w-screen-lg flex-col gap-6 py-12 text-xl leading-loose">
                <p>
                    FilmVault is a comprehensive digital library designed for
                    movie enthusiasts, offering an extensive collection of
                    thousands of films from various genres, eras, and cultures.
                    Whether you're a fan of timeless classics, contemporary
                    blockbusters, or indie gems, FilmVault perovides a seamless
                    browsing experience with its intuitive interface and robust
                    search capabilities. Discover hidden treasures, stay updated
                    with the latest releases, and delve into curated collections
                    that cater to every cinematic taste.
                </p>

                <p>
                    Beyond mere streaming, FilmVault enhances your viewing
                    experience with insightful movie reviews, behind-the-scenes
                    content, and personalized recommendations based on your
                    viewing history. Engage with a vibrant community of fellow
                    film lovers through interactive features like discussion
                    forums, watch parties, and user-generated lists. With
                    FilmVault, your passion for movies is not just indulged, but
                    celebrated, making it the ultimate destination for anyone
                    who appreciates the magic of cinema.
                </p>
            </section>
        </>
    )
}

export default About
