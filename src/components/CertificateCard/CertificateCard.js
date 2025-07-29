import React from 'react';
import './CertificateCard.css';

export const CertificateCard = ({ title, duration, date, link, image }) => {
  return (
    <div className="certificate-card">
      <img src={image} alt={title} className="certificate-image" />
      <div className="certificate-info">
        <h3>{title}</h3>
        <p>Duration: {duration}</p>
        <p>Completed: {date}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Certificate
        </a>
      </div>
    </div>
  );
};