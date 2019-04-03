import React from 'react';
import {ReactReduxContext, connect} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import { setMessage } from '../redux/actions';
import PropTypes from 'prop-types';

class Child2 extends React.Component {
    // static contextType = ReactReduxContext;
    static propTypes = {
        myMessage: PropTypes.string.isRequired
    }

    // {message: '....'}
    handleSubmit = ({message}) => {
        // i want to change the redux state
        // store.dispatch(action)
        
        // const store = this.context.store;
        // store.dispatch(setMessage(message));
        this.props.setMessageAction(message);
    }

    render() {
        console.log('Child2');
        return (
            <div>
                <h1>I'm child 2 {this.props.myMessage}</h1>
                <Formik
                    initialValues={ {message: ''} }
                    onSubmit={this.handleSubmit}
                >
                    {
                        () => (
                            <Form>
                                <Field name="message" />
                                <button type="submit">
                                    Submit
                                </button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        );
    }
}

export default connect(
    state => ({
        myMessage: state.message.otherMessage
    }),

    // mapDispatchToProps
    function(dispatch) {
        return {
            setMessageAction: (message) => dispatch(setMessage(message))
        }
    }
)(Child2)