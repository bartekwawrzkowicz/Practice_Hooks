import { useContext } from 'react';
import { MainContext } from '../context/MainContext';

import loadingGif from '../images/loading.gif';

const LoadingMessage = () => {

    const { isLoading } = useContext(MainContext);

    return (
        isLoading ? (
            <>
                <img className="hero__image" src={loadingGif} alt="" />
                <p className="hero__image-text">
                    loading data
                    </p>
            </>
        ) : null
    );
}

export default LoadingMessage;