import React from 'react';
import { Field, reduxForm } from 'redux-form';

class User_Form extends React.Component{

    renderError({error, touched}){
        if(error && touched){
            return <div className="alert alert-dark" role="alert">
                {error}
            </div>
        };
    };

    renderInput = (formProps) => {
        return (
            <div className="form-group">
                <label>{formProps.title}</label>
                <input className="form-control" {...formProps.input} placeholder={formProps.label} />
                {this.renderError(formProps.meta)}
            </div>
        );
    }

    onSubmit = (formValues) =>{
        this.props.onSubmit(formValues);
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="name" component={this.renderInput} label="Enter Name" title="Name" />
                <Field name="email" component={this.renderInput} label="Enter E-mail" title="Email address" />
                <Field name="mobile" component={this.renderInput} label="Enter Mobile" title="Mobile Number"/>
                <Field name="address" component={this.renderInput} label="Enter Address" title="Address" />
                <Field name="pincode" component={this.renderInput} label="Enter pincode (6 digits) " title="Pincode"/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }

}

const validateForm = (formValues) => { 
    const errors = {};

    if(!formValues.name){
        errors.name = 'You must enter a name!';
    }else{
        var checkName = /^[a-zA-Z ]*$/;
        if(!checkName.test(formValues.name)){
            errors.name = 'Name should only contain Alphabets!';
        }
    }

    if(!formValues.email){
        errors.email = 'You must enter an email!';
    }else{
        // eslint-disable-next-line
        var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!checkEmail.test(formValues.email)){
            errors.email = 'Enter valid email address!';
        }
    }

    if(!formValues.mobile){
        errors.mobile = 'You must enter an mobile!';
    }else{
        var checkMobile = /^[0-9]+$/;
        if(!checkMobile.test(formValues.mobile)){
            errors.mobile = 'Enter valid mobile Number!'
        }
    }

    if(!formValues.address){
        errors.address = 'You must enter an address!';
    }

    if(!formValues.pincode){
        errors.pincode = 'You must enter a pincode (6 digits)';
    }else{
        var checkPincode = /^([0-9]){6}$/;
        if(!checkPincode.test(formValues.pincode)){
            errors.pincode = 'Enter a valid Pincode! (6 digits)';
        }
    }

    return errors;
}

export default reduxForm({
    form: 'UserForm',
    validate: validateForm
})(User_Form);