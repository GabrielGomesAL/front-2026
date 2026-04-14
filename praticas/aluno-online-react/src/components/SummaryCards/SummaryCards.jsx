import './SummaryCards.css';

function SummaryCards({ cards, className = '' }) {
  return (
    <div className={`info-grid ${className}`.trim()}>
      {cards.map((card, index) => (
        <div className="info-card" key={index}>
          <p className="info-card-label">{card.label}</p>
          <p className="info-card-value">{card.value}</p>
          <p className="info-card-helper">{card.helper}</p>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;