/**
 * Login form that is managed using formik
 */

import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

const loginValidation = yup.object().shape(
    {
        email: yup.string().email('Bad pattern').min(5),
        password: yup.string().min(5)
    }
)

export default function LoginFormik(props) {
    const handleLoginSubmit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
    }

    return (
        <Formik
            initialValues={ {email: 'yariv@nerdeez.com', password: ''} }
            onSubmit={handleLoginSubmit}
            validationSchema={loginValidation}
        >
            {
                /* {handleSubmit: ...} */ 
                ({handleSubmit, handleChange, handleBlur, errors}) => (
                    <Form>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" />
                        <Field type="password" name="password" />                        
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}