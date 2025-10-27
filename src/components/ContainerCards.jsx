import React, { use, useState } from 'react';
import Cards from './Cards';
import ModalEditarColor from './ModalEditarColor';

const ContainerCards = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <h2 className='text-center mt-2'>Tus Colores</h2>
            <section className='container mt-2'>
                <div className="row g-3">
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <Cards color="Yellow" codigo="#FFFF00" handleShow={handleShow}></Cards>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <Cards color="Yellow" codigo="#FFFF00" handleShow={handleShow}></Cards>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <Cards color="Yellow" codigo="#FFFF00" handleShow={handleShow}></Cards>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <Cards color="Yellow" codigo="#FFFF00" handleShow={handleShow}></Cards>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <Cards color="Yellow" codigo="#FFFF00" handleShow={handleShow}></Cards>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <Cards color="Yellow" codigo="#FFFF00" handleShow={handleShow}></Cards>
                    </div>
                </div>
            </section>
            <ModalEditarColor show={show} handleClose={handleClose} handleShow={handleShow}></ModalEditarColor>
        </>
    );
};

export default ContainerCards;