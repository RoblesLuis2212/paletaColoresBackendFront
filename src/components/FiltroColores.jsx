import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';

const FiltroColores = () => {
    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
        reset();
    }

    return (
        <section className='container'>
            <Form onSubmit={handleSubmit(postValidaciones)}>
                <Form.Group className="d-flex justify-content-between">
                    <Form.Control type="text" placeholder="ingrese el nombre del color a filtrar" {...register("nombreColor", {
                        required: "Este campo es obligatorio",
                        minLength: {
                            value: 3,
                            message: "El nombre del color debe contener minimo 3 caracteres"
                        },
                        maxLength: {
                            value: 12,
                            message: "El nombre del color debe contener maximo 12 caracteres"
                        }
                    })}
                        onChange={() => clearErrors("nombreColor")} />
                    <Button variant="success" type="submit" className='ms-1'>
                        Buscar
                    </Button>
                </Form.Group>
                <Form.Text className="text-danger">
                    {errors.nombreColor?.message}
                </Form.Text>
            </Form>

        </section>
    );
};

export default FiltroColores;