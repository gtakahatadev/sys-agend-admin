import { useState } from "react";
import Login from "./pages/Login";

export default function App() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <Login aoCriarConta={() => setLogin(false)} />
    </>
  );
}
