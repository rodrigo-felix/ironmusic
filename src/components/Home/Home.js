import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <h1 className="text-center" style={ {paddingTop: "30%" }}>
                Home
            </h1>
            <div className="card-search card text-center">
                <div class="card-body">
                    <h5 class="card-title">Busca</h5>
                    <form>
                        <input type="email" class="form-control" id="search-artist" placeholder="Busque pelo artista :)"></input><br></br>
                        <button type="submit" class="btn btn-primary">Buscar e ouvir</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home;