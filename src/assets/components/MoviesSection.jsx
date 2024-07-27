import MoviesSlider from './MoviesSlider';
import '../css/MoviesSection.scss';

const MoviesSection = () => {

    return(
        <>
            <section className="movies-section">
                <MoviesSlider
                title={'Most populars'}
                category={'popular'}
                ></MoviesSlider>
                <MoviesSlider
                title={'Upcoming'}
                category={'upcoming'}
                ></MoviesSlider>
                <MoviesSlider
                title={'Top rated'}
                category={'top_rated'}
                ></MoviesSlider>
                <MoviesSlider
                title={'Trending now'}
                category={'now_playing'}
                ></MoviesSlider>
            </section>
        </>
    )
};

export default MoviesSection;