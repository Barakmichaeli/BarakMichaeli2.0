/**
 * Created by barak on 06/09/2017.
 */
import React, {Component} from 'react';

class App extends Component {

    generateGrids() {

        let divs = [];
        divs.push(
            <div className="controller box">
                <h1>Air Traffic Controller</h1>
                <p>
                    <b>Shift supervisor</b> - managing group of 10 to 20 soldiers in a daily manner and conducting emergency
                    situations in the airport.  <br/><br/>
                    Own the <b>highest certification</b>  in the field. <br/><br/>
                    Highly intensive work during the day. <br/><br/>
                    Responsible person for the <b>airport safety</b> and safety events investigation – Communication with
                    outside bodies and reports distribution. <br/><br/>
                    Responsible person for the <b>unit guidance</b> - Implementing new regulations.<br/><br/>

                    <u>Achievements:</u> <br/>
                    o Certificate of excellence for achievements in the safety field. <br/>
                    o Certificate of excellence for improving the guidance in the unit.
                </p>
            </div>);

        divs.push(
            <div className="bartender box">
                <h1>Bartender</h1>
            </div>);

        return divs;
    }


    render() {
        return (
            <div className="experience" id="experience">
                <div className="gifs">
                    <img src="https://media.giphy.com/media/rnPwaTLdFD3wY/giphy.gif" alt="destroy"
                         style={{width: "50%", height: "400px"}}/>
                    <img src="https://media.giphy.com/media/60yTQLK9O7XlS/giphy.gif" alt="destroy"
                         style={{width: "50%", height: "400px"}}/>
                    <img src="https://media.giphy.com/media/r3KcUtMqxyUog/giphy-downsized-large.gif" alt="destroy"
                         style={{width: "50%", height: "400px", marginTop: "-4px"}}/>
                    <img src="https://media.giphy.com/media/a69VzlsvTZxq8/giphy.gif" alt="destroy"
                         style={{width: "50%", height: "400px", marginTop: "-4px"}}/>
                </div>

                <div className="grids">
                    {this.generateGrids()}
                </div>

            </div>
        );
    }
}

export default App;
