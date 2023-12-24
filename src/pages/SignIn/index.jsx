import { useState } from 'react';
import { FiMail, FiLock, FiUserPlus } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TitleLogo } from "../../components/TitleLogo"

import imgLogo from '../../assets/poligono.svg'

import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <TitleLogo
        text="Food explorer"
        urlImg={imgLogo}
        imgSize={50}
        textSize={42}
      />

      <Form>
        <h1>Faça seu login</h1>

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <Input
          id="password"
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">
          <FiUserPlus />
          Criar conta
        </Link>
      </Form>
    </Container>
  )
}