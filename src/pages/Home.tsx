import { Helmet } from 'react-helmet'
import Movies from '../components/Movies'
import HeroSection from '../components/HeroSection'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>MovieHouse - Home</title>
                <meta
                    name="description"
                    content="The home page of the movie collection."
                />
            </Helmet>
            <HeroSection title="The MovieHouse" subtitle="React" />
            <Movies />
        </>
    )
}

export default Home
