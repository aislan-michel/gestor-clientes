import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { Container, Formulario, Tabela, Cadastrar, Titulo, Editar, Excluir } from './styles';

import ICliente from '../../interfaces/ICliente';
import INovoCliente from '../../interfaces/INovoCliente';

const Home: React.FC = () => {
     const [cliente, setCliente] = useState('');
     const [telefone, setTelefone] = useState('');
     const [email, setEmail] = useState('');
     const [clientes, setClientes] = useState<ICliente[]>([]);

     const urlAPI: string = 'http://localhost:3333';

     useEffect(() => {
          axios({
               method: 'get',
               url: `${urlAPI}/clients`,
          }).then((response: AxiosResponse<ICliente[]>) => {
               setClientes(response.data);
          }).catch((error: AxiosError) => {
               console.log(error);
          });
     }, []);

     function cadastrarCliente(event: FormEvent<HTMLFormElement>): void {
          event.preventDefault();

          const novoCliente: INovoCliente = {
               cliente,
               telefone,
               email,
          };

          axios({
               method: 'post',
               url: `${urlAPI}/clients`,
               data: novoCliente,
          }).then((response: AxiosResponse<ICliente>) => {
               const { id, cliente, telefone, email } = response.data;

               const clienteCadastrado: ICliente = {
                    id,
                    cliente,
                    telefone,
                    email
               };

               setClientes([...clientes, clienteCadastrado]);
          }).catch((error: AxiosError) => {
               console.log(error);
          });
     }

     function deletarCliente(id: string): void {
          axios({
               method: 'delete',
               url: `${urlAPI}/clients/${id}`,
          }).then(() => {
               const novosClientes = clientes.filter(cl => {
                    return cl.id !== id;
               });
               setClientes(novosClientes);
          }).catch((error: AxiosError) => {
               console.log(error);
          });
     }

     return (
          <Container>
               <h2>Gestor de Clientes</h2>
               <hr />
               <br />

               <h3>Cadastro</h3>

               <Formulario onSubmit={cadastrarCliente}>
                    <Titulo>Nome:</Titulo>
                    <input
                         placeholder="Digite aqui..."
                         value={cliente}
                         onChange={(e: any) => {
                              setCliente(e.target.value);
                         }}
                    />

                    <Titulo>Telefone:</Titulo>
                    <input
                         placeholder="Digite aqui..."
                         value={telefone}
                         onChange={(e: any) => {
                              setTelefone(e.target.value);
                         }}
                    />

                    <Titulo>E-mail:</Titulo>
                    <input
                         placeholder="Digite aqui..."
                         value={email}
                         onChange={(e: any) => {
                              setEmail(e.target.value);
                         }}
                    />

                    <Cadastrar type="submit">Cadastrar</Cadastrar>
               </Formulario>


               <hr />
               <br />
               <h3>Listagem</h3>
               <br />

               <Tabela>
                    <thead>
                         <tr>
                              <td>Nome</td>
                              <td>Telefone</td>
                              <td>E-mail</td>
                         </tr>
                    </thead>

                    <tbody>
                         {clientes.map(item => {
                              return (
                                   <tr key={item.id}>
                                        <td>{item.cliente}</td>
                                        <td>{item.telefone}</td>
                                        <td>{item.email}</td>
                                        <td>
                                             <Editar type="button">
                                                  <Link to={`/editar/${item.id}`}>Editar</Link>
                                             </Editar>
                                             <Excluir type="button" onClick={() => { deletarCliente(item.id); }}>
                                                  Excluir
                                             </Excluir>
                                        </td>
                                   </tr>
                              );
                         })}
                    </tbody>
               </Tabela>
          </Container>
     );
};

export default Home;
