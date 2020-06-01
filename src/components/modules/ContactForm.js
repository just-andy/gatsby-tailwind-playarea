import React from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'

const ErrorText = ({children})=>{
  return (
    <div className="text-accent-700 text-warning">{children}</div>
  )
}

const ContactForm = () => {
  return (
    <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
      subject: ''
    }}
    validate={values => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const errors = {};
      if(!values.name) {
        errors.name = 'Name Required'
      }
      if(!values.email || !emailRegex.test(values.email)) {
        errors.email = 'Valid Email Required'
      }
      if(!values.subject) {
        errors.subject = 'Subject Required'
      }
      if(!values.message) {
        errors.message = 'Message Required'
      }
      return errors;
    }}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }}
  >
  {({ isSubmitting }) => (
    <Form className="mb-6">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="name">Your Name</label>
        <Field className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="name" />
        <ErrorMessage component={ErrorText} name="name" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="email">Your Email</label>
        <Field className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="email" />
        <ErrorMessage component={ErrorText} name="email" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="subject">Subject</label>
        <Field nput className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" name="subject" />
        <ErrorMessage component={ErrorText} name="subject" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="textarea">Message</label>
        <Field className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" component="textarea" name="textarea" />
        <ErrorMessage component={ErrorText} name="textarea" />
      </div>
      <div className="mb-4">
        <button type="submit" disabled={isSubmitting} className="btn btn-primary">Send message</button>
      </div>
    </Form>
  )}
  </Formik>
  )
}

export default ContactForm