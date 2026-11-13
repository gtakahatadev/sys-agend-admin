import { useState } from "react";
import styles from "../css/Signin.module.css";
interface SigninProps {
  aoEntrar: () => void;
}

export default function Signin(props: SigninProps) {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formConfirmPassword, setFormConfirmPassword] = useState("");
  async function requestBackend() {
    try {
      const request = await fetch("http://localhost:3000/admin", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({formName, formEmail, formPassword, formConfirmPassword}),
      });
      const response = await request.json();

    } 
    catch (error){

    }
  }

  return (
    <>
      <main className="main">
        <nav className={styles.mainNav}>
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
            <h3 className="formtitle">Crie sua conta</h3>
            <p className="formParag">
              O cadastro é exclusivo para pessoas convidadas pela clínica.
            </p>
            <label htmlFor="" className="formLabel">
              Nome completo
            </label>
            <input
              type="text"
              placeholder="Seu nome completo"
              className="formInput"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              placeholder="voce@clinica.com.br"
              className="formInput"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
            />
            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="Crie uma senha"
              className="formInput"
              value={formPassword}
              onChange={(e) => setFormPassword(e.target.value)}
            />
            <label htmlFor="">Confirmar senha</label>
            <input
              type="password"
              placeholder="Digite sua senha novamente"
              className="formInput"
              value={formConfirmPassword}
              onChange={(e) => setFormConfirmPassword(e.target.value)}
            />
            <button className="formButton">Criar conta</button>
            <span className="containerSignin">
              <p className="signinLabel" onClick={props.aoEntrar}>
                Já possuí uma conta?
              </p>
              <a href="" className="siginButton">
                Entrar
              </a>
            </span>
          </form>
        </div>
      </main>
    </>
  );
}
