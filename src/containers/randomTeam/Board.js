import React, { Component } from 'react';
import { Divider, Card, Container, Dropdown } from 'semantic-ui-react';
import PlayerCard from './PlayerCard';

class PlayerCrimes extends Component {
    constructor(props) {
        super(props)
    } 
    render() {
        const playerList = this.props.crimesByTeam.map((crime, index) => (
            <PlayerCard 
                key={index}
                division={crime.Team_Conference_Division}
                name={crime.Name}
                positionName={crime.Position_name}
                description={crime.Description}
                date={crime.Date}
                sinceArrest={crime.DaysSince}
            /> 
        ))
        return playerList
    }
}

const Board = (props) => {
        return (
            <div>
            <Divider />
            <Container>
                <Card.Group itemsPerRow={3}>
                    <PlayerCrimes crimesByTeam={props.crimesByTeam}/>
                </Card.Group>
            </Container>
            </div>
        )
    }

// const Dropdown = (props) => {
//     return (
//         <div>
//             <Dropdown placeholder='Select NFL Team' />
//         </div>
//     )
// }

export default Board




