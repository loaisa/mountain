import React from 'react';
import {useForm} from 'react-hook-form'
import "../styles/Form.css"
const Form = () => {

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
        }
    });
    const onSubmit = (data) => {
        reset()
    }
    return (
        <section id='Contact' className='form-block'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Ваше имя</label>
                <input {...register("firstName")} className='form-input'/>
                <label htmlFor="">Ваша почта</label>
                <input {...register('email')}  className='form-input'/>
                <label htmlFor="">Ваше сообщение</label>
                <textarea aria-placeholder='...'/>
                <input type="submit" className='button-form'/>

            </form>
        </section>

    );
};

export default Form;