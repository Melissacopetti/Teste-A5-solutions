import styled from "styled-components";

const breakpointMobile = "768px";
const breakpointTablet = "992px";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vw;
  background-color: #ffbe94;

  p {
    text-align: justify;
    line-height: 120%;
    font-size: 1rem;
    margin: 5px 20px;
    width: 80vw;
    max-width: 1000px;
    margin: 0 auto;
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
    margin-top: 30px;
  }

  &:hover {
    opacity: 1;
  }

  &:active {
    top: 4px;
    box-shadow: #c0392b 0px 3px 2px, #000 0px 3px 5px;
  }

  section {
    display: flex;
    align-items: flex-start;
    margin-top: 50px;
    width: 100%;
    flex-direction: column;
    max-width: 1000px;
    margin: 20px auto;
  }

  @media (max-width: ${breakpointTablet}) {
    p {
      width: 90vw;
    }

    section {
      width: 90vw;
    }
  }

  @media (max-width: ${breakpointMobile}) {
    p {
      align-self: flex-start;
      margin-left: -3px;
      width: 75vw;
    }

    section {
      width: 95vw;
    }

    button {
      width: 100%;
    }
    h3 {
      margin-top: 20px;
    }
  }
`;

export const Title = styled.h1`
  border: #e84c24 double 2px;
  border-radius: -50px;
  padding: 10px 20px;
  font-size: 2rem;
  font-family: "Oswald", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
  margin: 5vh 0;

  @media (max-width: ${breakpointTablet}) {
    width: 90vw;
  }

  @media (max-width: ${breakpointMobile}) {
    width: 60vw;
  }
`;

export const DivButtons = styled.div`
  width: 25vw;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${breakpointMobile}) {
    flex-direction: column;
    max-width: 150px;
    width: 50%;
    margin-left: 15vw;
    margin-bottom: 30px;
  }
`;

export const DivButtonsA = styled.div`
  width: 50vw;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${breakpointMobile}) {
    max-width: 150px;
    width: 50%;
    margin-left: 15vw;
  }
`;
