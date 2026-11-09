import "../css/Signin.css";
interface SigninProps {
  aoEntrar: () => void;
}

export default function Signin(props: SigninProps) {
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
              id="formName"
            />
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              placeholder="voce@clinica.com.br"
              className="formInput"
              id="formEmail"
            />
            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="Crie uma senha"
              className="formInput"
              id="formPassword"
            />
            <label htmlFor="">Confirmar senha</label>
            <input
              type="password"
              placeholder="Digite sua senha novamente"
              className="formInput"
              id="confirmPassword"
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
