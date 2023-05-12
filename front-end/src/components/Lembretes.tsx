import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { LembretesClass } from '../models/LembretesClass.tsx';
import api from "../services/api";
import styled from "styled-components";

const Container = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  max-width: 850px;
  width: 100%;
  margin: auto;
`;

const Title = styled.h2`
  color: #e31c79;
  text-align: center;
  
`;

const Button = styled.button`
  margin: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  svg {
    transition: all 0.2s ease-in-out;
  }
  &:hover svg {
    transform: scale(1.2);
  }
`;

const CustomList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%; 
`;

const CustomListItem = styled.li`
  margin: 10;
  padding: 10;
  width: 100%;
  word-wrap: break-word;
`;

const CustomListHeader = styled.h3`
  color: #333;
`;

function Lembretes() {
  const [lembretes, setLembretes] = useState< LembretesClass >({});

  useEffect(() => {
    api.get('lembretes/listar-ordenados-por-data')
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
      alert('Lembrete apagado com sucesso!');
      window.location.reload();
    } catch (error) {
      alert('Erro ao deletar lembrete.');
    }
  };

  return (
    <Container>
      <Title>LEMBRETES</Title>
      <CustomList>
        {Object.keys(lembretes).map((data, index) => (
          <CustomListItem key={index}>
            <CustomListHeader>{data}</CustomListHeader>
            <CustomList>
            {lembretes[data].map((lembrete, index) => (
              <CustomListItem key={index}>
                {lembrete.nome} 
                <Button onClick={() => handleDelete(lembrete.id)}>
                  <FontAwesomeIcon icon={faTrashAlt} style={{color: "#ff0000"}} />
                </Button>
              </CustomListItem>
            ))}
            </CustomList>
          </CustomListItem>
        ))}
      </CustomList>
    </Container>
  );
}

export default Lembretes;