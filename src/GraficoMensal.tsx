function GraficoMensal() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0f1115',
        padding: '32px',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h1>
          Despesas mensais
        </h1>

        <p
          style={{
            color: '#9ca3af',
          }}
        >
          Acompanhe suas despesas ao longo dos meses.
        </p>

        <div
          style={{
            marginTop: '30px',
            backgroundColor: '#181b21',
            border: '1px solid #272b33',
            borderRadius: '12px',
            padding: '24px',
          }}
        >
          <h2>
            Gastos por mês
          </h2>

          <p
            style={{
              color: '#9ca3af',
            }}
          >
            O gráfico será adicionado aqui.
          </p>
        </div>
      </div>
    </main>
  )
}

export default GraficoMensal