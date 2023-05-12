import React, { useState } from 'react';
import api from '../services/api';
import styled from 'styled-components';

const Container = styled.div`
  background: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  max-width: 550px;
  width: 100%;
  margin: auto;
`;



const Form = styled.form`
  width: 400px;
  padding: 5px;
  margin-right: 10px;
  
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 5px;
  margin: 10px auto;
  width: 100px;
  border-radius: 16px;
  background-color: #33b4c4;
  color: white;
  border: none;
  cursor: pointer;
  display: block;
  button:hover {
    background-color: #005ea3;
  }
`;

const Title = styled.h1`
  color: #e31c79;
  
`;
const InputLembrete = () => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await api.post('/lembretes/cadastrar', { nome, data });
      alert('Lembrete criado com sucesso!');
      window.location.reload();
    } catch (error) {
      alert('Erro ao criar lembrete.');
    }
  };

  return (
    <Container>
      <Title>NOVO LEMBRETE</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          className="form-input"
          type="text"
          placeholder="Nome do Lembrete"
          value={nome}
          onChange={handleNomeChange}
        />
        <Input
          className="form-input"
          type="text"
          placeholder="Data do Lembrete (no formato DD/MM/YYYY)"
          value={data}
          onChange={handleDataChange}
        />
        <Button type="submit">Criar</Button>
      </Form>
    </Container>
  );
};

export default InputLembrete;