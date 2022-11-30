import React from "react";
import { Link } from "react-router-dom";
import m from '../../assets/images/m.png'
import "./index.scss"
import AnimatedLetters from '../Animatedletters'
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    const nameArray = ['i', 'r', 'a', 'j']
    const jobArray = [
        'A',
        'p',
        'p',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])




    return (
        <>
            <div className=" container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={m} alt="developer" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />


                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />

                    </h1>
                    <h2>
                        Frontend Developer /  PenTester / Ui Designer
                    </h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>


                </div>
                <Logo />

            </div >
            <Loader type="pacman" />
        </>
    );



}


export default Home