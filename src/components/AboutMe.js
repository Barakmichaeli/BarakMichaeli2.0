/**
 * Created by barak on 05/09/2017.
 */
import React, {Component} from 'react';


export default class AboutMe extends Component {


    render() {
        return (
            <div className="aboutme" id="aboutme">
                <div className="header-text">
                    <h1>Barak Michaeli</h1>
                    <h3> Computer science student IDC | barak6546@gmail.com</h3>
                </div>
                <section className="info">
                    Welcome to my personal web site!
                    My name is Barak Michaeli and I'm 25 years old computer science student from Modiin. <br/>
                    Nowdays Im starting my last year in the academy and looking for my first position as a developer.
                    <br/>
                    I made this website in order to give you, the employees, information about my experience and my
                    passions
                    <br/>
                    and also to present some of my favorite projects. <br/>
                    You are more then welcome to click on any link above in the header and view it.
                </section>
                <div className="social-links">

                    <a href="https://www.linkedin.com/in/barak-michaeli-9bbb0a115/">
                        <img src={require('../images/linkedin-logo.png')} alt="linkedin"/>
                    </a>


                    <a href="https://www.facebook.com/Barak.mii">
                        <img style={{marginLeft: "10px"}} src={require('../images/facebook-square-social-logo.png')}
                             alt="facebook"/>
                    </a>

                    <a href="https://github.com/Barakmichaeli">
                        <img style={{marginLeft: "10px"}} src={require('../images/github.png')} alt="github"/>
                    </a>
                </div>
            </div>
        )
    }
}