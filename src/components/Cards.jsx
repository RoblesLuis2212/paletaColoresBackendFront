import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({ itemColor, handleShow }) => {
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
                <Button variant='secondary' className='me-3 ms-3' onClick={() => handleShow()}>
                    <i className="bi bi-pencil-fill me-1"></i>
                    Editar
                </Button>
                <Button variant="danger">
                    <i className="bi bi-trash3 me-1"></i>
                    Borrar
                </Button>
            </div>
        </Card>
    );
};

export default Cards;