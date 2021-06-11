import React from "react";
import emailjs from 'emailjs-com';
import { Container } from "react-bootstrap";

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'portfolio', e.target, 'user_bgOaFbZJ2bm8WTH5aVX9J')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <Container className="contact" id="contact">
        <div >
        <br></br>
        
        <br></br>
       
        <br></br>
        <br></br>
            <h2 className="titre">ME CONTACTER</h2>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Nom" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Adresse email" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Numéro de téléphone" name="phone"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Entreprise" name="company"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Sujet" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="message" cols="30" rows="8" placeholder="Votre message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-dark btn-lg" value="Envoyer"></input>
                        </div>
                    </div>
                </form>
            </div>
            <br></br><br></br>
            <div id="social">
            <a href="tel:0620806326" class="phone"><i className="fa fa-phone fa-3x" aria-hidden="true"></i></a>
            <a href="mailto:mariam.emploi75@gmail.com" class="mail"><i className="fa fa-envelope fa-3x" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/mariam-ghukasyan-9484aa206/" target="_blank" class="linkedin"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
            </div>
        </div>
        </Container>
    )
}