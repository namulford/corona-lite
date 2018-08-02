import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react'

class IconHeader extends Component {
    render() {
        return (
            <Header as="h1" icon textAlign='center'>
                <Icon color='pink' name='football ball' />
                NFL Player Arrests
            </Header> 
        )
    }
}

export default IconHeader