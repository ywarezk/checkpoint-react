

import React from 'react';

export default class UncontrolledLogin extends React.Component {
    static displayName = 'CPUncontrolledLogin';
    constructor(props) {
        super(props);
        
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    handleSubmit = () => {
        const inputDomElementMail = this.emailRef.current;
        const inputDomElementPassword = this.passwordRef.current;
    }

    render() {
        return (
            <form noValidate onSubmit={this.handleSubmit}>
                <input
                    ref={this.emailRef}
                    name="email"
                    type="email" />
                <input 
                    ref={this.passwordRef}
                    name="password"
                    type="password" required /> <br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}