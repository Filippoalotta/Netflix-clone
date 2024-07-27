import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import '../css/HeadPages.scss';

const SeriesPage = () => {

    // Fetch TvSeries
    const keyApi = 'e32d38ddd3cda877d8de1b4378295217';
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${keyApi}&language=en-US&page=1`;

    const [series, setSeries] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                const result = data.results;
                setSeries(result);
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
                <h1>Tv Series</h1>
                <div className="head-pages-content">
                    {series ? series.map((serie) => (
                        <Card
                        key={serie.id}
                        posterUrl={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                        movieTitle={serie.name}
                        ></Card>
                    ))
                    : <p>Loading ...</p>}
                </div>
            </section>
            <Footer></Footer>
        </>
    )
};

export default SeriesPage;