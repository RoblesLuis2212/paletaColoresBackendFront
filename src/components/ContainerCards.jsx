import React from 'react';
import Cards from './Cards';

const ContainerCards = () => {
    return (
        <section className='container border border-ligth mt-4'>
            <div className="row">
                <div className="col-12 col-md-4">
                    <Cards></Cards>
                </div>
            </div>
        </section>
    );
};

export default ContainerCards;