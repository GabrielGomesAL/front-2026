import { useAuth } from '../../contexts/AuthContext';
import './Topbar.css';

function getInitials(nome) {
  return nome
    .split(' ')
    .filter(Boolean)
    .map((parte) => parte.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function Topbar() {
  const { usuario } = useAuth();
  const nome = usuario?.nome || 'Aluno';
  const email = usuario?.email || '';

  return (
    <header className="topbar">
      <div>
        <p className="topbar-greeting">Bem-vindo de volta</p>
        <h1 className="topbar-title">Portal do Aluno</h1>
      </div>

      <div className="topbar-user">
        <div className="topbar-avatar">{getInitials(nome)}</div>

        <div className="topbar-user-info">
          <strong>{nome}</strong>
          <span>{email}</span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
