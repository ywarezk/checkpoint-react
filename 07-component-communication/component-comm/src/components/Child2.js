import React from 'react';
import messageService from '../services/message.service';

export default class Child2 extends React.Component {
    state = {
        message: ''
    }

    componentDidMount() {
        messageService.messageStream.subscribe((message) => {
            this.setState({
                message
            })
        })
    }

    render() {
        return (
            <>
                <h1 className="color">I'm the child2 {this.state.message}</h1>
            </>
        )
    }
}