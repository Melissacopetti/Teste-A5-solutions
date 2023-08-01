import styled from "styled-components";

const breakpointMobile = "768px";
const breakpointTablet = "992px";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw;
  background-color: #ffbe94;

  p {
    text-align: justify;
    line-height: 120%;
    font-size: 1rem;
    margin: 5px 20px;
    width: 80vw;
    margin: 30px 10px;

    @media (max-width: ${breakpointTablet}) {
      width: 65vw;
    }

    @media (max-width: ${breakpointMobile}) {
      width: 90vw;
    }
  }

  h3 {
    font-size: 1.5rem;
    text-decoration: underline;
    color: #e84c24;
    margin: 20px 50px;

    @media (max-width: ${breakpointMobile}) {
      margin: 20px;
    }
  }

  h2 {
    font-size: 1.5rem;
    margin: 20px;

    @media (max-width: ${breakpointMobile}) {
      margin: 10px;
    }
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
    margin-top: 20px;
    align-self: center;

    @media (max-width: ${breakpointMobile}) {
      width: 150px;
    }
  }
`;

export const CodeContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 60vw;
  min-width: 300px;
  margin: 0 auto;
`;

export const CopyButton = styled.button`
  background-color: #fff;
  color: #333;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TableContainer = styled.table`
  width: 100%;
  border: 1px solid #eeeeee;
`;

export const TableHeader = styled.thead`
  background: #000;
`;

export const TableHeaderCell = styled.th`
  color: white;
  padding: 12px;
  background: #000;
`;

export const TableBody = styled.tbody`
  background: #eeeeee;
`;

export const TableRow = styled.tr`
  justify-content: center;
  align-items: center;

  &:nth-of-type(odd) {
    background: white;
  }

  &.new-row {
    background: lightgreen;
  }
`;

export const TableData = styled.td`
  padding: 12px;
  display: flex;
  align-items: center;
`;

export const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
`;

export const StyledTableCell = styled.td`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  background-color: #fff;
`;

export const StyledTableHeaderCell = styled.th`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  background-color: #d3d3d3;
`;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

export const FluxogramaImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 150vh;
  margin: 20px auto;

  @media (max-width: ${breakpointMobile}) {
    max-height: 100vh;
  }
`;

export const TableImage = styled.img`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
`;
