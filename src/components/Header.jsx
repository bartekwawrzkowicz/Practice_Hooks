import '../layout/layout.scss';

const Header = () => {

    const text = 'Movie Database';

    return (
        <div className="header">
            <p className="header__text">
                {text}
            </p>
        </div>
    );
}

export default Header;