import React from "react";
import { Container } from "react-bootstrap";

function Skills() {
    return (
            <Container className="skills" id="skills">
                <br></br><br></br><br></br><br></br><br></br>
                <h2>COMPETENCES</h2>
            <div >
                <br></br><br></br>
                <h3 className="comp">Back-End</h3>
              
            <a href="https://www.php.net/" target="_blank">
                <img className="interetpic" src="./logos/php.png"></img>
                
                </a>
                <a href="https://laravel.com/" target="_blank">
            <img className="interetpic" src="./logos/laravel.png"></img>
                 </a>
                <br></br>
                <h3 className="comp">Front-End</h3>
                <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank">
                <img className="interetpic" src="./logos/html.png"></img>
                 </a>
                 <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank">
                 <img className="interetpic" src="./logos/css.png"></img>
                 </a>
                 <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank">
                 <img className="interetpic" src="./logos/js.png"></img>
                 </a>
                 <a href="https://fr.reactjs.org/" target="_blank">
                 <img className="interetpic" src="/logos/react.png"></img>
                 </a>
                <br></br>
                <h3 className="comp">Database</h3>
                <a href="https://www.phpmyadmin.net/" target="_blank">
                <img className="interetpic" src="./logos/myadmin.png"></img>
                 </a>
                 <a href="https://www.mysql.com/fr/" target="_blank">
                 <img className="interetpic" src="./logos/mysql.png"></img>
                 </a>
                <br></br><br></br>
            </div>
            </Container>
        );
    }

export default Skills;