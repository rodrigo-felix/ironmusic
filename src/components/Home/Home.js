import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <center>
            <div className="container">
                <h1 className="text-center" style={{ paddingTop: "15%" }}>
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

                <carousel className="week" >
                    <h1 style={{ textAlign: "center", }}>Week-Session</h1>

                    <div class="card-group">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWiP-IT8QC8QPmBTOIdofQUrWI7bd2fLh0sQ" class="card-img-top" alt="Minha Supermix"></img>
                            <div class="card-body" >
                                <h5 class="card-title">Crurrasco</h5>
                            </div>

                        </div>
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzKImWuHX_M1gLp57gUkhba5vawIHm4YIIg" class="card-img-top" alt="Mixtapes"></img>
                            <div class="card-body">
                                <h5 class="card-title">Relaxar</h5>
                            </div>

                        </div>
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMeeFQS0DV0n99GIaGhrQHtQ0ZDyToX2lpA" class="card-img-top" alt="Hits de Hoje"></img>
                            <div class="card-body">
                                <h5 class="card-title">Jantar Romantico</h5>
                            </div>
                        </div>
                    </div>
                </carousel>
            </div>
        </center>




    )
}
export default Home;