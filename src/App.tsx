import { useState } from "react";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

export default function App() {
  const [login, setLogin] = useState(true);

  {
    return login ? (
      <Login aoCriarConta={() => setLogin(false)} />
    ) : (
      <Signin aoEntrar={() => setLogin(true)} />
    );
  }
}
