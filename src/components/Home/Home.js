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
                <h1 style={{ textAlign: "center",  }}>Week-Session</h1>

                <div class="card-group">
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1559060680-36abfac01944?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fGZlc3RpdmFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="Minha Supermix"></img>
                        <div class="card-body">
                            <h5 class="card-title">Minha Supermix</h5>
                        </div>

                    </div>
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZlc3RpdmFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="Mixtapes"></img>
                        <div class="card-body">
                            <h5 class="card-title">Mixtapes</h5>
                        </div>

                    </div>
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZlc3RpdmFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="Hits de Hoje"></img>
                        <div class="card-body">
                            <h5 class="card-title">Hits de Hoje</h5>
                        </div>
                    </div>
                </div>
            </carousel>
        </div>

        </center>
       



    )
}
export default Home;