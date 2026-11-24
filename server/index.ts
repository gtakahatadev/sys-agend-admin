import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
const porta = 3000;
import db from "./database.ts";

const app: Express = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/test", (_req: Request, res: Response) => {
  res.send("testando rota 2");
});

app.post("/admin", async (req: Request, res: Response) => {
  const { formPassword, formConfirmPassword } = req.body ?? {};
  //armanezar const do banco de dados
  const { formName, formEmail } = req.body ?? {};

  //tipo de dado, utf8, o tipo de tamanho de memória
  if (typeof formPassword !== "string" || formPassword.length === 0) {
    res.json({ message: "Informe uma senha" });
  }

  if (formPassword !== formConfirmPassword) {
    res.status(400).json({ message: "As senhas não coincidem" });
  }

  if (Buffer.byteLength(formPassword, "utf8") > 72) {
    res.status(400).json({ message: "A senha só pode ter 72 bytes" });
  }

  try {
    const senhaHash = await bcrypt.hash(formPassword, 10);

    console.log("hash da senha: ", senhaHash);
    res.json({ message: "Dados recebidos com sucesso!" });

    db.prepare(
      "INSERT INTO clients (nome, email, senha_hash) VALUES (?, ?, ?)",
    ).run(formName, formEmail, senhaHash);
  } catch (error) {
    res.status(500).json({ message: "Não foi possível processar a senha" });
  }
});

//criar uma rota que exiba a informação cadastrada pelo usuário

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
