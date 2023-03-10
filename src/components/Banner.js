import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
    const [movie, setMovie] = useState([]);

    // can remove this from template

    useEffect(() => {
        async function fetchData() {}
        fetchData();
    }, []);

    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `URL("https://image.tmdb.org/t/p/w500${movie?.backdrop_path}")`,
                backgroundPosition: "center",
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.orignal_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">MyList</button>
                </div>
                <h1 className="banner_description" data-cy="banner_desc">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    );
}
//
export default Banner;
