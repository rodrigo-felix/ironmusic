import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


class Home extends React.Component {

    state = {
        busca: "",
    }

    handleInput = (ev) => {
        let value = ev.target.value
        this.setState({
            busca: value
        })
    }


    render = () => {


        return (
            <center>
                <div className="container">
                    <h2 className="text-center"style={{ paddingTop: "3%" }}>
                        Home
                    </h2>
                    <div className="card-search card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Busca</h5>


                            <input type="email" className="form-control" id="search-artist" placeholder="Busque pelo artista" onChange={this.handleInput} value={this.state.busca} /><br></br>
                            <Link to={`/list-artist/${this.state.busca}`} >
                                <button type="submit" className="btn btn-primary">Buscar e ouvir </button>
                            </Link>



                        </div>
                    </div>

                    <carousel className="week">
                        <h1 style={{ textAlign: "center", }}>Week-Session</h1>

                        <div className="card-group">
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWiP-IT8QC8QPmBTOIdofQUrWI7bd2fLh0sQ" className="card-img-top" alt="Minha Supermix"></img>
                                <div className="card-body" >
                                    <h5 className="card-title">Churrasco</h5>
                                </div>
                            </div>
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzKImWuHX_M1gLp57gUkhba5vawIHm4YIIg" className="card-img-top" alt="Mixtapes"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Relaxar</h5>
                                </div>

                            </div>
                            <div className="card">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMeeFQS0DV0n99GIaGhrQHtQ0ZDyToX2lpA" className="card-img-top" alt="Hits de Hoje"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Jantar Romântico</h5>
                                </div>
                            </div>
                        </div>
                    </carousel> <br></br><br></br>
                </div>
            </center>
        )

    }








}
export default Home;