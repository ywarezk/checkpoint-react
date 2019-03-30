## Forms

In this lesson we will use common patterns with React for dealing with forms.

### Lesson Plan

- Different patterns for handling forms
- Higher order components
- Render props
- Formik
- Yup

### Student EX:

- Create a component with a form for creating a todo task
- Create the form using Formik
- style the form using bootstrap
- The fields in the form
  * title - string, alpha numeric, max length 100, required
  * description - string, required
  * group - string, required, max length 20
  * when - datetime, required
- when submitting the form you will send a post request
  * url: https://nztodo.herokuapp.com/api/task/
  * body: {title: ..., description: ..., group: ..., when: ...}
