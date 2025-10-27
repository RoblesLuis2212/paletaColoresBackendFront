import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import ContainerCards from './ContainerCards';

const FormularioColores = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
        reset();
    }

    return (
        <>
            <section className='container border border-light'>
                <div className="row">
                    <div className="col-12 bg-white text-black border border-light">
                        <h3 className='text-center'>Administrar Colores</h3>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center align-items-center border border-light fondocontainerForm">
                        <div className='color'>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 border border-light fondocontainerForm">
                        <Form onSubmit={handleSubmit(postValidaciones)} className='mt-5'>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" placeholder="Ingrese un color ej: blue" {...register("nombreColor", {
                                    required: "Este campo es obligatorio",
                                    minLength: {
                                        value: 3,
                                        message: "El nombre del color debe contener minimo 3 caracteres"
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: "El nombre del color debe contener maximo 12 caracteres"
                                    }
                                })} />
                                <Form.Text className="text-danger">
                                    {errors.nombreColor?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type='text' placeholder='Ingrese un color en hexadecimal (opcional)' className='mt-3' {...register("codigo_hex", {
                                    pattern: {
                                        value: /^#([0-9A-Fa-f]{3}){1,2}$/,
                                        message: "Por favor ingrese un codigo valido"
                                    }
                                })} />
                                <Form.Text className='text-danger'>
                                    {errors.codigo_hex?.message}
                                </Form.Text>
                            </Form.Group>
                            <Button variant="success" type="submit" className='botonGuardar'>
                                Guardar
                            </Button>
                        </Form>
                    </div>
                    <div className="col-12 bg-white py-4">
                    </div>
                </div>
            </section>
            <ContainerCards></ContainerCards>
        </>
    );
};

export default FormularioColores;