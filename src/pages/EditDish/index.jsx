import { Container, Form, ContainerInputs, ContainerTagsAndPrice, WrapperTextArea, ContainerButton, WrapperInput } from './styles'

import { Header } from '../../components/Header'

import { Input } from '../../components/Input'
import { InputImg } from '../../components/InputImg'
import { InputCategory } from '../../components/InputCategory'

import { Tag } from '../../components/Tag'

import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Link } from 'react-router-dom'

export function EditDish() {
  return (
    <Container>
      <Header />

      <main>

        <Form>

          <Link to="/">Voltar</Link>

          <h1>Editar Prato</h1>

          <ContainerInputs>
            <WrapperInput className='image'>
              <label htmlFor="input1">Imagem do prato</label>
              <InputImg placeholder="input 1" id="input1" />
            </WrapperInput>

            <WrapperInput className='name'>
              <label htmlFor="input2">Nome</label>
              <Input placeholder="Ex: salada" id="input2" />
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
                <Tag title='item1' />
                <Tag title='item2' />
              </div>
            </WrapperInput>

            <WrapperInput className='price'>
              <label htmlFor="input5">Preço</label>
              <Input type="number" placeholder="R$: 00,00" id="input5" />
            </WrapperInput>

          </ContainerTagsAndPrice>

          <WrapperTextArea>
            <label htmlFor="textarea">Descrição</label>
            <textarea id="textarea"></textarea>
          </WrapperTextArea>

          <ContainerButton>
            <Button title="Salvar alterações" />
          </ContainerButton>

        </Form>

      </main>

      <Footer />

    </Container>
  )
}