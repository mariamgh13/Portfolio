import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";

function Home() {
    
        return (
            <Container className="home" id="home">
                
            <div >
                <svg viewBox="0 0 2025 600">
                    <text x="50%" y="50%" fill="transparent" textAnchor="middle">
                        Mariam Ghukasyan
                    </text>
                </svg>
                <Typewriter className="slogan"
            onInit={(typewriter) => {
                typewriter
                .typeString(
                    '<span ><strong>"Se servir d\'hier pour construire demain."</strong></span>'
                    )
                    .changeCursor("٭")
                    .start();
                }}
                />
                <div className="role">
                Développeur Web
                <img className="imghome" src="photo1.png"></img>
                    </div>
            </div>
            </Container>
        );
            }

export default Home;