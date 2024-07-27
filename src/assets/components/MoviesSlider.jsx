import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/MoviesSlider.scss';
import { useEffect, useState } from "react";
import Card from './Card';
import Slider from "react-slick";

const MoviesSlider = ({ title, category }) => {

    // Api
    const keyApi = 'e32d38ddd3cda877d8de1b4378295217';
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${keyApi}&language=it-IT&page=1`;

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        };

        fetchData();
    },[]);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 845,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 435,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    };

    return(
        <>
            <div className="row">
                <h2>{title}</h2>
                <Slider {...settings}>
                    {movies ? movies.map((movie) => (
                        <Card
                        key={movie.id}
                        posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        movieTitle={movie.title}
                        ></Card>
                    )) : <p>Loading...</p>}
                </Slider>
            </div>
        </>
    )
};

export default MoviesSlider;