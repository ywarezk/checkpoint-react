/**
 * component with form for login with email and password
 */

import React from 'react';
import FormWrap, {withFormWrap} from '../FormWrap/FormWrap';

class Login extends React.Component {
    static displayName = 'CPLogin';
    // state = {
    //     email: 'yariv@nerdeez.com',
    //     password: ''
    // }

    // updateEmail = (event) => {
    //     this.setState({
    //         email: event.target.value
    //     });
    // }

    // updatePassword = (event) => {
    //     this.setState({
    //         password: event.target.value
    //     });
    // }

    // handleUpdate = (event) => {
    //     const emailOrPassword = event.target.value;
    //     this.setState({
    //         [event.target.name]: emailOrPassword
    //     })
    // }

    render() {
    //     return (
    //         <FormWrap initialValues={ {
    //             email: 'yariv@nerdeez.com', 
    //             password: ''
    //         } } render={(changeHandler, values) => (
    //             <form noValidate>
    //                 <input
    //                     name="email"
    //                     onChange={changeHandler} 
    //                     value={values.email} type="email" />
    //                 <input 
    //                     name="password"
    //                     onChange={changeHandler}
    //                     value={values.password} type="password" required /> <br/>
    //                 <button type="submit">Submit</button>
    //             </form>
    //         )}>

    //         </FormWrap>

            
    //     );

        return (
            <FormWrap initialValues={ {
                            email: 'yariv@nerdeez.com', 
                            password: ''
                        } }>
                {
                    (changeHandler, values) => (
                        <form noValidate>
                            <input
                                name="email"
                                onChange={changeHandler} 
                                value={values.email} type="email" />
                            <input 
                                name="password"
                                onChange={changeHandler}
                                value={values.password} type="password" required /> <br/>
                            <button type="submit">Submit</button>
                        </form>
                    )
                }
            </FormWrap>
        )
    }
}

function HOCLogin(props) {
    return (
        <form noValidate>
            <input
                name="email"
                onChange={props.onChange} 
                value={props.values.email} type="email" />
            <input 
                name="password"
                onChange={props.onChange}
                value={props.values.password} type="password" required /> <br/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default withFormWrap({email: 'yariv', password: ''})(HOCLogin);