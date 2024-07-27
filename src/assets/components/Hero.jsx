import '../css/Hero.scss';
import playIcon from '../icons/play-icon.png';
import infoIcon from '../icons/info-icon.png';
import { useContext } from 'react';
import { HeroContext } from '../stores/HeroContext';

const Hero = ({ openModal, para }) => {

    // ContextAPI
    const {movie, setMovie} = useContext(HeroContext);

    return(
        <>
        {movie ? <section className="hero" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
                <div className='hero-content'>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview ? para(movie.overview, 20) : <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, neque rerum veritatis minima et maiores?</p>}</p>
                    <div className="buttons-container">
                        <button className='button-one'>
                            <img src={playIcon} className='icon' alt="play icon" />
                            Play
                        </button>
                        <button className='button-two' onClick={openModal}>
                            <img src={infoIcon} className='icon' alt="info icon" />
                            More Info
                        </button>
                    </div>
                </div>
                <div className='age-banner'>
                    +16
                </div>
                <div className="overlay"></div>
            </section> : <p>Loading ...</p>}
        </>
    )
};

export default Hero;