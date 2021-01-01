import { Request, Response, Router } from 'express';
import axios from 'axios';
import config from './config';

let router: Router = Router();

router.get('/news/everything', (req: Request, res: Response) => {
  axios({
    method: 'GET',
    url: `${config.news.endpoint}/everything`,
    headers: {
      Accept: 'application/json',
    },
    params: {
      ...req.query,
      apiKey: config.news.apiKey,
    },
  })
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

router.get('/news/top-headlines', (req: Request, res: Response) => {
  axios({
    method: 'GET',
    url: `${config.news.endpoint}/top-headlines`,
    headers: {
      Accept: 'application/json',
    },
    params: {
      ...req.query,
      apiKey: config.news.apiKey,
    },
  })
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

router.get('/quotes', (req: Request, res: Response) => {
  axios({
    method: 'GET',
    url: config.quotes.endpoint,
    headers: {
      Accept: 'application/json',
    },
  })
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

export default router;