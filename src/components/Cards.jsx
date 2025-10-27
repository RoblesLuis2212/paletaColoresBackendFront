import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = () => {
    return (
        <Card>
            <Card.Title className='text-center'>Yellow</Card.Title>
            <Card.Body className='d-flex justify-content-center'>
                <div className="color"></div>
            </Card.Body>
            <Button variant="danger" className='w-70 mx-5 mb-2'>Borrar</Button>
        </Card>
    );
};

export default Cards;