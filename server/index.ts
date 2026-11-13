import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/admin', (req: Request, res: Response) => {
  const userDate = req.body;
  console.log('Dados enviados $(userDate)');
  res.json({ message: 'Dados recebidos com sucesso!' });
});

app.listen(3000);