import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="about" id="about">
      <br></br>
      <br></br>
      <br></br>
    
      <br></br>
      <div >
        <h2>A PROPOS DE MOI</h2>
        <Row>
          <Col>
            <br></br>
            <br></br>
            <p>Nom: Mariam Ghukasyan</p>
            <p>Date de naissance: 13 mai 1995</p>
            <p>Email: mariam1.ghukasyan@epitech.eu</p>
            <p>Téléphone: 06 20 80 63 26</p>
            <p>Adresse: 1 Rue Guillaume Apollinaire, 94800 VILLEJUIF</p>
           <div className="interet">

            <img className="interetpic" src="./logos/foot.png"></img>
            <img className="interetpic" src="./logos/livre.png"></img>
            <img className="interetpic" src="./logos/danse.png"></img>
            <img className="interetpic" src="./logos/dessin.png"></img>
           </div>
          </Col>
          <Col>
          <br></br>
      <br></br>
            <div className="descrip">
              " Méthodique et rigoureuse... J'ai depuis toujours été attiré par
              l'informatique et ses nombreux dérivés. Travailleuse depuis mes
              18ans, j'ai pu rejoindre Epitech Paris en Novembre 2020 pour la
              formation WAC. C'est une formation de 2ans, très intensive,
              donnant lieu à une multitudes de projets dans le but de devenir
              développeur Full-Stack, et je suis déterminée à atteindre cet
              objectif. "<img className="imgabout" src="photo2.png"></img>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;
