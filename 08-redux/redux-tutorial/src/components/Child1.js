import React from 'react';
import {ReactReduxContext, connect} from 'react-redux';
import PropTypes from 'prop-types';
import { setDelayedMessage } from '../redux/actions';

class Child1 extends React.Component {
    // static contextType = ReactReduxContext;
    static propTypes = {
        ourMessageName: PropTypes.string.isRequired
    }

    componentDidMount() {
        this.props.delayedMessage('dgsdgsdfg');
    }

    render() {
        console.log('Child1');
        return <h1>I'm child 1 {this.props.ourMessageName}</h1>
    }
}

// someFunctionDecorator(
//    arguments that the function needs)(Child1) => BetterChild1

export default connect(
    // mapStateToProps
    function(state) {
        return {
            ourMessageName: state.message.otherMessage
        }
    },

    function(dispatch) {
        return {
            delayedMessage: (message) => dispatch(setDelayedMessage(message))
        }
    }
)(Child1);

