import * as yup from 'yup';


export default class Task {
    static validationSchema = yup.object().shape({
        title: yup.string().min(5).max(100).required(),
        description: yup.string().required(),
        when: yup.date().required('Please enter a date'),
        group: yup.string().required()
    }) 

    constructor(json) {
        this.id = json.id;
        this.title = json.title;
        this.description = json.description;
        this.when = json.when;
        this.group = json.group;
    }
}