import { useState } from 'react';
import '../css/MovieModal.scss';
import playIcon from '../icons/play-icon-modal.png';

const ModalCard = ({ backdropMC, titleMC, languageMC}) => {

    // Play button
    const [displayPlayBtn, setDisplayPlayBtn] = useState(false);

    const handleDisplayPlayBtn = () => {
        setDisplayPlayBtn(true);
    };

    const handleRemovePlayBtn = () => {
        setDisplayPlayBtn(false);
    };

    return(
        <>
            <div className="modal-card" onMouseEnter={handleDisplayPlayBtn} onMouseLeave={handleRemovePlayBtn}>
                <img src={backdropMC} alt={titleMC} className='bdMC' />
                {displayPlayBtn && <img src={playIcon} alt="play icon" className='icon icon-modal' />}
                <div className="modal-card-content">
                    <h3>{titleMC}</h3>
                    <div className='details-container'>
                        <span className='compatibility'>87% compatible</span>
                        <span className='detail'>{languageMC}</span>
                        <span className='detail'>HD</span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ModalCard;