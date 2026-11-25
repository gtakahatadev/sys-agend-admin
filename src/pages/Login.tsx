import "../css/global.css";
import { useState } from "react";

interface LoginProps {
  aoCriarConta: () => void;
}

export default function Login(props: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function acessSystem() {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const dataToken = await response.json();
//nessa variavel estou armazenando dados da autorização do token e preciso enviar uma nova autorização ao backend para acessar a rota protegida

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <main className="main">
        <nav className="mainNav">
          <a href="" className="navLogo">
            SysAgend
          </a>
          <a href="" className="navClinic">
            Área da clínica
          </a>
        </nav>
        <div className="containerForm">
          <form action="" className="form">
            <img src="" alt="" className="formImg" />
            <p className="formParag">Acesso administrativo</p>
            <h3 className="formtitle">Bem-vindo(a) de volta</h3>
            <p className="formParag">
              Entre para acessar a área administrativa da clínica.
            </p>
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              placeholder="voce@clinica.com.br"
              className="formInput"
              value={email}
            />
            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="formInput"
              value={password}
            />
            <button className="formButton">Entrar</button>
            <span className="containerSignin">
              <p className="signinLabel">Recebeu um convite?</p>
              <button className="siginButton" onClick={props.aoCriarConta}>
                Crie sua conta
              </button>
            </span>
          </form>
        </div>
      </main>
    </>
  );
}
