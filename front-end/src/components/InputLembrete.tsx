import React, { useState } from 'react';
import api from '../services/api';

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
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log(error);
      console.log(data);
      alert('Erro ao criar lembrete.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Digite o nome do Lembrete."
          value={nome}
          onChange={handleNomeChange}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Digite a data do Lembrete no formato DD/MM/YYYY"
          value={data}
          onChange={handleDataChange}
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default InputLembrete;
