import LoadingMessage from '../components/LoadingMessage';
import MovieList from '../components/MovieList';

import '../layout/layout.scss';

const Hero = () => {
    return (
        <div className="hero">
            <MovieList />
            <LoadingMessage />
        </div>
    );
}

export default Hero;