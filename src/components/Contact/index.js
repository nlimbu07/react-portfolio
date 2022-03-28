import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // Hook to manage the form data, set the initial state to empty strings to get the following expression
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  // destructure the formState object into its named properties
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
      <section className='container'>
      <h1>Contact me</h1>
      <br />
      <form className='container-large' onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label className='form-label' htmlFor='name'>Name:</label>
            <input type='text' className='form-control' name='name' defaultValue={name} onBlur={handleChange} />
        </div>
        <div className='mb-3'>
            <label className='form-label' htmlFor='email'>Email address:</label>
            <input type='email' className='form-control' name='email' defaultValue={email} onBlur={handleChange} />
        </div>
        <div className='mb-3'>
            <label htmlFor='message' className='form-label'>Message:</label>
            <textarea name='message' className='form-control' defaultValue={message} onBlur={handleChange} rows='5' />
        </div>
        {errorMessage && (
            <div>
                <p className='error-text'>{errorMessage}</p>
            </div>
        )}
        <button type='submit' className='btn-lg'>Submit</button>
      </form>

      </section>
  )
}

export default ContactForm;
