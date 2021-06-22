import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Tabela = styled.table`
  text-indent: initial;
  border-spacing: 2px;
  border-collapse: collapse;
  
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }

  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
`;

export const Titulo = styled.label`
  display: inline-block;
  margin-bottom: .5rem;
  margin-top: .5rem;
`;

export const Cadastrar = styled.button`
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
  background-color: #007bff;
  border-color: #007bff;

  a {
    color: white;
    text-decoration: none;
  }
`;

export const Excluir = styled.button`
  margin-left: 30px;
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
  background-color: #dc3545;
  border-color: #dc3545;
`;

