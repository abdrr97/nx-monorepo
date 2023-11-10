import util from '@api/app/util';
import { sharedTypes } from '@voyage-app-b2b/shared-types';
import express from 'express';
import env from './config';

const app = express();

app.get('/', (req, res) => {
  console.log(sharedTypes());
  console.log(util.getHost());

  res.send({ message: 'Hello API' });
});

app.listen(env.port, env.host, () => {
  console.log(`[ ready ] http://${env.host}:${env.port}`);
});
