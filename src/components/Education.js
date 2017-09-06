/**
 * Created by barak on 05/09/2017.
 */
import React, {Component} from 'react';


export default class Experience extends Component {

    generateGrids() {
        let arr = ["Advanced Java","Operating Systems", "Algorithems" , "Machine Learning",
            "Data Structures", "Web Development", "C Programming"];
        return arr.map((str) => {
            return (
                <div className="box">
                    <h1>{str}</h1>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="education" id="education">
                <div className="education-header">
                    <h1>Computer science IDC Hertzliya (2015-Today)</h1>
                </div>
                <div className="grids">
                    {this.generateGrids()}
                </div>
            </div>
        )
    }
}