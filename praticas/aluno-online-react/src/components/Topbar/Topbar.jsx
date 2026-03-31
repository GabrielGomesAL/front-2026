import './Topbar.css';

function Topbar() {
  return (
    <header className="topbar">
      <div>
        <p className="topbar-greeting">Bem-vindo de volta</p>
        <h1 className="topbar-title">Portal do Aluno</h1>
      </div>

      <div className="topbar-user">
        <div className="topbar-avatar">GG</div>

        <div className="topbar-user-info">
          <strong>Gabriel Gomes</strong>
          <span>ADS • 5º semestre</span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;