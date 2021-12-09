import LoadingMessage from '../components/LoadingMessage';

import '../layout/layout.scss';

const Hero = () => {
    return (
        <div className="hero">
            <p className="hero__text">
                Hero
            </p>
            <LoadingMessage />
        </div>
    );
}

export default Hero;