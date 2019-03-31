

import React from 'react';
import GrandChild from './Grand';
import PropTypes from 'prop-types';
import HelloWorldContext from '../contexts/hello-world-context';
import messageService from '../services/message.service';

export default class Child extends React.Component {
    static contextType = HelloWorldContext

    componentDidMount() {
        setTimeout(() => {
            messageService.messageStream.next('hello from child1');
        }, 1000)
    }

    render() {
        return (
            <>
                <h1 className="color">I'm the child {this.context.message}</h1>
                <GrandChild />
            </>
        )
    }
}