import { Request, Response, Router } from 'express';
import axios from 'axios';
import config from './config';
import {cpus,totalmem,freemem} from 'os';
import os from 'os-utils'

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

router.get('/weather/forcast5days', (req: Request, res: Response) => {
  axios({
    method: 'GET',
    url: `${config.weather.endpoint}/daily/5day/127164`,
    headers: {
      Accept: 'application/json',
    },
    params: {
      ...req.query,
      apikey: config.weather.apiKey,
    },
  })
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

router.get('/weather/hourly', (req: Request, res: Response) => {
  axios({
    method: 'GET',
    url: `${config.weather.endpoint}/hourly/12hour/127164`,
    headers: {
      Accept: 'application/json',
    },
    params: {
      ...req.query,
      apikey: config.weather.apiKey,
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

router.get('/system-stats',(req: Request, res: Response)=>{
  os.cpuUsage((usage:any)=>{
    res.status(200).json({
      cpu:usage,
      freeMem:os.freemem(),
      totalMem:os.totalmem(),
      usedMemPercX:1-(os.freemem()/os.totalmem()),
      freeMemPerc:os.freememPercentage(),
      load:os.loadavg(5)
    })
  })
})

export default router;
