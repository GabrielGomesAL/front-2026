import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo">AO</div>

        <div>
          <h2 className="sidebar-brand-title">Aluno Online</h2>
          <p className="sidebar-brand-subtitle">Painel acadêmico</p>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Menu principal">
        <a className="sidebar-link sidebar-link-dashboard" href="#dashboard">
          Dashboard
        </a>
        <a className="sidebar-link sidebar-link-faltas" href="#faltas">
          Faltas
        </a>
        <a className="sidebar-link sidebar-link-notas" href="#notas">
          Notas
        </a>
        <a className="sidebar-link sidebar-link-boletos" href="#boletos">
          Boletos
        </a>
        <a
          className="sidebar-link sidebar-link-requerimentos"
          href="#requerimentos"
        >
          Requerimentos
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;