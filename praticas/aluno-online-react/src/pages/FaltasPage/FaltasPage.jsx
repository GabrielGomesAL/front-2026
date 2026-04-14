import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import SummaryCards from '../../components/SummaryCards/SummaryCards';
import DataTable from '../../components/DataTable/DataTable';
import AlertBox from '../../components/AlertBox/AlertBox';
import './FaltasPage.css';

function FaltasPage() {
  const summaryCards = [
    {
      label: 'Total de faltas',
      value: '9',
      helper: 'No semestre atual',
    },
    {
      label: 'Disciplina crítica',
      value: 'BD',
      helper: 'Mais próxima do limite',
    },
    {
      label: 'Situação geral',
      value: 'Atenção',
      helper: 'Mantenha a frequência',
    },
  ];

  const tableColumns = [
    'Disciplina',
    'Aulas dadas',
    'Faltas',
    'Limite',
    'Situação',
  ];

  const tableRows = [
    [
      'Front-end',
      '32',
      '2',
      '8',
      { label: 'Tranquilo', className: 'status-success' },
    ],
    [
      'Banco de Dados',
      '30',
      '5',
      '7',
      { label: 'Atenção', className: 'status-warning' },
    ],
    [
      'Engenharia de Software',
      '28',
      '1',
      '7',
      { label: 'OK', className: 'status-success' },
    ],
    [
      'UX/UI',
      '24',
      '1',
      '6',
      { label: 'OK', className: 'status-success' },
    ],
  ];

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

            <SummaryCards cards={summaryCards} className="faltas-cards" />
          </section>

          <section className="page-section">
            <h3 className="section-title">Faltas por disciplina</h3>
            <p className="section-subtitle">
              Dados resumidos da frequência acadêmica.
            </p>

            <DataTable columns={tableColumns} rows={tableRows} />
          </section>

          <AlertBox
            title="Observação"
            text="Banco de Dados está mais perto do limite de faltas. Evite novas ausências nessa disciplina."
            className="faltas-alert"
          />
        </main>
      </div>
    </div>
  );
}

export default FaltasPage;