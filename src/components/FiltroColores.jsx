import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';

const FiltroColores = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
    }

    return (
        <section className='container'>
            <Form onSubmit={handleSubmit(postValidaciones)}>
                <Form.Group className="d-flex justify-content-between">
                    <Form.Control type="text" placeholder="ingrese el nombre o el codigo del color a filtrar" />
                    <Form.Text className="text-danger d-none">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Button variant="success" type="submit" className='ms-1'>
                        Buscar
                    </Button>
                </Form.Group>
            </Form>

        </section>
    );
};

export default FiltroColores;