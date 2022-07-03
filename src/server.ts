import express from 'express';
import cors from 'cors';
import expressLayout from 'express-ejs-layouts';
import path from 'path';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.json());
app.use(cors());
app.use(expressLayout);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(routes);

// eslint-disable-next-line no-console
app.listen(process.env.PORT || '3000', () => console.log('🔥🚀'));
