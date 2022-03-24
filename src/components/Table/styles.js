import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .table {
        text-align: left;
        border-collapse: collapse;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }
      
      .table thead th{
        padding-top: 2rem;
      }
      
      .table tbody:last-child tr:last-child td{
        padding-bottom: 2rem;
      }
      
      .table th {
        color: var(--dark-color);
        font-size: 1.5rem;
        padding-bottom: 2rem;
      }
      
      .table td {
        color: var(--main-color);
        font-size: 1.3rem;
        padding-bottom: 1rem;
      }
`;