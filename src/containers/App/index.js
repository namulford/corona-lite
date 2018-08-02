import React, { Component } from 'react';
import Randomizer from 'react-randomizer';
import Random from '../randomTeam';
import nflTeams from '../randomTeam/nflTeams';


class App extends Component {
    render() {
        return(
            <div className="App">
                <Random teams={nflTeams}/>
            </div>
        )
    }
}

export default App;