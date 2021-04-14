import React from 'react';
import './Services.css';
import Fluoride from '../../../images/001-dental.png';
import Cavity from '../../../images/tooth (1).png';
import Whitening from '../../../images/tooth.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';



const ServiceData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride

    },
    {
        name: 'Cavity Filling',
        img: Cavity

    },
    {
        name: 'Teeth Whitening',
        img: Whitening

    }

]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center ">
                <h5>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        ServiceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;