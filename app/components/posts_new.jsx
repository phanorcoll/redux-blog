import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderField = (field) => {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder={field.placeholder}
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit = (values) => {
        console.log(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    placeholder="enter post title"
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    placeholder="enter categories"
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    placeholder="post content"
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title";
    }

    if (!values.categories) {
        errors.categories = "Enter some categories";
    }

    if (!values.content) {
        errors.content = "Enter some content please!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);