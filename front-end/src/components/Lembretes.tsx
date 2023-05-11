import { useEffect, useState } from "react";
import api from "../services/api";

interface Lembretes {
  [key: string]: Array<{
    id: number;
    nome: string;
    data: string;
  }>
}

function Lembretes() {
  const [lembretes, setLembretes] = useState<Lembretes>({});

  useEffect(() => {
    api.get('lembretes/ordenados-por-data')
    .then(response => {
      console.log(response.data);
      setLembretes(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/lembretes/deletar/${id}`);
      const updatedLembretes = {...lembretes};
      Object.keys(updatedLembretes).forEach((key) => {
        updatedLembretes[key] = updatedLembretes[key].filter((lembrete) => lembrete.id !== id);
      });
      setLembretes(updatedLembretes);
      alert('Lembrete apagado com sucesso!');
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert('Erro ao deletar lembrete.');
    }
  };

  return (
    <div>
      <h2>Lembretes</h2>
      <ul>
        {Object.keys(lembretes).map((data, index) => (
          <li key={index}>
            <h3>{data}</h3>
            <ul>
              {lembretes[data].map((lembrete, index) => (
                <li key={index}>
                  {lembrete.nome} 
                  <button className="button-deletar" onClick={() => handleDelete(lembrete.id)}>Deletar</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lembretes;