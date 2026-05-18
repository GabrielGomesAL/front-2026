import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  function getLinkClassName(extraClass = '') {
    return ({ isActive }) =>
      [
        'sidebar-link',
        extraClass,
        isActive ? 'sidebar-link-active' : '',
      ]
        .filter(Boolean)
        .join(' ');
  }

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
        <NavLink
          to="/"
          end
          className={getLinkClassName('sidebar-link-dashboard')}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/faltas"
          className={getLinkClassName('sidebar-link-faltas')}
        >
          Faltas
        </NavLink>
        <NavLink
          to="/notas"
          className={getLinkClassName('sidebar-link-notas')}
        >
          Notas
        </NavLink>
        <NavLink
          to="/boletos"
          className={getLinkClassName('sidebar-link-boletos')}
        >
          Boletos
        </NavLink>
        <NavLink
          to="/requerimentos"
          className={getLinkClassName('sidebar-link-requerimentos')}
        >
          Requerimentos
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
