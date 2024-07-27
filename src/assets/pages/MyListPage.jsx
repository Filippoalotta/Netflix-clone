import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import '../css/HeadPages.scss';

const MyListPage = () => {

    // Fetch My List Movies
    const keyApi = 'e32d38ddd3cda877d8de1b4378295217';
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${keyApi}&language=en-US&page=1`;

    const [popMovies, setPopMovies] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const result = data.results;
                setPopMovies(result);
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        };

        fetchData();
    },[]);

    return(
        <>
            <Header></Header>
            <section className="head-pages-container">
                <h1>My List</h1>
                <div className="head-pages-content">
                    {popMovies ? popMovies.map((movie) => (
                        <Card
                        key={movie.id}
                        posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        movieTitle={movie.title}
                        ></Card>
                    ))
                    : <p>Loading ...</p>}
                </div>
            </section>
            <Footer></Footer>
        </>
    )
};

export default MyListPage;