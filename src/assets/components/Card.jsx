import { useState } from 'react';
import '../css/MoviesSlider.scss';
import playIcon from '../icons/play-icon-modal.png';

const Card = ({ posterUrl, movieTitle }) => {

    // CardModalSlider
    const [sliderModal, setSliderModal] = useState(false);

    const displayPlay = () => {
        setSliderModal(true);
    };
    const removePlay = () => {
        setSliderModal(false);
    };

    return(
        <>
            <div className="card" onMouseEnter={displayPlay} onMouseLeave={removePlay} >
                <img src={posterUrl} className='poster' alt={movieTitle} />
                {sliderModal && <img src={playIcon} alt="play icon" className='icon icon-modal' />}
            </div>
        </>
    )
};

export default Card;