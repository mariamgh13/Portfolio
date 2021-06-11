import React from "react";
import { Container } from "react-bootstrap";


function Portfolio () {
        return (

            <Container className="portfolio" id="portfolio">
 <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
                <h2>PORTFOLIO</h2>
            <div >
              
                <div id="quiz" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#quiz" data-slide-to="0" className="active"></li>
                        <li data-target="#quiz" data-slide-to="1"></li>
                        <li data-target="#quiz" data-slide-to="2"></li>
                        <li data-target="#quiz" data-slide-to="3"></li>
                        <li data-target="#quiz" data-slide-to="4"></li>
                       
                    </ol>
                    <div className="carousel-inner">
                        <a className="carousel-control-prev" href="#quiz" role="button" data-slide="prev">
                            <div id="arrow"><i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i></div>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#quiz" role="button" data-slide="next">
                            <div id="arrow"><i className="fa fa-chevron-right fa-2x" aria-hidden="true"></i></div>
                            <span className="sr-only">Next</span>
                        </a>
                        <div className="carousel-item active">
                        <img className="interetpic" src="./laravel/accueil.jpg" className="d-block w-100" alt="First slide"></img>

                        </div>
                        <div className="carousel-item">
                        <img className="interetpic" src="./laravel/annonces.jpg" className="d-block w-100" alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                        <img className="interetpic" src="./laravel/login.jpg" className="d-block w-100" alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                        <img className="interetpic" src="./laravel/mdp_oublié.jpg" className="d-block w-100" alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                        <img className="interetpic" src="./laravel/page home.jpg" className="d-block w-100" alt="First slide"></img>
                        </div>
                    </div>
                </div>
                
            </div>
            </Container>
        );
    }


export default Portfolio;