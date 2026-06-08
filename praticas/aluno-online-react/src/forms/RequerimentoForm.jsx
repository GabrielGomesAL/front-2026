import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { cadastrarRequerimento } from '../services/requerimentoService';
import './RequerimentoForm.css';

function RequerimentoForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tipo: '',
      descricao: '',
      dataRequerimento: '26/05/2026',
    },
  });

  async function onSubmit(data) {
    const novoRequerimento = {
      ...data,
      status: 'Em análise',
    };

    const requerimentoCadastrado =
      await cadastrarRequerimento(novoRequerimento);

    console.log('Requerimento cadastrado:', requerimentoCadastrado);
    reset();
    navigate('/requerimentos');
  }

  return (
    <main className="page-main requerimento-form-page">
      <section className="page-section requerimento-form-section">
        <h2 className="section-title">Novo Requerimento</h2>
        <p className="section-subtitle">
          Preencha os dados para registrar uma nova solicitação.
        </p>

        <form className="requerimento-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="requerimento-form-field">
            <label htmlFor="tipo">Tipo de Requerimento</label>
            <select
              id="tipo"
              {...register('tipo', {
                required: 'Tipo é obrigatório',
              })}
            >
              <option value="">Selecione um tipo...</option>
              <option value="Declaração de matrícula">
                Declaração de matrícula
              </option>
              <option value="2ª via de boleto">2ª via de boleto</option>
              <option value="Aproveitamento de disciplina">
                Aproveitamento de disciplina
              </option>
              <option value="Histórico escolar">Histórico escolar</option>
            </select>
            {errors.tipo && (
              <p className="requerimento-form-error">{errors.tipo.message}</p>
            )}
          </div>

          <div className="requerimento-form-field">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              rows="6"
              {...register('descricao', {
                required: 'Descrição é obrigatório',
                minLength: {
                  value: 10,
                  message: 'Descrição deve ter no mínimo 10 caracteres',
                },
              })}
            />
            {errors.descricao && (
              <p className="requerimento-form-error">
                {errors.descricao.message}
              </p>
            )}
          </div>

          <div className="requerimento-form-field requerimento-form-date">
            <label htmlFor="dataRequerimento">Data do Requerimento</label>
            <input
              id="dataRequerimento"
              type="text"
              {...register('dataRequerimento')}
            />
          </div>

          <div className="requerimento-form-actions">
            <Link className="requerimento-cancel-button" to="/requerimentos">
              Cancelar
            </Link>
            <button type="submit" className="requerimento-save-button">
              Salvar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default RequerimentoForm;
