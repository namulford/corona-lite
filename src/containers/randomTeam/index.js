import React, { Component } from 'react'
import Randomizer from 'react-randomizer'
import nflTeams from '../randomTeam/nflTeams'
import axios from 'axios'
import Board from './Board'
import { Button, Icon, Dropdown, Segment, Dimmer, Loader } from 'semantic-ui-react'
import IconHeader from './IconHeader'
import {Animated} from 'react-animated-css'


const teams = nflTeams.map(team => {
    return {
        key: team.Team_name,
        value: team.Team,
        text: team.Team_preffered_name
    }
})

class Random extends Component {
    constructor() {
        super()
        this.state = {
            crime: '',
            shortTeam: '',
            theTeam: '',
            results: [],
            value: '',
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    renderCrime () {
        if(this.state.crime) { 
            return (
                <h1>
                    {this.state.crime[0].Description}
                </h1>
            )
        } else {
            return null
        }
    }
    

    handleChange(e, { value }) {
        this.setState({
            value
        })
    };

    handleSubmit(event, team) {
        this.setState({loading: true})
        setTimeout(() => {
            axios.get(`//NflArrest.com/api/v1/team/arrests/${this.state.value}`)
            .then((crimes) => {
                console.log(crimes.data)
                this.setState({
                    crime: crimes.data,
                    loading: false
                })
            })
        }, 1000);
        event.preventDefault();
        event.stopPropagation();
      };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="Random" align='center'>
                    <h1 align='center'>Welcome to the NFL Team Randomizer!!</h1>
                    <IconHeader />
                    <h2>Select an NFL team to view player arrests</h2>
                    <div>
                        <Dropdown
                            closeOnChange={true}
                            value={this.state.value}
                            selection
                            options={ teams }
                            onChange={this.handleChange}
                        />
                    </div>
                <input type="submit" value="Enter" />
                </div>
                <div>
                    {this.state.loading
                    ? <Segment style={{height: 400}}>
                        <Dimmer active inverted>
                            <Loader size='huge'>Loading</Loader>
                        </Dimmer>
                    </Segment>
                    : (this.state.crime.length > 0 && !this.state.isVisible
                    ? <Animated animation="bounceInLeft" animationOut="flipOutY">
                        <Board crimesByTeam={this.state.crime}/>
                    </Animated>
                    : null)
                    }
                </div>
            </form>
        );
    }
}

export default Random;