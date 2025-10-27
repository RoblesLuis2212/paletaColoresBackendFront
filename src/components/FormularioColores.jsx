import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioColores = () => {
    return (
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
                    <Form className='mt-5'>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Ingrese un color ej: blue" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
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
    );
};

export default FormularioColores;