import React from 'react';
import { Container, FoodImg, ContainerButton, Edit , Content} from './styles';
import { BiEdit } from 'react-icons/bi';
import { ButtonMore } from '../ButtonMore';
import { Button } from '../Button';

export function FoodCard({ dish }) {
  return (
    <Container>
      <Content to={`/details/${dish.id}`}>
        <FoodImg>
          <img src={dish.image} alt={`Imagem de ${dish.title}`} />
        </FoodImg>

        <h1>{dish.title}</h1>
        <p>{dish.description}</p>

        <span>{dish.price}</span>
      </Content>

      <Edit to={`/edit/${dish.id}`}>
        <BiEdit />
      </Edit>

      <ContainerButton>
        <ButtonMore />
        <Button title="Incluir" />
      </ContainerButton>
    </Container>
  );
}
