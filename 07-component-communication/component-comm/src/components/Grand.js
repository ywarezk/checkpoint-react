

import React from 'react';
import PropTypes from 'prop-types';
import HelloWorldContext from '../contexts/hello-world-context';

export default function GrandChild() {
    return (
        <HelloWorldContext.Consumer>
            {
                (value) => <h1>I'm the Grandchild {value.message}</h1>
            }
        </HelloWorldContext.Consumer>
    );
    //return <h1>I'm the Grandchild {this.context.message}</h1>
}

GrandChild.contextType = HelloWorldContext