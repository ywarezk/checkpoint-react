/**
 * login form component
 * 
 * <Login />
 */

 import React from 'react';

export default class Login extends React.Component {
    state = {
        email: '',
        stamNumber: 10
    }

    // constructor(props) {
    //     super(props);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    updateEmail = (event) => {
        const value = event.target.value;
        this.setState({
            email: value
        });
    }

    componentDidMount() {
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.email);
        // console.log('submitting');
        // alert(`hello submitting the form ${this.props.stamNumber}`);

        // this.setState({
        //     email: 'yariv@nerdeez.com',            
        // });

        // this.setState(function(prevState) {
        //     return {
        //         email: 'yariv@nerdeez.com',            
        //         stamNumber: prevState.stamNumber+1
        //     }
        // })


    }

    render() {
        const myNumber = this.props.stamNumber
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{myNumber}</h1>
                <h5>
                    {this.state.email} {this.state.stamNumber}
                </h5>
                <input value={this.state.email} placeholder="email" onChange={this.updateEmail} /> <br/>
                <button type="submit">submit</button>
            </form>
        )
    }
}