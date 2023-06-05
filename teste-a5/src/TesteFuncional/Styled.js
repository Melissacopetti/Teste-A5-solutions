import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const TableContainer = styled.table`
  width: 100%;
  border: 1px solid #EEEEEE;
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
  background: #EEEEEE;
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
`;