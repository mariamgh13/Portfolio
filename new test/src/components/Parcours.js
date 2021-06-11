import React from "react";
import { Container } from "react-bootstrap";

function Parcours() {
    return (
      <Container className="parcours" id="parcours">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
 <h2>Parcours</h2>
 <div>

      <div> 
      <a href="resume.pdf" className="cv" target="_blank">VOIR MON CV</a>
      </div>
      <div>
      <a href="resume.pdf" className="cv" download>TÉLECHARGER MON CV</a>
      </div>
 </div>
      </Container>
    );
  }


export default Parcours;
