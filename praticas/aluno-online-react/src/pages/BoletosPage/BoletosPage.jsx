import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './BoletosPage.css';

function BoletosPage() {
  return (
    <div className="screen boletos-page">
      <Sidebar />

      <div className="screen-content">
        <Topbar />

        <main className="page-main">
          <section className="page-section">
            <h2 className="section-title">Listagem de boletos</h2>
            <p className="section-subtitle">
              Consulte vencimentos, valores e situação de pagamento.
            </p>

            <div className="boletos-list">
              <article className="boleto-card">
                <div className="boleto-top">
                  <div>
                    <h3>Mensalidade de abril</h3>
                    <p>Vencimento: 10/04/2026</p>
                  </div>
                  <span className="status-badge status-warning">Em aberto</span>
                </div>

                <p className="boleto-value">R$ 849,90</p>
                <a className="boleto-button" href="#boleto-abril">
                  Baixar boleto
                </a>
              </article>

              <article className="boleto-card">
                <div className="boleto-top">
                  <div>
                    <h3>Mensalidade de março</h3>
                    <p>Vencimento: 10/03/2026</p>
                  </div>
                  <span className="status-badge status-success">Pago</span>
                </div>

                <p className="boleto-value">R$ 849,90</p>
                <a className="boleto-button boleto-button-light" href="#recibo-marco">
                  Ver recibo
                </a>
              </article>

              <article className="boleto-card">
                <div className="boleto-top">
                  <div>
                    <h3>Taxa de requerimento</h3>
                    <p>Vencimento: 14/04/2026</p>
                  </div>
                  <span className="status-badge status-info">Gerado</span>
                </div>

                <p className="boleto-value">R$ 35,00</p>
                <a className="boleto-button" href="#taxa-requerimento">
                  Baixar boleto
                </a>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default BoletosPage;