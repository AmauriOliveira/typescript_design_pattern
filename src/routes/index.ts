import { Request, Response, Router } from 'express';
import behavioralRouter from './behavioral';

const routes = Router();

routes.get('/', (request: Request, response: Response) => response.render('index'));
routes.use('/behavioral', behavioralRouter);

export default routes;
