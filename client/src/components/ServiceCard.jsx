import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ title, description, link }) => (
  <Card title={title} className="service-card">
    <p className="service-card-description">{description}</p>
    <Link to={link}>
      <Button type="primary" className="service-card-button">Try Now</Button>
    </Link>
  </Card>
);

export default ServiceCard;
