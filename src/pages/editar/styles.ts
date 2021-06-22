import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Tabela = styled.table`
  margin-top: 2rem;
  tr td {
    border: 1px solid #ddd;
  }
`;

export const Editar = styled.button`
  margin-top: 30px;
  margin-bottom: 20px;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
`;

export const Voltar = styled.button`
  margin-bottom: 20px;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;

  a {
    color: white;
    text-decoration: none;
  }
`;

export const Titulo = styled.label`
  display: inline-block;
  margin-bottom: .5rem;
  margin-top: .5rem;
`;

