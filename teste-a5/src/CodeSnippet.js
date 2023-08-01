import React, { useRef } from "react";
import ClipboardJS from "clipboard";
import styled from "styled-components";

const CodeSnippet = ({ code }) => {
  const codeRef = useRef(null);

  const handleCopy = () => {
    const clipboard = new ClipboardJS(codeRef.current);
    clipboard.on("success", () => {
      console.log("Código copiado com sucesso!");
    });
    clipboard.on("error", () => {
      console.error("Falha ao copiar o código!");
    });
    clipboard.onClick({ currentTarget: codeRef.current });
  };

  return (
    <CodeContainer>
      <CodeBox ref={codeRef}>
        <Code>{code}</Code>
        <CopyButton onClick={handleCopy}>Copiar</CopyButton>
      </CodeBox>
    </CodeContainer>
  );
};

const breakpointMobile = "768px";

const CodeBox = styled.pre`
  background: #000;
  margin-left: 15px;
  width: 100%;

  @media (max-width: ${breakpointMobile}) {
    margin-left: 0;
  }
`;

const Code = styled.code`
  background: #000;
  font-size: 1rem;
  margin-left: 15px;
  width: 100%;

  @media (max-width: ${breakpointMobile}) {
    margin-left: 0;
  }
`;

const CodeContainer = styled.div`
  width: 100%;
  max-width: 60vw;
  min-width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #000;
  color: #fff;
  overflow: hidden;
  margin-bottom: 16px;
  margin: 0 auto;

  @media (max-width: ${breakpointMobile}) {
    max-width: 90vw;
  }
`;

const CopyButton = styled.button`
  display: none;
  top: 12px;
  right: 12px;
  border: none;
  background-color: #666;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  outline: none;

  ${CodeContainer}:hover & {
    display: block;
  }
`;

export default CodeSnippet;
