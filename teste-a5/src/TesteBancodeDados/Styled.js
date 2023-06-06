import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  position:absolute;
  flex-direction: column;
  padding: 2vw;
  width:100%;
  min-height: 100vh;
  margin-bottom:10vh;
  background-color:#ffbe94;
  p {
    text-align: justify;
    line-height: 120%;
    font-size: 1rem;
    margin: 5px 20px;
    width: 80vw;
    min-width: 400px;
    max-width: 1000px;
    margin-bottom: 30px;
  }
  h3 {
    font-size: 1.5rem;
    text-decoration: underline;
    color: #e84c24;
  }
  h2 {
    font-size: 1.5rem;
    margin: 20px;
  }
  button {
    background-color: #e74c3c;
    color: #fff;
    position: relative;
    width: 150px;
    border: none;
    padding: 1em;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s;
    border-radius: 5px;
    opacity: 0.8;
    letter-spacing: 1px;
    box-shadow: #c0392b 0px 7px 2px, #000 0px 8px 5px;
    margin:40px;
  }
  &:hover {
    opacity: 1;
  }
  &:active {
    top: 4px;
    box-shadow: #c0392b 0px 3px 2px, #000 0px 3px 5px;
  }
`;

export const TableImage = styled.img`
  width: 60vw;
`;

export const CodeBox = styled.pre`
  background: #000;
  margin-left: 15px;
`;
export const Code = styled.code`
  background: #000;
  font-size: 1rem;
  margin-left: 15px;
`;

export const CodeContainer = styled.div`
  width: 60vw;
  min-width: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: #000;
  color: #fff;
  overflow: hidden;
  margin-bottom: 16px;
`;