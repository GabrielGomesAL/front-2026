import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './FaltasPage.css';

function FaltasPage() {
  return (
    <div className="screen faltas-page">
      <Sidebar />

      <div className="screen-content">
        <Topbar />

        <main className="page-main">
          <section className="page-section">
            <h2 className="section-title">Listagem de faltas</h2>
            <p className="section-subtitle">
              Consulte a quantidade de faltas por disciplina e acompanhe o limite
              permitido.
            </p>

            <div className="info-grid faltas-cards">
              <div className="info-card">
                <p className="info-card-label">Total de faltas</p>
                <p className="info-card-value">9</p>
                <p className="info-card-helper">No semestre atual</p>
              </div>

              <div className="info-card">
                <p className="info-card-label">Disciplina crítica</p>
                <p className="info-card-value">BD</p>
                <p className="info-card-helper">Mais próxima do limite</p>
              </div>

              <div className="info-card">
                <p className="info-card-label">Situação geral</p>
                <p className="info-card-value">Atenção</p>
                <p className="info-card-helper">Mantenha a frequência</p>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h3 className="section-title">Faltas por disciplina</h3>
            <p className="section-subtitle">
              Dados resumidos da frequência acadêmica.
            </p>

            <div className="table-wrapper">
              <table className="base-table">
                <thead>
                  <tr>
                    <th>Disciplina</th>
                    <th>Aulas dadas</th>
                    <th>Faltas</th>
                    <th>Limite</th>
                    <th>Situação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Front-end</td>
                    <td>32</td>
                    <td>2</td>
                    <td>8</td>
                    <td>
                      <span className="status-badge status-success">
                        Tranquilo
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Banco de Dados</td>
                    <td>30</td>
                    <td>5</td>
                    <td>7</td>
                    <td>
                      <span className="status-badge status-warning">
                        Atenção
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Engenharia de Software</td>
                    <td>28</td>
                    <td>1</td>
                    <td>7</td>
                    <td>
                      <span className="status-badge status-success">OK</span>
                    </td>
                  </tr>
                  <tr>
                    <td>UX/UI</td>
                    <td>24</td>
                    <td>1</td>
                    <td>6</td>
                    <td>
                      <span className="status-badge status-success">OK</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="page-section faltas-alert">
            <h3 className="section-title">Observação</h3>
            <p className="faltas-alert-text">
              Banco de Dados está mais perto do limite de faltas. Evite novas
              ausências nessa disciplina.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default FaltasPage;