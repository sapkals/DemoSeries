import TitleType from './TitleType'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <TitleType type="MOVIES" helpText='Popular Movies' link="/movies" />
            <TitleType type="SERIES" helpText='Popular Series' link="/series" />
        </div>
    )
}

export default Home