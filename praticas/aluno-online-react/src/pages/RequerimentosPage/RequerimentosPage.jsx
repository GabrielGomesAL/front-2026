import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './RequerimentosPage.css';

function RequerimentosPage() {
  return (
    <div className="screen requerimentos-page">
      <Sidebar />

      <div className="screen-content">
        <Topbar />

        <main className="page-main">
          <section className="page-section">
            <h2 className="section-title">Listagem de requerimentos</h2>
            <p className="section-subtitle">
              Acompanhe solicitações abertas, protocolos e situação de análise.
            </p>

            <div className="requerimentos-grid">
              <article className="requerimento-card">
                <h3>Declaração de matrícula</h3>
                <p className="requerimento-protocolo">Protocolo #2026-0015</p>
                <p className="requerimento-text">
                  Solicitação enviada para emissão de documento acadêmico.
                </p>
                <span className="status-badge status-info">Em análise</span>
              </article>

              <article className="requerimento-card">
                <h3>2ª via de boleto</h3>
                <p className="requerimento-protocolo">Protocolo #2026-0012</p>
                <p className="requerimento-text">
                  Pedido concluído e documento já disponibilizado.
                </p>
                <span className="status-badge status-success">Concluído</span>
              </article>

              <article className="requerimento-card">
                <h3>Aproveitamento de disciplina</h3>
                <p className="requerimento-protocolo">Protocolo #2026-0009</p>
                <p className="requerimento-text">
                  Aguardando análise da coordenação do curso.
                </p>
                <span className="status-badge status-warning">Aguardando</span>
              </article>
            </div>
          </section>

          <section className="page-section">
            <h3 className="section-title">Histórico recente</h3>
            <p className="section-subtitle">
              Últimos requerimentos cadastrados.
            </p>

            <div className="table-wrapper">
              <table className="base-table">
                <thead>
                  <tr>
                    <th>Tipo</th>
                    <th>Protocolo</th>
                    <th>Data</th>
                    <th>Situação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Declaração de matrícula</td>
                    <td>#2026-0015</td>
                    <td>28/03/2026</td>
                    <td>
                      <span className="status-badge status-info">
                        Em análise
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>2ª via de boleto</td>
                    <td>#2026-0012</td>
                    <td>24/03/2026</td>
                    <td>
                      <span className="status-badge status-success">
                        Concluído
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Aproveitamento de disciplina</td>
                    <td>#2026-0009</td>
                    <td>20/03/2026</td>
                    <td>
                      <span className="status-badge status-warning">
                        Aguardando
                      </span>
                    </td>
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

export default RequerimentosPage;