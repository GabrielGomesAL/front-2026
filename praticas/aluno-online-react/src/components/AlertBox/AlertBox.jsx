function AlertBox({ title, text, className = '' }) {
    return (
      <section className={`page-section ${className}`.trim()}>
        <h3 className="section-title">{title}</h3>
        <p>{text}</p>
      </section>
    );
  }
  
  export default AlertBox;