import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const ModalEditarColor = ({ show, handleClose }) => {
    //validacion del formulario
    const { reset, handleSubmit, formState: { errors }, register } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Color</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(postValidaciones)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre color</Form.Label>
                        <Form.Control type="text" placeholder="ingrese el nombre del color ej: blue"
                            {...register("nombreColor", {
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
                        />
                        <Form.Text className="text-danger">
                            {errors.nombreColor?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Codigo Hexadecimal</Form.Label>
                        <Form.Control type="text" placeholder="ingrese el codigo hexadecimal (opcional)"
                            {...register("codigo_hex", {
                                pattern: {
                                    value: /^#([0-9A-Fa-f]{3}){1,2}$/,
                                    message: "El codigo ingresado no es valido"
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.codigo_hex?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='w-100'>
                        Actualizar
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer className='d-none d-md-flex justify-content-end'>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalEditarColor;