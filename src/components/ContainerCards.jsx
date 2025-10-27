import React from 'react';
import Cards from './Cards';

const ContainerCards = () => {
    return (
        <>
            <h2 className='text-center mt-2'>Tus Colores</h2>
            <section className='container mt-2'>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Cards color="Yellow" codigo="#FFFF00"></Cards>
                    </div>
                    <div className="col-12 col-md-4">
                        <Cards color="Red" codigo=""></Cards>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContainerCards;