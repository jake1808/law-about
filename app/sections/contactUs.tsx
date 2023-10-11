'use client'
import React from 'react';
import { useFormik } from 'formik';
import {SMTPClient} from 'emailjs'

const ContactUs = () => {

    // const client = new SMTPClient({
    //     user:
    // })

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        onSubmit: values => {
            console.log(values.email);
            console.log(values.name);
            console.log(values.message);
        }
    });

    return (
        <div className='min-h-screen' id='contactUs'>
            <h1 className='text-center font-bold text-3xl lg:text-5xl'>Contact us</h1>
            <form onSubmit={formik.handleSubmit} className='flex flex-col px-10 lg:px-40'>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required={true}
                    className='input text-white' />

                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id='name'
                    name='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    required={true}
                    className='input text-white' />
                <label htmlFor="message">Message:</label>
                <textarea
                    id='message'
                    name='message'
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    required={true}
                    className='textarea text-white textarea-ls' />
                <button type='submit' className='mt-4 btn '>Submit</button>
            </form>
        </div>
    )
}



export default ContactUs;