import React, { Component } from 'react'
import IconHeader from './IconHeader'
import { Card, Icon, Image, Divider, Container } from 'semantic-ui-react'
import {Animated} from "react-animated-css";


const PlayerCard = (props) => {
        return(
            <Card color='pink'>
                    <Card.Content>
                        <Card.Header>{props.name}</Card.Header>
                        <Divider />
                        <Card.Meta>Arrest Date: {props.date}</Card.Meta>
                        <Card.Meta>Position: {props.positionName}</Card.Meta>
                        <Card.Description>{props.description}</Card.Description>
                    </Card.Content>
            </Card>
        )   
}

export default PlayerCard