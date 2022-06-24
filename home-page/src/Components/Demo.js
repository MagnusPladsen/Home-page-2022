import React from 'react';
import { useEffect } from 'react';
import '../Css/Demo.css';

const id = ''

const apiUrl = 'https://api.spotify.com/v1/artists/{id}/top-tracks'

const apiKey =  'BQDEDcHnXMjg9dtdSNwGB_t8NSJQY7JH_whH4Q66Fe5CbnPYjujkHhVjtFqZp1VyFwY5q68yl0Sk8AmmietaEfHZNVMAymttiUxCIQrzAucMPDJulL-cGSfDijUD6mgFJpWt_NfDTJKxb-tzn9Cmk7w8U6DqO4nFn-XktexFlvwK6A'

export default function Demo() {

   /*  useEffect(() => {
        function fetchArtist();
    }
    , [])
 */
    return (
        <div className="demo">
            <header className="demo-header">
                <h1 className="demo-h1">SPOTIFY DEMO</h1>
            </header>
            <section className="demo-section">
                <h2>SeedTheEmcee</h2>
                <iframe src="https://open.spotify.com/embed/artist/1i60jNx9tWYWk0maS1UDsL?utm_source=generator" />
            </section>
        </div>
    );
}