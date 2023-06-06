import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding:2vw;
   background-color:#ffbe94;
  p {
    text-align: justify;
    line-height: 120%;
    font-size: 1rem;
    margin: 5px 20px;
    width:80vw;
    min-width:400px;
    max-width:1000px;
  }
  h3 {
    font-size: 1.5rem;
    text-decoration: underline;
    color: #e84c24;
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
    margin-top:20px;
  }
  &:hover {
    opacity: 1;
  }
  &:active {
    top: 4px;
    box-shadow: #c0392b 0px 3px 2px, #000 0px 3px 5px;
  }
  section{
    display:flex;
    align-items:flex-start;
    margin-top:50px;
    width:50vw;
    flex-direction:column;
  }
`;

export const Title = styled.h1`
  border: #e84c24 double 2px;
  border-radius: -50%;
  padding: 10px 20px;
  font-size: 2rem;
  font-family: "Oswald", sans-serif;
  display: flex;
  align-items: center;
  width: 300px;
  margin: 10vh 0;
`;

export const DivButtons = styled.div`
width:25vw;
display:flex;
align-items:flex-start;
flex-direction:row;
justify-content:space-between;
min-width:400px;

`
export const DivButtonsA = styled.div`
width:50vw;
display:flex;
align-items:flex-start;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;

`