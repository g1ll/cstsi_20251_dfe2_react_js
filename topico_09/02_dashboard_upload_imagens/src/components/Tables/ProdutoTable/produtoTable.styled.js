import styled from 'styled-components';

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }

    tr:nth-child(even) {
        background-color: lightgray;
    }

    tr:hover {
        background-color: #f1f1f1;
    }
    td:nth-child(2), th:nth-child(2) {
        // background-color:red;
        width: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }    

    @media(preference-color-scheme: dark) {
         tr:nth-child(even) {
            background-color: blue;
        }
    }
`;