import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2vw;
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
    margin:50px;
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
    margin-top:20px;
  }
  &:hover {
    opacity: 1;
  }
  &:active {
    top: 4px;
    box-shadow: #c0392b 0px 3px 2px, #000 0px 3px 5px;
  }
`;

export const CodeContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 10px;
  margin-bottom: 20px;
  width: 60vw;
  min-width: 500px;
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
  width: 50vw;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableContainer = styled.table`
  width: 30vw;
  border: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  flex-direction: column;
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
  width: 80vw;
  height: 150vh;
`;
export const TableImage = styled.img`
  width: 60vw;
`;
