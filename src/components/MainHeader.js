/**
 * Created by barak on 05/09/2017.
 */
import React, {Component} from 'react';


export default class MainHeader extends Component {

    render() {
        return (
            <header style={style.header}>
                <a href="#barak">
                    <h2 style={{float: "left", margin: "8px"}}>
                        Barak Michaeli</h2>
                </a>
                <div className="links">
                    <ul>
                        <li><a href="#aboutme">About me</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href={require('../Barak michaeli resume.docx')} download>Download CV</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}


let style = {
    header: {
        height: "55px",
        top: "0px",
        position: "fixed",
        width: "100%",
        background: "linear-gradient(to right ,white ,#EFEFF1)",
        zIndex: "10"
    },
};