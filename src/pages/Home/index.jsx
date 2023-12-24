import React, { useState, useEffect } from "react"
import { Container, Banner } from "./styles"

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import bannerImg from '../../assets/bannerImg.png'

import { Slider } from "../../components/Slider"
import { api } from "../../services/api"

export function Home() {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    api.get('/dishes?user_id=1&title&tag')
      .then(response => {
        const dishData = response.data.map(dish => ({
          ...dish,
          image: `${api.defaults.baseURL}/files/${dish.image}`,
        }))
        setDishes(dishData)
      })
      .catch(error => {
        console.error('Erro ao buscar os pratos:', error)
      })
  }, [])

  // useEffect(() => {
  //   api.get('/dishes?user_id=1&title&tag')
  //     .then(response => {
  //       const dishData = response.data
  //       setDishes(dishData)
  //     })
  //     .catch(error => {
  //       console.error('Erro ao buscar os pratos:', error)
  //     })
  // }, [])

  return (
    <Container>
      <Header />
      <main>
        <Banner>
          <div className='container-img'>
            <img src={bannerImg} alt="banner imagem" />
          </div>
          <div className='container-text'>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Banner>

        <Slider title="Refeições" dishes={dishes} />
        <Slider title="Sobremesas" dishes={dishes} />
        <Slider title="Bebidas" dishes={dishes} />

      </main>
      <Footer />
    </Container>
  )
}
