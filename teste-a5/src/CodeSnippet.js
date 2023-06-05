import React, { useRef } from 'react';
import ClipboardJS from 'clipboard';

const CodeSnippet = ({ code }) => {
  const codeRef = useRef(null);

  const handleCopy = () => {
    const clipboard = new ClipboardJS(codeRef.current);
    clipboard.on('success', () => {
      console.log('Código copiado com sucesso!');
    });
    clipboard.on('error', () => {
      console.error('Falha ao copiar o código!');
    });
    clipboard.onClick({ currentTarget: codeRef.current });
  };

  return (
    <div style={styles.container}>
      <pre style={styles.codeContainer} ref={codeRef}>
        <code style={styles.code}>{code}</code>
      </pre>
      <button style={styles.copyButton} onClick={handleCopy}>
        Copiar
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    background: '#f7f7f7',
    overflow: 'hidden',
    marginBottom: '16px',
  },
  codeContainer: {
    margin: 0,
    padding: '12px',
    fontFamily: 'monospace',
    fontSize: '14px',
    lineHeight: '20px',
    whiteSpace: 'pre-wrap',
    overflowX: 'auto',
  },
  code: {
    display: 'block',
    color: '#333',
  },
  copyButton: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#666',
    fontSize: '14px',
    cursor: 'pointer',
    outline: 'none',
  },
};

export default CodeSnippet;
