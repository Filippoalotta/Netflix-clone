import '../css/MovieModal.scss';
import playIcon from '../icons/play-icon.png';
import likeIcon from '../icons/like-icon-modal.png';
import xIcon from '../icons/x-icon-white.png';
import ModalCard from './ModalCard';
import { useEffect, useState, useContext } from 'react';
import { HeroContext } from '../stores/HeroContext';

const MovieModal = ({ closeModal, para }) => {

    // ContextAPI
    const {movie, setMovie} = useContext(HeroContext);

    // Api cards modal movies
    const keyApi = 'e32d38ddd3cda877d8de1b4378295217';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${keyApi}&language=it-IT&page=1`;

    const [moviesModal, setMoviesModal] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setMoviesModal(data.results);
                console.log(data.results)
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        };

        fetchData();
    },[]);

    return(
        <>
            <div className="modal-window">
                <div className='image-modal'>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className='thumb' />
                    <img src={xIcon} onClick={closeModal} alt="x icon" className='icon icon-modal' />
                    <div className="overlay"></div>
                </div>
                <div className="modal-content">
                    <h1>{movie.title}</h1>
                    <div className="first-icons">
                        <button className='button-one'>
                            <img src={playIcon} className='icon' alt="play icon" />
                            Play
                        </button>
                        <img src={xIcon} alt="x icon" className='icon icon-modal x' />
                        <img src={likeIcon} alt="like icon" className='icon icon-modal'/>
                    </div>
                    <div className='details-container'>
                        <span className='compatibility'>87% compatible</span>
                        <span className='detail'>16+</span>
                        <span className='detail'>{movie.original_language}</span>
                        <span className='detail'>hd</span>
                    </div>
                    <div className="plot-and-genres">
                        <p className='plot'>{movie.overview ? para(movie.overview, 20) : <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, neque rerum veritatis minima et maiores?</p>}</p>
                        <p className='language'><span className='gray'>Language: </span>{movie.original_language}</p>
                    </div>
                </div>
                <div className="modal-cards-container">
                    <h2>Other similar titles</h2>
                    <div className="modal-cards-content-container">
                        {moviesModal ? moviesModal.map((movie) => (
                            <ModalCard
                            key={movie.id}
                            backdropMC={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            titleMC={movie.title}
                            languageMC={movie.original_language}
                            ></ModalCard>
                        )) : <p>Loading...</p>}
                    </div>
                </div>
            </div>
        </>
    )
};

export default MovieModal;