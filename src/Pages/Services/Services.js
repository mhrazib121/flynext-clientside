import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Header from '../Shared/Header/Header';
import ServiceItem from '../Shared/ServiceItem/ServiceItem';
import Service from '../Shared/ServiceItem/ServiceItem';

const Services = () => {
    const { services } = useServices();
    console.log(services)
    return (
        <div>
            <h1 className="text-center my-3"> My booking </h1>
            <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <ServiceItem key={service.id} service={service} />)
                }
            </Row>
        </div>
    );
};

export default Services;