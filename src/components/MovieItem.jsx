import { useContext } from 'react';
import { MainContext } from '../context/MainContext';

const MovieItem = () => {

    const { movieList } = useContext(MainContext);

    return (
        movieList.map(item => {
            return (
                <div className="item" key={item.id}>
                    <p className="item__title">
                        {item.name}
                    </p>
                    <div className="item__image">
                        <img src={item.image.medium} alt="img" />
                    </div>
                    <div className="item__premiere">
                        premiered: {item.premiered}
                    </div>
                    <div className="item__rating">
                        rating: {item.rating.average}
                    </div>
                    <a href={item.url}>read more...</a>
                </div>
            )

        }))
};

export default MovieItem;