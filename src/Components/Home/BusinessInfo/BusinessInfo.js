import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';


const infoData = [

    {
        title: 'Opening Hours',
        description: 'We are open 7 Days',
        icon: faClock,
        background: 'primary'
    },

    {
        title: 'Visit Our Location',
        description: 'Mongla Port Pourashava,Mongla,Bangladesh',
        icon: faMapMarker,
        background: 'dark'
    },

    {
        title: 'Call us Now',
        description: '+880 1728447276',
        icon: faPhone,
        background: 'primary'
    }

]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;