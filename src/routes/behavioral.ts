import { Request, Response, Router } from 'express';
import { After, Before } from '../patterns/behavioral/Strategy';

const behavioralRouter = Router();

behavioralRouter.get('/strategy', (request: Request, response: Response) =>
  response.render('patterns/behavioral/strategy', { after: After(), before: Before() }),
);

export default behavioralRouter;
