
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import todoService from '../../services/todo.service';
import Task from '../../models/Task';

export default function TodoForm() {
    const handleSubmit = async (values, {setSubmitting}) => {
        const task = await todoService.createTask(values);
        alert(JSON.stringify(task));
    }

    return (
        <Formik
            initialValues={ {title: '', description: '', group: '', when: new Date()} }
            onSubmit={handleSubmit}
            validationSchema={Task.validationSchema}
        >
            {
                () => (
                    <Form>
                        <div className="form-group">
                            <Field className="form-control" name="title"></Field>
                        </div>
                        
                        <ErrorMessage name="title"></ErrorMessage>
                        <div className="form-group">
                            <Field className="form-control" name="description"></Field>
                        </div>                            
                        <ErrorMessage name="description"></ErrorMessage>
                        <Field name="group"></Field>
                        <ErrorMessage name="group"></ErrorMessage>
                        <Field type="datetime-local" name="when"></Field>
                        <ErrorMessage name="when"></ErrorMessage>
                        <button type="submit">submit</button>
                    </Form>
                )   
            }
        </Formik>
    )
}

TodoForm.displayName = 'CPTodoForm';