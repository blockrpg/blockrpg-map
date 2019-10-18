import Koa from 'koa';
import Router from 'koa-router';
import * as BRCore from 'blockrpg-core';
import MapBlockController from './Module/MapBlock/Controller';

const app = new BRCore.Koa.App((app) => {
  return app.use(MapBlockController);
}, true);

app.Listen(3002);
