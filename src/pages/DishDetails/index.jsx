import { useState, useEffect } from 'react'
import { Container, Details, ImgFood, ContainerText, ContainerButton, Tags } from './styles'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { ButtonMore } from '../../components/ButtonMore'
import { Footer } from '../../components/Footer'

import { Link, useParams } from 'react-router-dom'

import { api } from '../../services/api'

export function DishDetails() {
  const [data, setData] = useState(null)

  const params = useParams()

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes/${params.id}`)
      console.log(response.data)
      setData(response.data)
    }

    fetchDishes()
  }, [])

  return (
    <Container>

      <Header />

      <Link to="/">Voltar</Link>

      {
        data &&
        <main>

          <Details>
            <ImgFood>
              <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="Foto do prato" />
            </ImgFood>

            <ContainerText>

              <h2>{data.title}</h2>
              <p>{data.description}</p>

              {
                data.tags &&
                <Tags>
                  {
                    data.tags.map(tag => (
                      <Tag
                        key={String(tag.id)}
                        title={tag.name}
                      />
                    ))
                  }
                </Tags>
              }

              <ContainerButton>
                <ButtonMore />
                <Button title="incluir 25,90" />
              </ContainerButton>

            </ContainerText>


          </Details>

        </main>
      }

      <Footer />

    </Container>
  )
}