import { useState } from 'react'
import type { FormEvent } from 'react'
import { styles } from './style.tsx'
type TipoTransacao = 'receita' | 'despesa'

type Categoria =
  | 'Alimentação'
  | 'Moradia'
  | 'Transporte'
  | 'Lazer'
  | 'Saúde'
  | 'Educação'
  | 'Outros'

type Transacao = {
  id: number
  descricao: string
  valor: number
  tipo: TipoTransacao
  categoria: Categoria
  data: string
}


function App() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([
    {
      id: 1,
      descricao: 'Salário',
      valor: 7500,
      tipo: 'receita',
      categoria: 'Outros',
      data: '19/09/2026',
    },
    {
      id: 2,
      descricao: 'Aluguel',
      valor: 1500,
      tipo: 'despesa',
      categoria: 'Moradia',
      data: '10/09/2026',
    },
    {
      id: 3,
      descricao: 'Supermercado',
      valor: 350,
      tipo: 'despesa',
      categoria: 'Alimentação',
      data: '08/09/2026',
    },
    {
      id: 4,
      descricao: 'Internet',
      valor: 100,
      tipo: 'despesa',
      categoria: 'Moradia',
      data: '05/09/2026',
    },
  ])

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState<TipoTransacao>('despesa')
  const [categoria, setCategoria] = useState<Categoria>('Alimentação')
  const [data, setData] = useState('')
  const receitas = transacoes .filter((transacao) => transacao.tipo === 'receita') .reduce((total, transacao) => total + transacao.valor, 0)
  const despesas = transacoes
    .filter((transacao) => transacao.tipo === 'despesa')
    .reduce((total, transacao) => total + transacao.valor, 0)

  const saldo = receitas - despesas

  function adicionarTransacao(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    if (!descricao || !valor || !data) {
      return
    }

    const novaTransacao: Transacao = {
      id: Date.now(),
      descricao,
      valor: Number(valor),
      tipo,
      categoria,
      data,
    }

    setTransacoes((transacoesAnteriores) => [
      novaTransacao,
      ...transacoesAnteriores,
    ])

    setDescricao('')
    setValor('')
    setTipo('despesa')
    setCategoria('Alimentação')
    setData('')
    setMostrarFormulario(false)
  }

  function excluirTransacao(id: number) {
    setTransacoes((transacoesAnteriores) =>
      transacoesAnteriores.filter(
        (transacao) => transacao.id !== id,
      ),
    )
  }

  function formatarMoeda(valor: number) {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <main style={styles.page}>
      <div style={styles.container}>

        <header style={styles.header}>
          <h1 style={styles.title}>Minhas Finanças</h1>
          <p style={styles.subtitle}>Controle suas despesas e acompanhe seu dinheiro.</p>
        </header>

        <section style={styles.cards}>
          <div style={styles.card}>
            <p style={styles.cardTitle}>Saldo atual</p>
            <h2 style={styles.cardValue}>{formatarMoeda(saldo)}</h2>
          </div>
          <div style={styles.card}><p style={styles.cardTitle}>Receitas</p>
            <h2 style={styles.cardValue}>{formatarMoeda(receitas)}</h2>
          </div>
          <div style={styles.card}>
            <p style={styles.cardTitle}>Despesas</p>
            <h2 style={styles.cardValue}>{formatarMoeda(despesas)}</h2>
          </div>
        </section>

        <section style={styles.content}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Transações</h2>
            {transacoes.map((transacao) => (
              <div
                key={transacao.id}
                style={styles.transaction}>
                <div style={styles.transactionInfo}>
                  <p style={styles.transactionName}>{transacao.descricao}</p>
                  <p style={styles.transactionDetails}>{transacao.categoria} • {transacao.data}</p>
                </div>
                <div style={styles.transactionRight}>
                  <span
                    style={transacao.tipo === 'receita'? styles.income: styles.expense}>
                    {transacao.tipo === 'receita'
                      ? '+'
                      : '-'}{' '}
                    {formatarMoeda(transacao.valor)}
                  </span>
                  <button
                    style={styles.deleteButton}
                    onClick={() =>
                      excluirTransacao(transacao.id)}>
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.section}>
            {!mostrarFormulario ? (<>
                <h2 style={styles.sectionTitle}>
                  Ações rápidas
                </h2>
                <button
                  style={styles.button}
                  onClick={() =>
                    setMostrarFormulario(true)}>
                  + Nova transação
                </button></>) : (<>
                <h2 style={styles.sectionTitle}>Nova transação</h2>
                <form style={styles.form} onSubmit={adicionarTransacao}>
                  <label style={styles.label}>Descrição
                    <input style={styles.input} type="text" placeholder="Ex: Mercado" value={descricao} onChange={(event) => setDescricao(event.target.value)}/>
                  </label>
                  <label style={styles.label}>Valor
                    <input style={styles.input}type="number"step="0.01"min="0"placeholder="0,00"value={valor}onChange={(event) =>setValor(event.target.value)}/>
                  </label>
                  <label style={styles.label}>Tipo
                    <select style={styles.select} value={tipo} onChange={(event) =>setTipo( event.target.value as TipoTransacao,)}>
                      <option value="despesa">Despesa</option>
                      <option value="receita">Receita</option>
                    </select>
                  </label>
                  <label style={styles.label}>Categoria
                    <select style={styles.select} value={categoria}onChange={(event) =>setCategoria(event.target.value as Categoria,)}>
                      <option value="Alimentação">Alimentação</option>
                      <option value="Moradia">Moradia</option>
                      <option value="Transporte">Transporte</option>
                      <option value="Lazer">Lazer</option>
                      <option value="Saúde">Saúde</option>
                      <option value="Educação">Educação</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </label>
                  <label style={styles.label}>Data
                    <input style={styles.input}type="date"value={data}onChange={(event) =>setData(event.target.value)}/>
                  </label>
                  <button type="submit"style={styles.button}>Adicionar</button>
                  <button type="button"style={styles.cancelButton}onClick={() =>setMostrarFormulario(false)}>Cancelar</button>
                </form>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App