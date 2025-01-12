import React from "react";
import "../styles/PortfolioCard.css";

function PortfolioCard({ imgSrc, title, description }) {
    return (
        <div className="portfolio-card">
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default PortfolioCard;
