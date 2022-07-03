import express, { Response, Request } from 'express';

import cors from 'cors';
import expressLayout from 'express-ejs-layouts';
import path from 'path';
import { After, Before } from './Behavioral/Strategy/index';

const app = express();

app.use(express.json());
app.use(express.json());
app.use(cors());
app.use(expressLayout);
// o parâmetro do path é o nome da pasta onde estão as views, pode ser qualquer nome
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request: Request, response: Response) => response.render('index'));
app.get('/strategy', (request: Request, response: Response) =>
  response.render('strategy', { after: After(), before: Before() }),
);

// eslint-disable-next-line no-console
app.listen(process.env.PORT || '3000', () => console.log('🔥🚀'));
