import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './NotasPage.css';

function NotasPage() {
  return (
    <div className="screen notas-page">
      <Sidebar />

      <div className="screen-content">
        <Topbar />

        <main className="page-main">
          <section className="page-section">
            <h2 className="section-title">Listagem de notas</h2>
            <p className="section-subtitle">
              Visualize as notas por disciplina e acompanhe seu desempenho no
              semestre.
            </p>

            <div className="notas-grid">
              <div className="notas-card">
                <p className="notas-card-label">Média geral</p>
                <h3 className="notas-card-value">8,6</h3>
              </div>

              <div className="notas-card">
                <p className="notas-card-label">Melhor disciplina</p>
                <h3 className="notas-card-value">UX/UI</h3>
              </div>

              <div className="notas-card">
                <p className="notas-card-label">Ponto de atenção</p>
                <h3 className="notas-card-value">Banco de Dados</h3>
              </div>
            </div>
          </section>

          <section className="page-section">
            <h3 className="section-title">Notas por disciplina</h3>
            <p className="section-subtitle">
              Resultados atualizados das avaliações.
            </p>

            <div className="table-wrapper">
              <table className="base-table">
                <thead>
                  <tr>
                    <th>Disciplina</th>
                    <th>AV1</th>
                    <th>AV2</th>
                    <th>Trabalho</th>
                    <th>Média</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Front-end</td>
                    <td>8,5</td>
                    <td>9,0</td>
                    <td>9,5</td>
                    <td>9,0</td>
                  </tr>
                  <tr>
                    <td>Banco de Dados</td>
                    <td>7,0</td>
                    <td>7,8</td>
                    <td>8,0</td>
                    <td>7,6</td>
                  </tr>
                  <tr>
                    <td>Engenharia de Software</td>
                    <td>8,0</td>
                    <td>8,7</td>
                    <td>8,5</td>
                    <td>8,4</td>
                  </tr>
                  <tr>
                    <td>UX/UI</td>
                    <td>9,0</td>
                    <td>9,4</td>
                    <td>9,2</td>
                    <td>9,2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default NotasPage;