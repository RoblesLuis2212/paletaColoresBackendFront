import React, { use, useState } from 'react';
import Cards from './Cards';
import ModalEditarColor from './ModalEditarColor';
import FiltroColores from './FiltroColores';

const ContainerCards = ({ colores, setColores }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <h2 className='text-center mt-2'>Tus Colores</h2>
            <FiltroColores></FiltroColores>
            <section className='container mt-2'>
                <div className="row g-3">
                    {colores.map((itemColor) => (
                        <div className="col-12 col-md-4 d-flex justify-content-center" key={itemColor._id}>
                            <Cards handleShow={handleShow} itemColor={itemColor} setColores={setColores}></Cards>
                        </div>
                    ))}
                </div>
            </section>
            <ModalEditarColor show={show} handleClose={handleClose} handleShow={handleShow}></ModalEditarColor>
        </>
    );
};

export default ContainerCards;