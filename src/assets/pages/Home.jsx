import Header from "../components/Header";
import Hero from "../components/Hero";
import MoviesSection from "../components/MoviesSection";
import Footer from "../components/Footer";
import MovieModal from "../components/MovieModal";
import { useEffect, useState } from 'react';
import { HeroContext } from '../stores/HeroContext';

const Home = () => {

    // ToTop
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    // Api back movie
    const keyApi = 'e32d38ddd3cda877d8de1b4378295217';
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${keyApi}&language=en-IT&page=1`;

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const movies = data.results;
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                setMovie(randomMovie);
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        };

        fetchData();
    },[]);

    // ParagMax
    const handleParag = (text, max) => {
        const words = text.split(' ');
        if(words.length > max){
             return words.slice(0, max).join(' ') + '...';
        }
        return words
     };

    // Modal window
    const [modalOpen, setModalOpen] = useState(false);
    const [overlay, setOverlay] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
        setOverlay(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
        setOverlay(false);
    };

    useEffect(() => {
        if(modalOpen){
            document.body.style.overflow = 'hidden';
            document.body.classList.add('black');
        } else {
            document.body.style.overflow = 'auto';
            document.body.classList.remove('black');
        }
    }, [modalOpen]);

    return(
        <HeroContext.Provider value={{movie, setMovie}}>
            <Header></Header>
            <Hero 
            openModal={handleOpenModal}
            para={handleParag}
            ></Hero>
            {modalOpen && <MovieModal 
            closeModal={handleCloseModal}
            para={handleParag}
            ></MovieModal>}
            <MoviesSection></MoviesSection>
            <Footer></Footer>
            {overlay && <div className="overlay-home"></div>}
        </HeroContext.Provider>
    );
};

export default Home;