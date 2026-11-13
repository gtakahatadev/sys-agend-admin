import "../css/global.css";
interface LoginProps {
  aoCriarConta: () => void;
}

export default function Login(props: LoginProps) {
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
              id="formEmail"
            />
            <label htmlFor="">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="formInput"
              id="formPassword"
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
