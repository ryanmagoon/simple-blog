import React, { Component } from 'react'
imoprt { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  render() {
    return (
      <form action="">
        <Field
          name="title"
          component={}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew)
