import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { borrarColorAPI, listarColoresAPI } from '../helpers/queries.js';
import Swal from 'sweetalert2';

const Cards = ({ itemColor, setColores, handleShow }) => {
    const borrarColor = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: `Vas a eliminar el producto "${itemColor.nombreColor}". Esta acción no se puede deshacer.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const respuesta = await borrarColorAPI(itemColor._id);
                if (respuesta.status === 200) {
                    Swal.fire({
                        title: "Eliminado",
                        text: `El color "${itemColor.nombreColor}" fue eliminado correctamente.`,
                        icon: "success",
                        timer: 2000,
                    });
                    const respuesta = await listarColoresAPI();
                    if (respuesta.status === 200) {
                        const coloresRestantes = await respuesta.json();
                        setColores(coloresRestantes);

                    }
                } else {
                    alert("Error al eliminar el color")
                }
            }
        })
    }

    return (
        <Card style={{ width: '230px' }} className='mt-3 h-100'>
            <Card.Header className='p-0'>
                <div className="colorCards rounded-1 w-100" style={{ backgroundColor: itemColor.nombreColor }}></div>
            </Card.Header>
            <Card.Body>
                <h4>{itemColor.nombreColor}</h4>
                <p>{itemColor.codigo_hex ? itemColor.codigo_hex : "No Disponible"}</p>
            </Card.Body>
            <div className='mb-2'>
                <Button variant='secondary' className='me-3 ms-3' onClick={() => handleShow(itemColor._id)}>
                    <i className="bi bi-pencil-fill me-1"></i>
                    Editar
                </Button>
                <Button variant="danger" onClick={borrarColor}>
                    <i className="bi bi-trash3 me-1"></i>
                    Borrar
                </Button>
            </div>
        </Card>
    );
};

export default Cards;