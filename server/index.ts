import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
const porta = 3000;

const app: Express = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/test", (_req: Request, res: Response) => {
  res.send("testando rota 2");
});

app.post("/admin", (req: Request, res: Response) => {
  const userDate = req.body;
  console.log(`Dados enviados: ${JSON.stringify(userDate)}`);
  res.json({ message: "Dados recebidos com sucesso!" });
});

//criar uma rota que exiba a informação cadastrada pelo usuário

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
