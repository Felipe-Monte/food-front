import { useState } from "react";
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TitleLogo } from "../../components/TitleLogo";

import imgLogo from '../../assets/poligono.svg'

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
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
        <h1>Crie a sua conta</h1>

        <label htmlFor="name">Seu nome</label>
        <Input
          id="name"
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Cadastrar"
          onClick={handleSignUp}
        />

        <Link to="/">
          <FiArrowLeft />
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}