import './SectionCard.css';

function SectionCard({ title, items }) {
  return (
    <section className="section-card">
      <h2 className="section-card-title">{title}</h2>

      <div className="section-card-list">
        {items.map((item, index) => (
          <div className="section-card-item" key={index}>
            <div className="section-card-info">
              <span className="section-card-label">{item.label}</span>
              {item.description && (
                <span className="section-card-description">{item.description}</span>
              )}
            </div>

            {item.value && (
              <span className={`section-card-badge ${item.variant || 'default'}`}>
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionCard;