import React, { useState } from 'react';
import { Container, Form, ContainerInputs, ContainerTagsAndPrice, WrapperTextArea, ContainerButton, WrapperInput } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { InputImg } from '../../components/InputImg';
import { InputCategory } from '../../components/InputCategory';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

export function AddDish() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [image, setImage] = useState(null);

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveLink(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewDish() {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('tags', JSON.stringify(tags));

      if (image) {
        formData.append('image', image);
      }

      await api.post("/dishes/files", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert("Prato criado!");
    } catch (error) {
      console.error("Erro ao criar prato:", error);
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <Link to="/">Voltar</Link>
          <h1>Adicionar Prato</h1>

          <ContainerInputs>
            <WrapperInput className='image'>
              <label htmlFor="input1">Imagem do prato</label>
              <InputImg
                placeholder="input 1"
                id="input1"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </WrapperInput>

            <WrapperInput className='name'>
              <label htmlFor="input2">Nome</label>
              <Input
                id="input2"
                placeholder="Ex: salada"
                onChange={(e) => setTitle(e.target.value)}
              />
            </WrapperInput>

            <WrapperInput className='category'>
              <label htmlFor="input3">Categoria</label>
              <InputCategory options={["Refeição", "Sobremesa", "Bebida"]} id="input3" />
            </WrapperInput>
          </ContainerInputs>

          <ContainerTagsAndPrice>
            <WrapperInput>
              <label htmlFor="input4">Ingredientes</label>
              <div id='input4' className='container-tags'>
                {tags.map((tag, index) => (
                  <Tag
                    key={String(index)}
                    value={tag}
                    onClick={() => { handleRemoveLink(tag) }}
                  />
                ))}
                <Tag
                  isNew
                  placeholder="Nova tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
              </div>
            </WrapperInput>

            <WrapperInput className='price'>
              <label htmlFor="input5">Preço</label>
              <Input
                id="input5"
                type="number"
                placeholder="R$: 00,00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </WrapperInput>
          </ContainerTagsAndPrice>

          <WrapperTextArea>
            <label htmlFor="textarea">Descrição</label>
            <textarea
              id="textarea"
              onChange={(e) => setDescription(e.target.value)}
            />
          </WrapperTextArea>

          <ContainerButton>
            <Button
              title="Salvar alterações"
              onClick={handleNewDish}
            />
          </ContainerButton>
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
