import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listarRequerimentos } from '../../services/requerimentoService';
import './RequerimentosPage.css';

function getStatusClass(status) {
  const statusClasses = {
    Aguardando: 'status-warning',
    Concluído: 'status-success',
    'Em análise': 'status-info',
  };

  return statusClasses[status] || 'status-info';
}

function RequerimentosPage() {
  const [requerimentos, setRequerimentos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregarRequerimentos() {
      try {
        const dados = await listarRequerimentos();
        setRequerimentos(dados);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarRequerimentos();
  }, []);

  return (
    <main className="page-main requerimentos-page">
      <section className="page-section">
        <div className="requerimentos-header">
          <div>
            <h2 className="section-title">Listagem de requerimentos</h2>
            <p className="section-subtitle">
              Acompanhe solicitações abertas, protocolos e situação de análise.
            </p>
          </div>

          <Link className="novo-requerimento-button" to="/requerimentos/novo">
            ➕ Novo Requerimento
          </Link>
        </div>

        {carregando && <p className="requerimentos-feedback">Carregando...</p>}
        {erro && <p className="requerimentos-error">{erro}</p>}

        {!carregando && !erro && (
          <div className="requerimentos-grid">
            {requerimentos.map((requerimento) => (
              <article className="requerimento-card" key={requerimento.id}>
                <h3>{requerimento.tipo}</h3>
                <p className="requerimento-protocolo">
                  Protocolo {requerimento.protocolo || `#${requerimento.id}`}
                </p>
                <p className="requerimento-text">{requerimento.descricao}</p>
                <span
                  className={`status-badge ${getStatusClass(
                    requerimento.status,
                  )}`}
                >
                  {requerimento.status}
                </span>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="page-section">
        <h3 className="section-title">Histórico recente</h3>
        <p className="section-subtitle">Últimos requerimentos cadastrados.</p>

        {carregando && <p className="requerimentos-feedback">Carregando...</p>}
        {erro && <p className="requerimentos-error">{erro}</p>}

        {!carregando && !erro && (
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
                {requerimentos.map((requerimento) => (
                  <tr key={requerimento.id}>
                    <td>{requerimento.tipo}</td>
                    <td>{requerimento.protocolo || `#${requerimento.id}`}</td>
                    <td>{requerimento.dataRequerimento}</td>
                    <td>
                      <span
                        className={`status-badge ${getStatusClass(
                          requerimento.status,
                        )}`}
                      >
                        {requerimento.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}

export default RequerimentosPage;
