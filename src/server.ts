import express, { Response, Request } from 'express';
import cors from 'cors';
import expressLayout from 'express-ejs-layouts';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());
app.use(expressLayout);
// o parâmetro do path é o nome da pasta onde estão as views, pode ser qualquer nome
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// render recebe 3 parâmetro,
// nome do arquivo ou view, um objeto tipo any e um callback
app.get('/', (request: Request, response: Response) => response.render('index'));

// eslint-disable-next-line no-console
app.listen(process.env.PORT || '3000', () => console.log('🔥🚀'));
