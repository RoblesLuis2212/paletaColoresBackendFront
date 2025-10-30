import React, { use, useState } from 'react';
import Cards from './Cards';
import ModalEditarColor from './ModalEditarColor';
import FiltroColores from './FiltroColores';
import { obtenerIDcolorAPI } from '../helpers/queries';

const ContainerCards = ({ colores, setColores }) => {
    const [show, setShow] = useState(false);
    const [colorSeleccionado, setColorSeleccionado] = useState(null);


    const handleClose = () => setShow(false);
    const handleShow = async (id) => {
        const respuesta = await obtenerIDcolorAPI(id);
        if (respuesta.status === 200) {
            const colorBuscado = await respuesta.json();
            setColorSeleccionado(colorBuscado);
            setShow(true);
        } else {
            console.log("Ocurrio un error al obtener el color")
        }
    }


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
            <ModalEditarColor show={show} colorSeleccionado={colorSeleccionado} setColores={setColores} handleClose={handleClose} handleShow={handleShow}></ModalEditarColor>
        </>
    );
};

export default ContainerCards;