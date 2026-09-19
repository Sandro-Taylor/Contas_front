import type { CSSProperties } from 'react'

export const styles: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    padding: '32px',
    fontFamily: 'Arial, sans-serif',
    color: '#1f2937',
  },

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  header: {
    marginBottom: '32px',
  },

  title: {
    margin: 0,
    color: '#000000',
    fontSize: '32px',
  },

  subtitle: {
    marginTop: '8px',
    color: '#000000',
  },

  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginBottom: '32px',
  },

  card: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
  },

  cardTitle: {
    margin: 0,
    fontSize: '15px',
    color: '#000000',
    fontWeight: 500,
  },

  cardValue: {
    marginTop: '12px',
    color: '#000000',
    marginBottom: 0,
    fontSize: '28px',
  },

  content: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '20px',
  },

  section: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
  },

  sectionTitle: {
    marginTop: 0,
    marginBottom: '20px',
    fontSize: '20px',
  },

  transaction: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 0',
    borderBottom: '1px solid #eeeeee',
  },

  transactionInfo: {
    flex: 1,
  },

  transactionName: {
    margin: 0,
    color: '#050505',
    fontWeight: 600,
  },

  transactionDetails: {
    margin: '5px 0 0',
    color: '#050505',
    fontSize: '13px',
  },

  transactionRight: {
    display: 'flex',
    color: '#050505',
    alignItems: 'center',
    gap: '15px',
  },

  income: {
    color: '#16a34a',
    fontWeight: 600,
  },

  expense: {
    color: '#dc2626',
    fontWeight: 600,
  },

  deleteButton: {
    border: 'none',
    backgroundColor: '#fee2e2',
    color: '#dc2626',
    padding: '7px 10px',
    borderRadius: '6px',
    cursor: 'pointer',
  },

  button: {
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    padding: '12px 18px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontSize: '14px',
    fontWeight: 600,
  },

  input: {
    padding: '11px',
    border: '1px solid #000000',
    borderRadius: '8px',
    fontSize: '15px',
  },

  select: {
    padding: '11px',
    border: '1px solid #000000',
    borderRadius: '8px',
    fontSize: '15px',
    backgroundColor: '#2b2e32',
  },

  cancelButton: {
    border: 'none',
    backgroundColor: '#2b2e32',
    color: '#374151',
    padding: '12px 18px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
  },
}
