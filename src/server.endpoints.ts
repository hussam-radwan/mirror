import { Request, Response, NextFunction, Router } from 'express';
import axios from 'axios';

let router: Router = Router();

let apiKeys: any = {
  newsApiKey: '5ef869099e3841aabd3d598016157b6e',
};

router.get('/news/everything', (req: Request, res: Response) => {
  axios({
    method: 'GET',
    url: 'http://newsapi.org/v2/everything',
    headers: {
      Accept: 'application/json',
    },
    params: {
      ...req.query,
      apiKey: apiKeys.newsApiKey,
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
    url: 'http://newsapi.org/v2/top-headlines',
    headers: {
      Accept: 'application/json',
    },
    params: {
      ...req.query,
      apiKey: apiKeys.newsApiKey,
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
    url: 'https://type.fit/api/quotes',
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
