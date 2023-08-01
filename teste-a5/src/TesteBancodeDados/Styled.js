import styled from "styled-components";

const breakpointMobile = "768px";
const breakpointTablet = "992px";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw;
  width: 100%;
  min-height: 100vh;
  background-color: #ffbe94;

  p {
    text-align: justify;
    line-height: 120%;
    font-size: 1rem;
    margin: 5px 20px;
    width: 80vw;
    margin-bottom: 30px;

    @media (max-width: ${breakpointTablet}) {
      width: 90vw;
    }

    @media (max-width: ${breakpointMobile}) {
      width: 95vw;
    }
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
    margin: 40px;
    align-self: center;

    @media (max-width: ${breakpointMobile}) {
      width: 150px;
    }
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
  width: 100%;
  max-width: 95vw;
  margin: 0 auto;
  @media (max-width: ${breakpointMobile}) {
    margin-left: 0;
  }
`;

export const CodeBox = styled.pre`
  background: #000;
  margin-left: 15px;
  width: 100%;

  @media (max-width: ${breakpointMobile}) {
    margin-left: 0;
  }
`;

export const Code = styled.code`
  background: #000;
  font-size: 1rem;
  margin-left: 15px;
  width: 100%;

  @media (max-width: ${breakpointMobile}) {
    padding-left: -30px;
    font-size: 0.8rem;
  }
`;

export const CodeContainer = styled.div`
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
    margin-left: 2px;
  }
`;
