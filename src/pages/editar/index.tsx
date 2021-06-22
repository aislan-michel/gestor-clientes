import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { Container, Form, Editar, Voltar, Titulo } from './styles';

import ICliente from '../../interfaces/ICliente';
import INovoCliente from '../../interfaces/INovoCliente';

interface clienteParametro {
     id: string;
}

const Home: React.FC = () => {
     const { params } = useRouteMatch<clienteParametro>();
     const [cliente, setCliente] = useState('');
     const [telefone, setTelefone] = useState('');
     const [email, setEmail] = useState('');

     useEffect(() => {
          axios({
               method: 'get',
               url: `http://localhost:3333/clients/${params.id}`,
          }).then((response: AxiosResponse<ICliente>) => {
               const { cliente, telefone, email } = response.data;

               setCliente(cliente);
               setTelefone(telefone);
               setEmail(email);
          }).catch((error: AxiosError) => {
               console.log(error);
          });
     }, []);

     function submitForm(event: FormEvent<HTMLFormElement>): void {
          event.preventDefault();

          const novoCliente: INovoCliente = {
               cliente,
               telefone,
               email,
          };

          axios({
               method: 'put',
               url: `http://localhost:3333/clients/${params.id}`,
               data: novoCliente,
          }).then(() => {
               window.location.href = '/';
          }).catch((error: AxiosError) => {
               console.log(error);
          });
     }

     return (
          <Container>
               <h3>Editar</h3>
               <hr />
               <br />

               <Form onSubmit={submitForm}>
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

                    <Editar type="submit">Editar</Editar>
                    <Voltar type="button">
                         <Link to={`/`}>Voltar</Link>
                    </Voltar>
               </Form>
          </Container>
     );
};

export default Home;
