/**
 * 
 * <FormWrap initialValues={ {email: 'yariv@nerdeez.com', password: ''} } render={
 *  () => <form>....</form>
 * (msg) => <Login message={msg} />
 * } />
 * 
 * 
 * 
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class FormWrap extends React.Component {
    static displayName = 'CPFormWrap';
    
    static propTypes = {
        initialValues: PropTypes.object.isRequired,
        // render: PropTypes.func.isRequired,
        children: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        // init the state with the initialValues from prop
        this.state = {};
        for (let key in props.initialValues) {
            this.state[key] = props.initialValues[key];
        }
    }

    handleUpdate = (event) => {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        })
    }

    render() {
        return (
            <>
                <h1>You are using FormWrap version 1</h1>
                {this.props.children(this.handleUpdate, this.state)}
            </>

        )
    }

}

export function withFormWrap(initialValues) {
    return function(ChildComponent) {
        return class ChildWrapped extends React.Component {
            static displayName = 'CPFormWrap';
        
            static propTypes = {
                initialValues: PropTypes.object.isRequired,
            }
    
            constructor(props) {
                super(props);
    
                // init the state with the initialValues from prop
                this.state = {};
                for (let key in initialValues) {
                    this.state[key] = initialValues[key];
                }
            }
    
            handleUpdate = (event) => {
                const value = event.target.value;
                this.setState({
                    [event.target.name]: value
                })
            }
    
            render() {
                return <ChildComponent values={this.state} onChange={this.handleUpdate}  />
            }
        }
    }
}