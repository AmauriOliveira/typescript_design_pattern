import { Request, Response, Router } from 'express';
import { After as StrategyAfter, Before as StrategyBefore } from '../patterns/behavioral/Strategy';
import {
  After as TemplateMethodAfter,
  Before as TemplateMethodBefore,
} from '../patterns/behavioral/TemplateMethod';
import ObserverResult from '../patterns/behavioral/Observer';

const behavioralRouter = Router();

behavioralRouter.get('/strategy', (request: Request, response: Response) =>
  response.render('patterns/behavioral/strategy', {
    after: StrategyAfter(),
    before: StrategyBefore(),
  }),
);

behavioralRouter.get('/template_method', (request: Request, response: Response) =>
  response.render('patterns/behavioral/template_method', {
    after: TemplateMethodAfter(),
    before: TemplateMethodBefore(),
  }),
);

behavioralRouter.get('/observer', (request: Request, response: Response) =>
  response.render('patterns/behavioral/observer', {
    result: ObserverResult(),
  }),
);

export default behavioralRouter;
