/**
 * Created by barak on 06/09/2017.
 */
/**
 * Created by barak on 05/09/2017.
 */
import React, {Component} from 'react';


export default class Projects extends Component {

    render() {
        return (
            <div className="projects" id="projects">
                <h1><u>Personal Projects</u></h1>
                <h3>I am proud to show you some of my projects, this is what i love to do.</h3>

                <div className="radioStream">
                    <div className="radio-info">
                        <h1>Radio Streaming</h1>
                        <button><a href="https://radiostream.herokuapp.com/" target="_blank">VIEW PROJECT</a></button>
                    </div>
                </div>
                <hr/>
                <div className="dashboard">
                    <div className="dash-info">
                        <h1>Dashboard</h1>
                        <button><a href="https://spa-dashboard-example.herokuapp.com/" target="_blank">VIEW PROJECT</a>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}