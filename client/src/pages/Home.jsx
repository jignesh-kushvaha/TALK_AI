import React from 'react';
import { Typography, Row, Col } from 'antd';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const { Title, Paragraph } = Typography;

const Home = () => (
  <div className="home-container">
    <div className="home-header">
      <Title className="home-title">Talk AI</Title>
      <Paragraph className="home-description">
        Practice English grammar, get corrections, and boost your confidence using AI.
      </Paragraph>
    </div>

    <div className="services-section">
      <div className="service-card-container">
        <ServiceCard
          title="Improve Your Sentence Grammar"
          description="Get instant grammar corrections and explanations using AI."
          link="/chat"
        />
      </div>
    </div>
  </div>
);

export default Home;
