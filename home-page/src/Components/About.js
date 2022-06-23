import '../Css/About.css';
import React from 'react';
import { Link } from 'react-router-dom';
import imageMe from '../Images/me.svg';
import imageSales from '../Images/sales.svg';
import imageDesign from '../Images/design.svg';
import imageSchool from '../Images/school.svg';
import imageSchool2 from '../Images/school2.svg';
import imageSchool3 from '../Images/school3.svg';
import imageTrainee from '../Images/trainee.svg';
import imageTrainee2 from '../Images/trainee2.svg';
import imageTrainee3 from '../Images/trainee3.svg';
import { useEffect } from 'react';

export const codecademy = <a className="link" target="_blank" href="https://www.codecademy.com/profiles/MagnusPladsen">Codecademy</a>

export const abaris = <a className="link" target="_blank" href="https://www.abaris.no/">Abaris Consulting AS.</a>

export const noroff = <a className="link" target="_blank" href="https://www.noroff.no/">Noroff</a>

export const power = <a className="link" target="_blank" href="https://www.power.no/">Power</a>

export default function About() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about">
            <section className="about-section">
                <h2>MYSELF</h2>
                <div className="grid-container">
                    <div className="container">
                        <img src={imageMe} alt="illustration of me" className="illustrations" />
                        <p>My name is Magnus Pladsen. I am 25 years old and currently live in Lillehammer, Norway.</p>
                    </div>
                    <div className="container">
                        <img src={imageSales} alt="illustration of sales" className="illustrations" />
                        <p>I have recently worked a few years as a sales & department manager at {power}.</p>
                    </div>
                    <div className="container">
                        <img src={imageDesign} alt="illustration of design" className="illustrations" />
                        <p>I have always been extremely interested in computers and programming.</p>
                    </div>
                </div>
            </section>
            <section className="app-section">
                <h2 className="header-secondary">STUDENT</h2>
                <div className="grid-container">
                    <div className="container">
                        <img src={imageSchool} alt="illustration of school" className="illustrations" />
                        <p>I am finally chasing my dream! Now i am studying Frontend development at {noroff}.</p>
                    </div>
                    <div className="container">
                        <img src={imageSchool2} alt="illustration of school" className="illustrations" />
                        <p>The programme is remote and all the lessons are in English.</p>
                    </div>
                    <div className="container">
                        <img src={imageSchool3} alt="illustration of school" className="illustrations" />
                        <p>I started the programme in March of 2022 and i will be done in March 2024.</p>
                    </div>
                </div>
            </section>
            <section className="app-section">
                <h2 className="header-secondary">TRAINEE</h2>
                <div className="grid-container">
                    <div className="container">
                        <img src={imageTrainee} alt="illustration of trainee" className="illustrations" />
                        <p>I was extremely lucky when i got the opportunity to work as a junior developer part time at {abaris}</p>
                    </div>
                    <div className="container">
                        <img src={imageTrainee3} alt="illustration of trainee" className="illustrations" />
                        <p>I have used {codecademy} alot to learn about JavaScript, TypeScript, React and Redux.</p>
                    </div>
                    <div className="container">
                        <img src={imageTrainee2} alt="illustration of trainee" className="illustrations" />
                        <p>Now im using most of my time practicing Frontend programming.</p>
                    </div>
                </div>
            </section>
            <footer>
                    <a href="#top" className="cta">TO THE TOP</a>
            </footer>
        </div>
    );
}