import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './DashboardPage.css';

function DashboardPage() {
  return (
    <div className="screen dashboard-page">
      <Sidebar />

      <div className="screen-content">
        <Topbar />

        <main className="page-main">
          <section className="dashboard-hero">
            <h2 className="dashboard-hero-title">Dashboard acadêmica</h2>
            <p className="dashboard-hero-text">
              Acompanhe sua vida acadêmica em um único lugar, com visão rápida de
              notas, faltas, boletos e requerimentos.
            </p>
          </section>

          <section className="info-grid">
            <div className="info-card">
              <p className="info-card-label">Média geral</p>
              <p className="info-card-value">8,6</p>
              <p className="info-card-helper">Desempenho acima da turma</p>
            </div>

            <div className="info-card">
              <p className="info-card-label">Faltas acumuladas</p>
              <p className="info-card-value">9</p>
              <p className="info-card-helper">Atenção em Banco de Dados</p>
            </div>

            <div className="info-card">
              <p className="info-card-label">Boletos em aberto</p>
              <p className="info-card-value">2</p>
              <p className="info-card-helper">Vencimento nesta semana</p>
            </div>

            <div className="info-card">
              <p className="info-card-label">Requerimentos ativos</p>
              <p className="info-card-value">1</p>
              <p className="info-card-helper">Em análise pela secretaria</p>
            </div>
          </section>

          <div className="dashboard-panels">
            <section className="page-section">
              <h3 className="section-title">Próximos compromissos</h3>
              <p className="section-subtitle">
                Eventos acadêmicos e atividades mais próximas.
              </p>

              <ul className="dashboard-list">
                <li>
                  <strong>Prova de Front-end</strong>
                  <span>05/04 • Sala 12</span>
                </li>
                <li>
                  <strong>Entrega do projeto React</strong>
                  <span>08/04 • Ambiente virtual</span>
                </li>
                <li>
                  <strong>Reunião de orientação</strong>
                  <span>10/04 • 19h</span>
                </li>
              </ul>
            </section>

            <section className="page-section">
              <h3 className="section-title">Últimas atualizações</h3>
              <p className="section-subtitle">
                Resumo rápido do seu portal.
              </p>

              <ul className="dashboard-list">
                <li>
                  <strong>Nota lançada</strong>
                  <span>UX/UI • 9,2</span>
                </li>
                <li>
                  <strong>Boleto gerado</strong>
                  <span>Mensalidade de abril</span>
                </li>
                <li>
                  <strong>Requerimento atualizado</strong>
                  <span>Status alterado para em análise</span>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;